import { writeFile } from "node:fs/promises";
import { marketingPages } from "../src/data/marketing-pages";
import { homeTitle, homeDescription } from "../src/lib/seo";
const home = { path: "/", title: homeTitle, description: homeDescription, primaryKeyword: "WhatsApp attendance system", secondaryKeywords: ["WhatsApp-based attendance system", "employee attendance on WhatsApp"], intent: "Discover and evaluate the product category" };
const rows = [home, ...marketingPages];
const cell = (value: string) => value.replace(/\|/g, "\\|").replace(/\n/g, " ");
async function main() {
await writeFile("docs/seo-keyword-map.md", `# Keyword-to-page mapping

Candidate terms reflect product relevance and search intent, not measured demand. Search volume, difficulty and ranking opportunity require validation using real search/keyword data. English is the only public website language in this release; message-template language previews do not create locale URLs.

The existing Next.js configuration uses paths without trailing slashes except the root. Slash-suffixed requests normalize to these canonical paths.

| Page URL | Primary keyword | Secondary keywords | Search intent | Suggested/implemented title | Suggested/implemented description |
| --- | --- | --- | --- | --- | --- |
${rows.map(page => ["https://footfalliq.in" + page.path, page.primaryKeyword, page.secondaryKeywords.join(", "), page.intent, page.path === "/" ? page.title : `${page.title} | FootfallIQ`, page.description].map(cell).join(" | ")).map(row => `| ${row} |`).join("\n")}

Keep one primary intent per page. How It Works explains the complete process; feature pages explain a capability and its limits; solution pages apply the workflow to distinct operational situations. Avoid creating near-identical city pages or assigning the homepage's primary phrase to every landing page.
`);
await writeFile("docs/seo-page-status.md", `# Landing-page status

Completed means implemented and validated in the local production build, not deployed, indexed, or ranking. See [seo-validation.md](./seo-validation.md) for evidence and remaining setup.

| URL | Status | Notes |
| --- | --- | --- |
${rows.map(page => `| ${page.path} | Completed locally | Server-rendered content, unique metadata, crawlable links and sitemap entry |`).join("\n")}
| /privacy | Draft | Tailored policy; operator/contact confirmed; provider, retention and processing details need review; noindex and excluded from sitemap |
| /terms | Draft | Approved legal/commercial terms not supplied; noindex and excluded from sitemap |
| /blog and articles | Planned for later | Public implementation and publishing deferred by owner; no placeholder routes or sitemap entries |
| /hi and /mr marketing pages | Planned for later | Publish only complete translations with reciprocal hreflang; current message selector is preserved |
| /events | Out of scope | Attendance-only release; no restored event homepage |

No product landing page is blocked on missing content. GA4 activation, webmaster verification, form delivery, approved policies and field-performance data have separate external setup dependencies.
`);
console.log(`Wrote keyword mapping and status for ${rows.length} indexable pages.`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
