import { test } from "node:test";
import assert from "node:assert/strict";
import { validateOrigin } from "../src/lib/origin";
import { marketingPages, marketingPageByPath } from "../src/data/marketing-pages";
import { pageMetadata } from "../src/lib/seo";
import { websiteGraph, breadcrumbData } from "../src/lib/structured-data";
import sitemap from "../src/app/sitemap";
import robots from "../src/app/robots";

test("marketing origin cannot become an app, preview, insecure or credential-bearing URL", () => {
  const canonical = "https://footfalliq.in";
  assert.equal(validateOrigin(undefined, canonical), canonical);
  assert.equal(validateOrigin(canonical + "/", canonical), canonical);
  for (const invalid of ["http://footfalliq.in", "https://attendance.footfalliq.in", "https://www.footfalliq.in", "https://project.vercel.app", "http://localhost:3002", canonical + "/features", canonical + "?x=1", "https://user:password@footfalliq.in"]) {
    assert.throws(() => validateOrigin(invalid, canonical));
  }
});
test("every published page has a unique search intent, metadata and valid related destinations", () => {
  for (const key of ["path", "title", "description", "h1", "primaryKeyword"] as const) {
    assert.equal(new Set(marketingPages.map(page => page[key])).size, marketingPages.length, key);
  }
  for (const page of marketingPages) {
    assert.ok(page.sections.length >= 2);
    assert.ok(page.faqs.length >= 2);
    for (const path of page.related) assert.ok(marketingPageByPath.has(path), `${page.path} links to ${path}`);
    const metadata = pageMetadata(page.title, page.description, page.path);
    assert.equal(metadata.alternates?.canonical, page.path);
    assert.equal(metadata.openGraph?.url, page.path);
    assert.equal(metadata.description, page.description);
  }
});
test("sitemap contains all published pages and no draft policies, application or blog URLs", () => {
  const urls = sitemap().map(item => item.url);
  assert.equal(new Set(urls).size, 1 + marketingPages.length);
  assert.ok(urls.every(url => new URL(url).origin === "https://footfalliq.in"));
  assert.ok(!urls.some(url => /privacy|terms|blog|attendance\.footfalliq/.test(url)));
  assert.ok(sitemap().every(item => !item.lastModified));
  const rules = robots().rules;
  assert.ok(!JSON.stringify(rules).includes("/privacy"));
});
test("descriptive schema uses confirmed facts without invented rich-result prerequisites", () => {
  const graph = websiteGraph();
  assert.deepEqual(graph["@graph"].map(node => node["@type"]), ["Organization", "WebSite", "WebApplication"]);
  const text = JSON.stringify(graph);
  for (const fabricated of ["aggregateRating", "offers", "review", "streetAddress", "sameAs", "SearchAction"]) assert.ok(!text.includes(`"${fabricated}"`));
  assert.equal(graph["@graph"][2].url, "https://attendance.footfalliq.in");
  const trail = breadcrumbData([{ name: "Home", path: "/" }, { name: "Features", path: "/features" }]);
  assert.equal(trail.itemListElement[1].position, 2);
  assert.equal(trail.itemListElement[1].item, "https://footfalliq.in/features");
});
