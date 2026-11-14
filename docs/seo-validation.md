# SEO validation status

Validation captured on 14 November 2026 before the requested deployment.

- Production build: passed, including TypeScript and static generation of the homepage, 15 marketing pages, policies, sitemap and robots.
- Unit/contract tests: 18 passed, including approved template integrity, origin validation, sitemap coverage, schema safeguards and honest lead delivery.
- Browser checks: eight Chrome and eight WebKit tests passed against the implementation build. Coverage includes metadata, canonical host, sitemap links, redirects, responsive layouts, story navigation, static mode, reduced motion, language selection and no-JavaScript content. The final build also contains small subsequent contrast, analytics queue and serialized-prop refinements; no additional full browser run was completed before the owner requested deployment.
- Initial story markup: eight server-rendered scene descriptions remain; the visible main markup decreased from 150,991 to 128,649 bytes in the inspected build, with repeated onboarding transcript instances reduced from six to one. Total HTML including server-component data increased slightly; this is not a claim of smaller overall transfer size.
- Baseline Lighthouse mobile run: performance 61, accessibility 96, best practices 100, SEO 100; LCP approximately 1.2 seconds, CLS 0, TBT 11,430 ms, including a 10-second unattributable task. These are baseline lab measurements, not final scores or field Core Web Vitals. Updated performance measurement remains outstanding.
- JSON-LD parses in automated checks. Official Schema.org and Google Rich Results tools were opened, but a completed external validation result was not obtained. Do not claim either validator passed. WebApplication describes the product without fabricated offers or reviews; software-app rich-result eligibility is not claimed.
- Privacy and terms remain clearly labeled drafts, noindexed and excluded from the sitemap.
- No public blog or translated placeholder pages were published.

## Production setup still required

Use `NEXT_PUBLIC_SITE_URL=https://footfalliq.in` and `NEXT_PUBLIC_APP_URL=https://attendance.footfalliq.in`. Optional GA4 requires a real `NEXT_PUBLIC_GA_MEASUREMENT_ID`; no Google analytics script loads without configuration and consent. Configure actual ownership tokens only if using HTML verification, or verify the Search Console domain property through DNS. Submit the production sitemap only after deployment and ownership verification. No verification or submission has been claimed.

The optional enquiry form is displayed when `DEMO_WEBHOOK_URL` is configured. Its provider must persist or deliver enquiries before returning success; add deployment-level rate limiting. WhatsApp remains the working default enquiry route.

Vercel previews automatically receive noindex directives. For other staging deployments, set `SEO_INDEXING_ENABLED=false` at build time and use deployment access protection. HTTP/HTTPS and www behavior must also be checked at the production hosting edge.

Still outstanding from the broader SEO brief: final performance and external schema validation, production smoke checks, Search Console/Bing setup and monitoring documentation, approved privacy/terms details, and the future editorial plan. These are not represented as completed by this deployment checkpoint.
