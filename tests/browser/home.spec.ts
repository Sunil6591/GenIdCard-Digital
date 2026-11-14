import { test, expect } from "@playwright/test";
import { mkdir } from "node:fs/promises";

test("all viewports have meaningful content, working navigation, and no horizontal overflow", async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", e => errors.push(e.message));
  await page.goto("/");
  await expect(page.locator('head link[rel="icon"]').first()).toHaveAttribute("href", "/digital/fav.ico");
  await expect(page.getByRole("link", { name: /Chat with FootfallIQ on WhatsApp/ })).toHaveAttribute("href", "https://wa.me/919960509991");
  await expect(page.getByRole("link", { name: "Book a demo", exact: true })).toHaveCount(0);
  for (const size of [{ width: 320, height: 640 }, { width: 375, height: 667 }, { width: 390, height: 844 }, { width: 430, height: 932 }, { width: 768, height: 1024 }, { width: 1024, height: 768 }, { width: 1440, height: 1000 }, { width: 1920, height: 1080 }, { width: 844, height: 390 }]) {
    await page.setViewportSize(size);
    await expect(page.locator("h1")).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await mkdir("docs/screenshots", { recursive: true });
  await page.screenshot({ path: `docs/screenshots/${testInfo.project.name}-desktop-hero.png`, animations: "disabled" });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: `docs/screenshots/${testInfo.project.name}-mobile-hero.png`, animations: "disabled" });
  await page.getByLabel("Toggle navigation").click();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).not.toBeVisible();
  expect(errors).toEqual([]);
});

test("all scenes, reverse scrolling, rapid navigation, and mobile dashboard are deterministic", async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await expect(page.locator('[data-enhanced="true"]')).toBeAttached();
  const ids = ["onboarding", "reminder", "check-in", "checkout-reminder", "checkout", "exception", "escalation", "dashboard"];
  const stage = page.locator(".story-stage");
  async function jump(id: string) { await page.locator(`#scene-${id}`).evaluate(el => { window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 130, behavior: "instant" }); }); }
  for (const index of [0,1,2,3,4,5,6,7,6,2,0,7,5]) {
    await jump(ids[index]);
    await expect(stage.locator('[aria-current="step"]')).toHaveAttribute("href", `#scene-${ids[index]}`);
    if (index < 7) {
      await expect(stage.locator(".wa-contact > span")).toContainText(index === 5 ? "Neha Sharma" : index === 6 ? "Priya Desai" : "Aarav Patil");
      const messages = stage.locator(".chat-message");
      await expect(messages).toHaveCount([1,3,5,6,8,1,1][index]);
    }
  }
  await jump("check-in");
  await expect(stage.locator(".location-message")).toHaveCount(1);
  await expect(stage.locator(".chat-message").last()).toHaveCSS("opacity", "1");
  await page.screenshot({ path: `docs/screenshots/${testInfo.project.name}-desktop-story.png`, animations: "disabled" });
  await page.setViewportSize({ width: 390, height: 844 });
  await jump("check-in");
  await expect(stage.locator('[aria-current="step"]')).toHaveAttribute("href", "#scene-check-in");
  const phone = await stage.locator(".phone").boundingBox();
  expect(phone!.y).toBeGreaterThanOrEqual(70);
  expect(phone!.y + phone!.height).toBeLessThan(844);
  await expect(stage.locator(".chat-message").last()).toHaveCSS("opacity", "1");
  await page.screenshot({ path: `docs/screenshots/${testInfo.project.name}-mobile-story.png`, animations: "disabled" });
  await jump("dashboard");
  await expect(stage.locator(".dashboard-reveal")).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  const reveal = await stage.locator(".dashboard-reveal").boundingBox();
  expect(reveal!.y).toBeGreaterThan(190);
  expect(reveal!.y + reveal!.height).toBeLessThan(790);
  await page.screenshot({ path: `docs/screenshots/${testInfo.project.name}-mobile-dashboard.png`, animations: "disabled" });
});

test("dashboard filters and sample report export work; enquiry never falsely succeeds", async ({ page }) => {
  await page.goto("/#dashboard");
  const dashboard = page.locator("#dashboard .dashboard");
  await dashboard.getByLabel("Filter demonstration dashboard by site").selectOption("kharadi");
  await expect(dashboard.locator("tbody tr")).toHaveCount(1);
  await expect(dashboard.locator("tbody")).toContainText("Neha Sharma");
  const downloaded = page.waitForEvent("download");
  await dashboard.getByLabel("Download demonstration attendance report").click();
  expect((await downloaded).suggestedFilename()).toBe("footfalliq-sample-attendance.csv");
  // Unconfigured deployments retain the working WhatsApp route and hide the unusable form.
  await expect(page.locator(".demo-form")).toHaveCount(0);
  await expect(page.locator('#contact a[href="https://wa.me/919960509991"]').first()).toBeVisible();
  const response = await page.request.post("/api/demo", { data: { name: "Asha Patil", business: "Example Services", contact: "asha@example.com", employees: "26–100", message: "" } });
  expect(response.status()).toBe(503);
  expect((await response.json()).error).toContain("has not been sent");
});

test("reduced motion, long Devanagari text, and no-JavaScript fallback preserve the whole story", async ({ browser, page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/#scene-check-in");
  await expect(page.locator('.story-stage [aria-current="step"]')).toHaveAttribute("href", "#scene-check-in");
  await expect(page.locator(".story-stage .phone")).toBeVisible();
  await page.locator(".story-stage .message-text").last().evaluate(el => { el.textContent = "नमस्ते कर्मचारी 👋\n\nकार्यस्थल: पुणे\nआपले स्वागत आहे. ".repeat(15); });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  const chat = page.locator(".story-stage .wa-chat");
  await expect.poll(() => chat.evaluate(el => el.scrollHeight - el.clientHeight - el.scrollTop)).toBeLessThan(3);
  // Restore the DOM after the deliberate external text mutation before testing React updates.
  await page.reload();
  await page.locator("#how-it-works").getByLabel("Demo language").selectOption("mr");
  await page.locator("#scene-onboarding").evaluate(el => window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "instant" }));
  await expect(page.locator('.story-stage [aria-current="step"]')).toHaveAttribute("href", "#scene-onboarding");
  await expect(page.locator(".story-stage .message-text").first()).toContainText("नमस्कार");
  await expect(page.locator(".story-stage .chat-quick-replies").first()).toContainText("सूचना");
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 375, height: 812 } });
  const nojs = await context.newPage(); await nojs.goto("/");
  await expect(nojs.locator(".scene-static .phone")).toHaveCount(7);
  await expect(nojs.locator(".story-scene")).toHaveCount(8);
  await expect(nojs.locator("#scene-escalation .scene-copy")).toBeVisible();
  expect(await nojs.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await context.close();
});
