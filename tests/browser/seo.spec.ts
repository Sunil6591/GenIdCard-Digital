import { test, expect } from "@playwright/test";
import { marketingPages } from "../../src/data/marketing-pages";

test("all sitemap URLs expose unique metadata, HTML, valid structured data and crawlable links", async ({ request }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const urls = [...(await sitemap.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
  expect(urls).toHaveLength(marketingPages.length + 1);
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  for (const url of urls) {
    expect(new URL(url).origin).toBe("https://footfalliq.in");
    const path = new URL(url).pathname;
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
    const html = await response.text();
    const title = html.match(/<title>(.*?)<\/title>/)![1];
    const description = html.match(/<meta name="description" content="([^"]+)"/)![1];
    expect(titles.has(title), path).toBe(false); titles.add(title);
    expect(descriptions.has(description), path).toBe(false); descriptions.add(description);
    expect(html.match(/<h1(?:\s|>)/g), path).toHaveLength(1);
    expect(new URL(html.match(/<link rel="canonical" href="([^"]+)"/)![1]).href).toBe(url);
    expect(html).toContain('content="index, follow"');
    expect(html).toContain('property="og:image" content="https://footfalliq.in/social-preview.png"');
    expect(html).not.toContain('name="keywords"');
    expect(html).not.toContain('href="http://localhost');
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
    expect(blocks.length).toBeGreaterThan(0);
    for (const block of blocks) expect(block["@context"]).toBe("https://schema.org");
    if (path === "/") {
      expect(html.match(/data-scene=/g)).toHaveLength(8);
      expect(html.match(/class="scene-copy"/g)).toHaveLength(8);
      expect(html).not.toContain("SUPPLIED DRAFT");
      expect(html).not.toContain("proposed escalation");
    } else {
      const page = marketingPages.find(page => page.path === path)!;
      expect(html).toContain(page.intro.replace(/[&<>"\']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "\'": "&#x27;" }[char]!)));
      expect(blocks[0]["@type"]).toBe("BreadcrumbList");
    }
    for (const href of new Set([...html.matchAll(/<a [^>]*href="(\/[^"#?]*)"/g)].map(match => match[1]))) {
      expect((await request.get(href)).status(), `${path} → ${href}`).toBe(200);
    }
  }
});

test("policies, retired URLs, contact redirect, hosts, robots and social asset behave deliberately", async ({ request }) => {
  for (const path of ["/privacy", "/terms"]) {
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    expect(await response.text()).toContain('content="noindex, follow"');
    expect(/draft|placeholder/i.test(await response.text())).toBe(true);
  }
  for (const path of ["/blog", "/events", "/offerings", "/team", "/about", "/nonexistent-page"]) expect((await request.get(path)).status(), path).toBe(404);
  const contact = await request.get("/contact", { maxRedirects: 0 });
  expect(contact.status()).toBe(301);
  expect(contact.headers().location).toBe("/demo");
  const www = await request.get("/features/gps-attendance?source=test", { headers: { host: "www.footfalliq.in" }, maxRedirects: 0 });
  expect(www.status()).toBe(301);
  expect(www.headers().location).toBe("https://footfalliq.in/features/gps-attendance?source=test");
  const http = await request.get("/pricing", { headers: { host: "footfalliq.in", "x-forwarded-proto": "http" }, maxRedirects: 0 });
  expect(http.status()).toBe(301);
  expect(http.headers().location).toBe("https://footfalliq.in/pricing");
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain("Sitemap: https://footfalliq.in/sitemap.xml");
  expect(await robots.text()).not.toContain("Disallow: /privacy");
  const image = await request.get("/social-preview.png");
  expect(image.status()).toBe(200); expect(image.headers()["content-type"]).toContain("image/png");
  const buffer = await image.body(); expect(buffer.readUInt32BE(16)).toBe(1200); expect(buffer.readUInt32BE(20)).toBe(630);
});

test("landing pages remain readable across requested viewport widths and without JavaScript", async ({ page, browser }) => {
  const errors: string[] = []; page.on("pageerror", error => errors.push(error.message));
  for (const path of ["/how-it-works", "/features/gps-attendance", "/solutions/security-agencies", "/demo"]) {
    await page.goto(path);
    for (const width of [320, 375, 390, 430, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: width < 768 ? 844 : 1000 });
      await expect(page.locator("h1")).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `${path} at ${width}px`).toBe(true);
    }
  }
  expect(errors).toEqual([]);
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 320, height: 640 } });
  const nojs = await context.newPage(); await nojs.goto("/how-it-works");
  await expect(nojs.locator(".marketing-body > section")).toHaveCount(9);
  await expect(nojs.locator('.marketing-card[href="/features/gps-attendance"]')).toBeVisible();
  await context.close();
});

test("static story mode and short-screen language selection preserve explanations", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 }); await page.goto("/");
  await page.getByRole("button", { name: "Read all steps without animation" }).click();
  await expect(page.locator("#scene-escalation .scene-copy")).toBeVisible();
  await expect(page.locator(".story-stage")).toHaveCount(0);
  await page.locator("#how-it-works").getByLabel("Demo language").selectOption("hi");
  await expect(page.locator("#scene-onboarding .message-text")).toContainText("नमस्ते");
  await page.getByRole("button", { name: "Return to animated story" }).click();
  await page.setViewportSize({ width: 375, height: 640 });
  await expect(page.locator("#scene-onboarding .scene-static")).toBeVisible();
  await expect(page.locator("#scene-onboarding .message-text")).toContainText("नमस्ते");
});
