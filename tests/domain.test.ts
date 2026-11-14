import { test } from "node:test";
import assert from "node:assert/strict";
import { boldSegments, resolveMessage, substituteVariables } from "../src/lib/template-renderer";
import { storyScenes, sceneAtPosition } from "../src/data/attendance-story";
import { validateDemoRequest } from "../src/lib/demo-request";
import { sites } from "../src/data/dashboard";
import { configureAnalytics, setAnalyticsConsent, track } from "../src/lib/analytics";
import { readFileSync } from "node:fs";
import { en } from "../src/data/whatsapp-templates/en";
import { hi } from "../src/data/whatsapp-templates/hi";
import { mr } from "../src/data/whatsapp-templates/mr";

test("template formatting preserves exact whitespace, emoji, and positional/named variables", () => {
  const text = "  Hello *{{1}}* 👋\n\nSite: {{site}}  \n{{unknown}}";
  assert.equal(substituteVariables(text, { "1": "आशा", site: "पुणे" }), "  Hello *आशा* 👋\n\nSite: पुणे  \n{{unknown}}");
  assert.equal(boldSegments("Hello *आशा* 👋\n\n").map(s => s.text).join(""), "Hello आशा 👋\n\n");
});
test("template text and injected HTML remain text tokens", () => {
  const value = substituteVariables("Welcome *{{name}}*", { name: '<img src=x onerror="alert(1)">' });
  assert.deepEqual(boldSegments(value), [{ text: "Welcome ", bold: false }, { text: '<img src=x onerror="alert(1)">', bold: true }]);
});
test("all 18 supplied approved templates match the source document verbatim, including final newlines", () => {
  const source = readFileSync(new URL("../docs/FootfallIQ_WhatsApp_Attendance_Templates.md", import.meta.url), "utf8");
  for (const section of source.split(/^## \d+\. /m).slice(1)) {
    const key = section.match(/\*\*Template name:\*\* `([^`]+)`/)![1];
    for (const [locale, catalog] of Object.entries({ en, hi, mr })) {
      const text = section.match(new RegExp("### [^\\n]+\\(`" + locale + "`\\)\\n\\n```text\\n([\\s\\S]*?)```"))![1];
      assert.equal(catalog[key].text, text, `${key} (${locale}) must preserve source text`);
      assert.equal(catalog[key].status, "approved");
    }
  }
  assert.equal(Object.keys(en).length, 6); assert.equal(Object.keys(hi).length, 6); assert.equal(Object.keys(mr).length, 6);
});
test("Hindi and Marathi approved catalogs render with exact quick-reply labels", () => {
  const message = storyScenes[0].messages[0];
  assert.match(resolveMessage(message, "hi").text, /नमस्ते/);
  assert.match(resolveMessage(message, "mr").text, /नमस्कार/);
  assert.equal(resolveMessage(message, "hi").buttons[0].label, "निर्देश");
  assert.equal(resolveMessage(message, "mr").buttons[0].label, "सूचना");
  assert.equal(resolveMessage(storyScenes[1].messages[2], "en").buttons[0].label, "Mark Attendance");
  assert.equal(resolveMessage(storyScenes[3].messages.at(-1)!, "en").buttons[0].label, "End Duty");
});
test("all eight scenes have unique identities and reverse/rapid jumps derive the earlier scene", () => {
  assert.equal(storyScenes.length, 8);
  assert.equal(new Set(storyScenes.map(s => s.id)).size, 8);
  assert.equal(sceneAtPosition([100, 800, 1500, 2200], 350), 0);
  assert.equal(sceneAtPosition([-2000, -1300, -600, 100], 350), 3);
  assert.equal(sceneAtPosition([-300, 400, 1100, 1800], 350), 0);
});
test("same-employee history is preserved and different employees cannot share message histories", () => {
  for (let i = 1; i < 5; i++) assert.deepEqual(storyScenes[i].messages.slice(0, storyScenes[i-1].messages.length), storyScenes[i-1].messages);
  assert.notEqual(storyScenes[4].conversation.id, storyScenes[5].conversation.id);
  assert.notEqual(storyScenes[5].conversation.id, storyScenes[6].conversation.id);
  assert.equal(storyScenes[5].conversation.employee, storyScenes[6].conversation.employee);
  assert.equal(storyScenes[5].conversation.site, storyScenes[6].conversation.site);
  assert.ok(storyScenes[5].messages.every(m => !m.id.startsWith("aarav")));
  for (const scene of storyScenes) assert.equal(new Set(scene.messages.map(m => m.id)).size, scene.messages.length);
});
test("sample dashboard counts are coherent: late is a subset of present", () => {
  for (const site of sites) {
    assert.equal(site.present + site.absent + site.upcoming, site.scheduled);
    assert.ok(site.late <= site.present);
    assert.ok(site.pending <= site.present);
  }
  assert.equal(sites.reduce((a,s) => a+s.present,0), 112);
});
test("demo validation accepts email and international phone, rejects malformed and oversized input", () => {
  const valid = { name: "Asha Patil", business: "Example Services", contact: "asha@example.com", employees: "26–100", message: "" };
  assert.ok(validateDemoRequest(valid).data);
  assert.ok(validateDemoRequest({ ...valid, contact: "+91 98765 43210" }).data);
  assert.ok(validateDemoRequest({ ...valid, contact: "not-a-contact" }).errors.contact);
  assert.ok(validateDemoRequest({ ...valid, employees: "unknown" }).errors.employees);
  assert.ok(validateDemoRequest({ ...valid, message: "a".repeat(2001) }).errors.message);
  assert.ok(validateDemoRequest(null).errors.name);
});
test("analytics stays silent without consent, omits buffered events, and never breaks UX", () => {
  const events: string[] = [];
  configureAnalytics((event) => events.push(event));
  track("hero_cta_click");
  assert.equal(events.length, 0);
  setAnalyticsConsent("granted"); track("story_started");
  assert.deepEqual(events, ["story_started"]);
  setAnalyticsConsent("denied"); track("login_click"); assert.equal(events.length, 1);
  configureAnalytics(() => { throw new Error("provider unavailable"); }, { requiresConsent: false });
  assert.doesNotThrow(() => track("story_completed"));
});
