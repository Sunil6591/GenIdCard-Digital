# FootfallIQ Attendance marketing website

FootfallIQ Attendance is the Next.js App Router application at the **repository root**. The legacy event-pass project has been removed from this branch at the product owner's request. Set the hosting project's root directory to this repository root. Work branch: `feat/attendance-marketing`.

## Run locally

Use Node 24 (`nvm use` in this directory), then:

```sh
npm ci
npm run dev
```

Open http://localhost:3002. For production: `npm run build`, then `npm start`. No external fonts, images, analytics, GPS services, or WhatsApp APIs are required to run the demo.

Development output uses `.next/`; production output uses `.next-production/` to prevent concurrent development and production previews from overwriting one another's chunks. Browser QA owns port 3102 via `start:qa`, keeping it separate from your normal preview on 3002.

The primary contact route is **WhatsApp at +91 99605 09991** (`https://wa.me/919960509991`), as requested by the product owner. Header, hero, pricing, industry, footer, and floating CTAs open this conversation. No message is sent automatically. The optional enquiry form is under “Prefer to leave your details?” in the contact section; it is secondary to WhatsApp.

Logo, phone/dashboard avatar, and favicon assets are preserved unchanged from the original project's `public/digital/` folder.

## Configuration before launch

Copy `.env.example` to `.env.local` and configure:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Marketing origin for canonical, social metadata, sitemap, robots. Default `https://footfalliq.in`; choose the final origin before deployment. |
| `NEXT_PUBLIC_APP_URL` | Login destination. Default `https://attendance.footfalliq.in`; verify the real application URL before launch. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional approved company contact address; omitted by default. |
| `DEMO_WEBHOOK_URL` | Server-only HTTPS lead provider. Unconfigured forms return **503**, retain input, and explicitly state that no request was sent. |
| `DEMO_WEBHOOK_TOKEN` | Optional server-only bearer token for the lead provider. Never use a `NEXT_PUBLIC_` prefix. |

The provider receives JSON containing `name`, `business`, `contact` (email or phone), `employees` (range), optional `message`, `source`, and `submittedAt`. **The provider must persist the lead or deliver it to the responsible team before returning 2xx.** Non-2xx, network failure, and timeout return an honest failure to the visitor. Request handling validates on both client and server, rejects other origins, and includes a honeypot and body limit. Add deployment-level abuse/rate limits before enabling a public provider.

Replace the draft `/privacy` and `/terms` pages with approved legal content. They are explicitly marked as placeholders and excluded from the sitemap and indexing. Confirm claims about supervisor alerts, reminder rules, languages, and production availability. Pricing intentionally uses contact-for-pricing until approved tiers are entered in `src/data/pricing.ts`.

`public/social-preview.svg` is the social image placeholder. Replace it with a production PNG/WebP and update `src/app/layout.tsx` for reliable social-platform previews.

## Supplied WhatsApp templates

`docs/FootfallIQ_WhatsApp_Attendance_Templates.md` is the authoritative supplied document. `src/data/whatsapp-templates/{en,hi,mr}.ts` contains its six templates in all three languages, including exact whitespace, emoji, bold markers, and trailing newlines. The document explicitly marks them **drafts for Meta approval**; they have not been labeled approved. The integrity test checks all 18 bodies against this document.

1. Edit the source Markdown document, then run `npm run templates:sync` to regenerate the three catalogs. Do not edit generated message bodies independently.
2. Record actual approval in the source and update the synchronizer’s status handling when approval is confirmed; the current synchronizer deliberately emits `draft`.
3. Map named or positional variables in `src/data/attendance-story.ts`. Unresolved variables stay visible, making missing mappings easy to find.
4. Check-in/checkout confirmations, location captions, and the employee missing-attendance reminder are not supplied in the document. They remain explicitly labeled samples in `samples.ts`; do not mistake them for supplied or approved templates.
5. Use the story and daily-report language selectors to preview English, Hindi, and Marathi. Unsupplied sample interactions remain English and carry `lang="en"` even when the supplied template language changes.

Text and variable values render as escaped React text, never arbitrary HTML. Text, location, image, system, and visual interactive-message formats are supported. Quick replies use the exact supplied labels and are visual representations. Mark Attendance / End Duty do not send GPS: the narrated product workflow requires a separate interactive location request in the customer-service window, followed by the employee explicitly sharing their location.

## Story architecture

Eight scene definitions are the source of truth. Each contains narration, business benefit, conversation identity, cumulative messages, simulated date/time, annotation, and animation settings. Aarav's completed shift is separate from Neha's missing check-in; Priya's proposed supervisor alert references Neha and her site.

`useActiveStoryScene` combines IntersectionObserver with one passive, frame-coalesced position check so rapid jumps and reverse scrolling resolve correctly. React state updates only at scene boundaries. Native sticky positioning anchors the phone; Motion animates newly mounted message bubbles. CSS coordinates the final phone/dashboard transition, so GSAP is unnecessary. All observers/listeners are cleaned up.

Desktop uses the left narrative, central phone, and right contextual annotation. At intermediate widths the annotation moves below. Mobile uses a compact active heading, sticky phone, and progress bar. Short viewports (mobile height ≤700px or any height ≤540px) display individual scenes without sticking. With JavaScript disabled or unavailable, all eight scenes have static visuals and full text. Reduced-motion users get immediate scene changes without elaborate motion.

Dashboard data is illustrative and internally consistent: late arrivals are included in present; scheduled = present + absent + later shifts. Filters update sample stats, chart, and table. Report download exports filtered **sample** records, not a complete live attendance report. The owner's WhatsApp report below the dashboard uses the supplied daily-report template and covers 122 already-started shifts (112 recorded, 10 missing); 6 upcoming shifts in the dashboard are explicitly excluded.

## Analytics

`src/lib/analytics.ts` exposes `configureAnalytics`, `setAnalyticsConsent`, and `track`. No provider or third-party script is loaded by default. Register a provider in a client integration and connect your consent UI before tracking where consent is required:

```ts
configureAnalytics((event, properties) => yourProvider.capture(event, properties), { requiresConsent: true });
setAnalyticsConsent("granted"); // only after the visitor's real consent
```

Events cover hero CTAs, story start/completion/skip, stage navigation, pricing CTA, WhatsApp contact, confirmed enquiry submission, and login. They do not include visitor names or contact details. No pre-consent events are buffered.

## Verification

```sh
npm run typecheck
npm test
npm run build
npx playwright install webkit
npm run test:browser
```

Chrome tests use installed Google Chrome. WebKit tests use Playwright's WebKit engine, a useful Safari approximation; they are not tests on physical iPhones or Android devices. The browser suite covers 320–1920px widths, portrait/landscape heights, normal/reverse/rapid scene changes, mobile menu keyboard dismissal, short-screen fallback, long Devanagari messages, reduced motion, no-JS content, filters/report export, and honest form failure. Screenshots are generated in `docs/screenshots/`. Browser results and limits are recorded in `docs/verification.md`.

All app source lives in `src/`, with templates and project documentation in `docs/`. There is no nested `attendance/` application directory. The event-pass website remains available in Git history on the original branch.

Implementation references: [Motion scroll guidance](https://motion.dev/docs/react-scroll-animations), [shadcn Button](https://ui.shadcn.com/docs/components/button), [Next.js 14 TypeScript](https://nextjs.org/docs/14/app/building-your-application/configuring/typescript).
