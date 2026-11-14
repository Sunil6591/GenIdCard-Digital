import { test } from "node:test";
import assert from "node:assert/strict";
import { POST } from "../src/app/api/demo/route";
const payload = { name: "Asha Patil", business: "Example Services", contact: "asha@example.com", employees: "26–100", message: "A sample enquiry" };
function request(body: unknown = payload, origin = "https://footfalliq.in") {
  return new Request("https://footfalliq.in/api/demo", { method: "POST", headers: { "Content-Type": "application/json", Origin: origin }, body: JSON.stringify(body) });
}
test("unconfigured provider returns 503 and cannot claim submission success", async () => {
  const saved = process.env.DEMO_WEBHOOK_URL; delete process.env.DEMO_WEBHOOK_URL;
  try { const response = await POST(request()); assert.equal(response.status, 503); assert.equal((await response.json()).success, undefined); } finally { if (saved !== undefined) process.env.DEMO_WEBHOOK_URL = saved; }
});
test("invalid requests and other origins cannot reach the provider", async () => {
  assert.equal((await POST(request({}, "https://elsewhere.example"))).status, 403);
  assert.equal((await POST(request({ ...payload, contact: "invalid" }))).status, 400);
  assert.equal((await POST(request({ ...payload, website: "spam" }))).status, 400);
});
test("provider acceptance is required before success and upstream failures preserve failure state", async () => {
  const savedURL = process.env.DEMO_WEBHOOK_URL;
  const savedFetch = globalThis.fetch;
  process.env.DEMO_WEBHOOK_URL = "https://leads.example.test/submit";
  try {
    let captured = "";
    globalThis.fetch = async (_input, init) => { captured = String(init?.body); return new Response("stored", { status: 201 }); };
    const response = await POST(request()); assert.equal(response.status, 200); assert.equal((await response.json()).success, true);
    assert.equal(JSON.parse(captured).contact, payload.contact); assert.equal(JSON.parse(captured).source, "attendance-marketing");
    globalThis.fetch = async () => new Response("unavailable", { status: 500 });
    const failure = await POST(request()); assert.equal(failure.status, 502); assert.equal((await failure.json()).success, undefined);
  } finally { globalThis.fetch = savedFetch; if (savedURL === undefined) delete process.env.DEMO_WEBHOOK_URL; else process.env.DEMO_WEBHOOK_URL = savedURL; }
});
