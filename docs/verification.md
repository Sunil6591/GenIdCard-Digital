# Implementation verification

Checkpoint requested by the product owner on 14 November 2026. The Attendance app has been moved to the repository root on `feat/attendance-marketing`.

## Passed

- Production build from the repository root: `npm run build`.
- TypeScript validation passed during the production build; standalone typecheck also passed before the root move.
- Twelve domain/API tests passed before the root move, including exact-source checks for all 18 supplied draft template bodies, variable substitution, localized button labels, conversation separation, coherent sample counts, consent gating, and honest lead-delivery outcomes.
- The latest full browser run passed six of eight tests across Google Chrome and Playwright WebKit: responsive navigation/no overflow, all eight scene states with forward/reverse/rapid scrolling, mobile dashboard bounds, sample report download, dashboard filters, and unconfigured form failure.
- Browser viewports checked: 320×640, 375×667, 390×844, 430×932, 768×1024, 1024×768, 1440×1000, 1920×1080, and 844×390.

## Remaining browser regressions

The combined reduced-motion/long-message/localization/no-JavaScript test is still failing in both engines. Direct navigation to `/#scene-check-in` can initialize the active scene incorrectly as the static fallback becomes sticky. The WebKit fixture also fails when switching language after directly mutating message text for the long-content stress case. These failures remain visible in the committed browser suite; the checkpoint is not represented as having a fully green acceptance suite.

Physical iPhone/Android testing, screen-reader testing, and Lighthouse scores have not been obtained. WebKit is a Safari-engine approximation rather than a physical-device Safari test.

## Screenshots

- [Desktop homepage](screenshots/chrome-desktop-hero.png)
- [Mobile homepage](screenshots/chrome-mobile-hero.png)
- [Desktop story](screenshots/chrome-desktop-story.png)
- [Mobile story](screenshots/chrome-mobile-story.png)
- [Mobile dashboard](screenshots/chrome-mobile-dashboard.png)

Equivalent WebKit captures are in the same directory.

## Reproduce

Use Node 24 (`nvm use`), then `npm ci`, `npm test`, `npm run build`, and `npm run test:browser`. Chrome uses the installed browser; WebKit must be installed with `npx playwright install webkit`. This session installed WebKit under `/tmp/footfalliq-playwright`; set `PLAYWRIGHT_BROWSERS_PATH` to that directory when reusing it. Browser QA uses port 3102; the normal development/production preview uses 3002.

WhatsApp enquiries work through the supplied public number. Optional form delivery, approved legal policies, final template approval, and the final marketing/login origins still require launch configuration as documented in the README.
