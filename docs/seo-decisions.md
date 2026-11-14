# Attendance SEO discovery

## Confirmed product facts

- On 14 November 2026, the product owner confirmed that all demonstrated product capabilities are live in production and all supplied WhatsApp templates are approved. This includes the demonstrated supervisor escalation and the supplied English, Hindi, and Marathi templates.
- Existing repository statements that these capabilities are proposed or that supplied templates await approval are stale. Reconcile those statements during implementation, including the template source document and generated catalogs.
- Illustrative people, conversations, and dashboard records remain demonstration data. Approval of supplied templates does not establish approval of independently invented sample message wording.
- The confirmation applies to demonstrated capabilities. It does not establish additional features or export formats absent from the current demonstration.

## Existing brief constraints

- Improve the existing attendance website and preserve its design, mobile experience, navigation, and eight-scene WhatsApp story.
- The canonical marketing origin is https://footfalliq.in; application login is https://attendance.footfalliq.in.
- Audit historic event-registration URLs before changing their routing. Removing legacy source code does not establish that the offering has been retired.

## Confirmed scope decisions

- On 14 November 2026, the product owner chose an Attendance-only focus for this release. Do not restore event-registration marketing or publish an `/events/` section in this scope.
- This release decision does not establish that the event-registration offering has permanently ended. Assess historic URLs individually; use redirects only for genuinely moved content with relevant replacements, and appropriate removal responses where justified. Do not redirect unrelated event URLs to the Attendance homepage.
- The product owner chose contact-based pricing. The `/pricing/` page will explain the quotation process and link to the existing WhatsApp contact. Do not invent rates, free trials, discounts, billing periods, or structured-data offers with fabricated prices.
- The product owner agreed to Google Analytics 4 for website and conversion measurement. Track WhatsApp contact clicks separately from demo enquiries confirmed as delivered; a click is not evidence of a conversation or a captured lead. The repository currently has provider-independent event hooks but no configured analytics provider. GA4 property configuration and verification remain implementation/setup work.
- The product owner confirmed WhatsApp as the primary contact method on `/demo/`. Show the optional enquiry form only when its lead-delivery webhook is configured; preserve its implementation for configured deployments. Without that configuration, present a working WhatsApp contact route rather than an unusable form.
- The product owner chose English-only marketing pages for the initial release, retaining the existing English, Hindi, and Marathi WhatsApp demonstrations. Keep the architecture suitable for future translated pages; message-template languages do not imply that translated website pages exist.
- Asked about approved policies, the product owner requested a standard privacy policy. Prepare a policy draft tailored to confirmed FootfallIQ practices, rather than claiming an existing approved policy was supplied. Establish the legal operator and privacy contact and resolve factual gaps before representing the policy as definitive. This request does not establish approval of the existing terms placeholder.
- The product owner confirmed the current operator as Spopsy (Sole Proprietorship) and the privacy contact as `yo@spopsy.com`. Use these confirmed details for Attendance's privacy draft and relevant operator/contact information.
- The product owner chose to keep the blog for later. Document the future publishing architecture and a focused editorial plan; do not publish blog routes, placeholder articles, or article sitemap entries in this release. Public blog implementation and article publication are deferred.

## Historic policy evidence

- The legacy contact page at commit `5625d5c` identifies the operator as Spopsy (Sole Proprietorship), and the legacy contact/privacy pages use `yo@spopsy.com`. The product owner has confirmed these operator/contact details as current for Attendance; other historical business details have not been reconfirmed.
- Do not carry over the legacy event policy's compliance, retention, deletion, security, or cookie assertions as facts about Attendance. The old policy describes a different product and predates the planned GA4 integration.

## Session status

The product owner confirmed shared understanding and explicitly authorized implementation on 14 November 2026. This file records confirmed facts and decisions; it is not a completed SEO audit.

## Complete brief received

The product owner supplied sections 12–26 and the final implementation instruction on 14 November 2026. The scope includes the following deliverables:

- An evidence-based audit with current behavior, proposed improvements, priority, and implementation status, completed before website code changes.
- Technical SEO, validated production origins, page-specific metadata and canonicals, sitemap and robots metadata routes, accurate JSON-LD, and historic URL assessment.
- Homepage semantic and performance improvements that preserve the existing premium design, mobile experience, and eight-scene story, including reduced-motion and JavaScript-failure behavior.
- Complete product and industry landing pages with original content, deliberate internal links, breadcrumbs, and a keyword-to-page mapping. Prioritize How It Works, WhatsApp Attendance, GPS Attendance, Shift Management, Security Agencies, Housekeeping, and Facility Management.
- Contact-based pricing, a WhatsApp-first demo page, honest optional form behavior, GA4 integration when configured, and privacy/terms integration without presenting draft policies as approved.
- Blog publishing architecture and a focused editorial plan; publish articles only when useful and reviewed, using genuine author and date information. No untranslated placeholder locale pages.
- Automated checks appropriate to the existing project, a production build, mobile and desktop regression checks, measured performance findings, and validation reports with their limits stated.
- Production setup and monitoring documentation for environment variables, analytics, lead delivery, Search Console, Bing Webmaster Tools, sitemap submission, and deployment-level redirects.

Follow the brief's six phases: critical technical SEO; homepage and performance; high-value landing pages; conversion and trust; content expansion; validation and monitoring. Recheck homepage design and storytelling after each phase.

External setup or validation must be reported accurately: do not claim Search Console ownership, sitemap submission, indexing, rich-result validation, field Core Web Vitals, or cross-domain signup completion without evidence. Keep private application and tenant data outside the marketing website and analytics.
