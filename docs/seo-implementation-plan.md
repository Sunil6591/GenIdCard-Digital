# FootfallIQ Attendance SEO implementation plan

Status: shared understanding confirmed and implementation authorized by the product owner on 14 November 2026. This is a plan, not a completed audit or validation report. Confirmed facts and decisions are recorded in [seo-decisions.md](./seo-decisions.md).

## Release scope

Improve the existing Next.js 14 App Router marketing website. Preserve the premium design, eight-scene WhatsApp story, language selector, mobile experience, navigation usability, and existing configured functionality.

- Canonical marketing origin: `https://footfalliq.in`.
- Application destination: `https://attendance.footfalliq.in`.
- Attendance is the only offering promoted in this release. No event-registration section.
- All demonstrated product capabilities are confirmed live, and supplied WhatsApp templates are confirmed approved. Reconcile stale source documentation, generated template status, tests, and public copy without changing exact approved message bodies.
- Demonstration people, messages, locations, and dashboard records remain illustrative. Independently invented sample messages are not automatically approved template wording.
- English marketing pages only. Preserve English, Hindi, and Marathi WhatsApp demonstrations; add no nonexistent locale alternates.
- Contact-based pricing. WhatsApp is the main enquiry route; show the optional form when delivery is configured.
- GA4 when configured, with contact clicks distinguished from delivered enquiries. Do not claim signup completion based on a marketing-site click or send attendance/tenant data to analytics.
- Prepare a standard privacy draft identifying Spopsy (Sole Proprietorship) and `yo@spopsy.com`. Keep unresolved practices explicit for review; do not present drafts as definitive or invent approved terms.
- Defer the public blog. Document future architecture and an editorial plan without publishing empty routes or unreviewed articles.

## Planned public page architecture

Publish each page only with complete, accurate, useful content and unique metadata. Keep routing and canonical trailing-slash behavior consistent with the audited Next.js configuration.

| Pages | Purpose |
| --- | --- |
| `/` | WhatsApp attendance product overview and existing interactive story |
| `/how-it-works/` | Readable, detailed employee-to-manager workflow |
| `/features/` | Feature discovery hub |
| `/features/whatsapp-attendance/` | Employee attendance through WhatsApp |
| `/features/gps-attendance/` | Explicit location submission and site-radius verification, with limitations |
| `/features/shift-management/` | Confirmed site and shift assignment capabilities |
| `/features/attendance-reminders/` | Reminder, missing-attendance, and supervisor flows |
| `/features/attendance-reports/` | Confirmed attendance visibility and reporting capabilities |
| `/solutions/` | Industry discovery hub |
| `/solutions/security-agencies/` | Guard deployments, site coverage, and shifts |
| `/solutions/housekeeping/` | Distributed cleaning teams and daily attendance follow-up |
| `/solutions/facility-management/` | Building/site teams and centralized exception visibility |
| `/solutions/construction/` | Worksite attendance and assigned work locations |
| `/solutions/field-services/` | Assigned-location attendance for mobile teams |
| `/pricing/` | Contact-based quotation information |
| `/demo/` | WhatsApp-first walkthrough enquiry and conditional form |

Maintain the existing privacy and terms routes with accurate draft status until approved content is ready. No draft, unpublished, or authenticated URLs belong in the marketing sitemap.

## Execution and evidence

1. Complete and record the pre-change audit: rendered HTML, metadata, routing, historic event URLs, story semantics, images/fonts, navigation, analytics, contact delivery, and legal pages. Consult current official Google Search Central, Next.js, and Schema.org documentation.
2. Implement critical technical SEO: validated origins, route-specific metadata, accurate sitemap/robots, supported JSON-LD, crawlable content, and justified URL handling. Separate observed historic routes from verified indexed URLs/backlinks; use search data only if available.
3. Improve homepage semantics, initial content, performance, and social assets while preserving visual behavior. Avoid duplicate long-form semantic copy and cumulative transcripts across responsive variants. Keep all eight scene explanations useful without scrolling or animation initialization.
4. Build complete landing pages and deliberate links using the existing design language. Add nested breadcrumbs and maintain an uncluttered menu. Record the keyword-to-page mapping without invented search metrics.
5. Complete conversion and trust integration: correct availability copy, contact-based pricing, conditional form, configured GA4 hooks and setup documentation, and privacy drafting with factual gaps documented. Record future blog work separately.
6. Validate the production build and published routes, metadata uniqueness, host/canonical consistency, sitemap, robots, initial HTML, links, JSON-LD, mobile content parity, accessibility, reduced motion, and no-JavaScript story behavior. Recheck the homepage after each phase. Evaluate performance with available tools and report measurement conditions and limits.

Use existing tests and add meaningful SEO checks suited to the change. Test the requested viewport widths and short heights/rotation where the environment permits. Browser emulation does not establish real Android-device performance, and lab results do not establish field INP or 75th-percentile Core Web Vitals.

## Required handoff

- SEO audit with current behavior, action, priority, and implementation status.
- Technical change summary and file inventory.
- Keyword-to-page map with titles, descriptions, related terms, and intent.
- Page status inventory distinguishing completed, draft, planned, and blocked work.
- Validation report with build, metadata, crawlability, structured data, mobile, accessibility, and performance evidence and outstanding issues.
- Production setup guide for environment variables, GA4, verification, lead delivery, hosting redirects, and monitoring.

Document missing GA4 IDs, webmaster verification tokens, lead-provider settings, policy facts, and hosting access as setup dependencies without inventing values. Do not claim external validator success, domain verification, sitemap submission, indexing, backlink preservation, authenticated-app security validation, or production field performance without evidence. Audit public application indexing behavior without accessing private employee or tenant data.
