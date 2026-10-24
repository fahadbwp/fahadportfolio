# B2B landing page hotfix review

Branch: `codex/b2b-ux-hotfix`. Baseline: `4c30faf`. Production was inspected on 24 October 2026. After images show the local production build, not a production deployment. No merge or production deployment was performed.

## Root causes and changes

- **Hero:** shared `.hero-section` used `clamp(85px, 8vw, 110px)` top padding. At desktop the fixed header ends at 66px, leaving 44px before the breadcrumb, followed by separate breadcrumb, kicker, title, description and offer margins. The B2B stylesheet now uses 82px top padding (74px on phones) and smaller gaps. At 1440px the CTA row moved from y=601.8 to y=517.0; at 320px from y=586.5 to y=554.7. The emerald typography is unchanged. Header clearance remains 16px on desktop and 18px on phones.
- **FAQ:** the shared ID selector `#faq` has higher specificity than `.b2b-faq-dark`, so it forced a white background beneath white headings and questions. `--gray-card` was undefined, making the FAQ cards transparent. `#faq.b2b-faq-dark` now wins the cascade and cards use the existing `--teal-card`. Computed contrast is 14.26:1 for questions and 10.68:1 for answers against the card. Mobile summaries also have horizontal padding. All six original answers and JSON-LD entries remain unchanged and match exactly after whitespace normalization.
- **Portfolio controls:** fresh production checks did not reproduce clipping of the final portfolio button at the requested widths. The existing narrow-screen column layout already helped. Remaining fragile rules included fixed heights, inherited nowrap on filled buttons, unconstrained drawer labels and a drawer that could not scroll. Controls now allow full wrapping, grow vertically where needed and stay within their containers. The final row retains equal minimum heights and consistent gaps. Every home destination remains `/`; no text was hidden or truncated.
- **Keyboard and motion:** a B2B-only module makes the closed drawer inert, contains Tab and Shift+Tab when open, makes the background inert and restores focus on close. This fixes the original drawer's lack of focus containment. Focus rings, 44px minimum heights on key controls, drawer scrolling and reduced-motion overrides are scoped to this page. Shared homepage styles and interactions were not edited.
- **Offer wording:** replaced the final reminder's unsupported “zero risk” wording with “10 additional leads at no extra charge with your first paid project order.” Services and the conditional offer remain intact.

The CSS and new interaction module have matching `assets/` and `public/assets/` copies because the build serves the public copies. Both were updated together.

## Browser regression evidence

Real installed Google Chrome, driven through `chromium.connectOverCDP`, against `dist/` served locally. Viewports: **320, 375, 390, 430, 768, 1366 and 1440px**, each 900px high. Additional short-screen check: **320×568**.

At every requested width:

- No page horizontal overflow or clipped main/footer links was detected. Portfolio text, arrow, border and padding remain visible.
- All six FAQ summaries were clicked open and closed; FAQ content matches structured data.
- Drawer opens, Escape closes it, focus returns to Menu, and both Tab directions remain contained.
- All four sample buttons open previews with successfully loaded images; Escape closes them.
- Final portfolio button was clicked and reached the homepage; referenced homepage section IDs exist.
- Local hash targets exist; Contact navigation leaves approximately 100px clearance on mobile/tablet and 130px on desktop.
- A focused portfolio button has a solid 3px outline. Reduced-motion emulation computes `scroll-behavior: auto`; transitions and animations are disabled.
- No JavaScript page errors were captured. The last drawer action can be scrolled fully into view at 320×568.

Raw evidence: [after-results.json](after-results.json), [before-results.json](before-results.json), [additional-checks.json](additional-checks.json).

External destinations: GitHub returned HTTP 200 and the expected account title. Upwork returned HTTP 403 / Cloudflare; its profile ID matches the main portfolio (`~01402e2d3e4f4322b7`), but profile ownership/content could not be independently checked. Email uses the existing `mailto:fahadsaleembwp@gmail.com`; no email was sent. No LinkedIn profile links or metrics were added.

## HR and client review

| Question | Finding |
| --- | --- |
| Is the service immediately clear? | Yes: the headline names B2B lead generation and prospect research; the description identifies decision-maker research, contact lists and organized data. All six service cards remain. |
| Can clients inspect work? | Yes: four sanitized spreadsheet previews open correctly. These demonstrate format and scope; they do not independently prove client identity, ownership or outcomes. |
| Are claims credible? | The page avoids numerical performance or years-of-experience claims. Actual employment history and client provenance cannot be established from screenshots/code alone. Existing tool/process claims remain user-provided claims. |
| Is the offer conditional? | Yes: the hero, FAQ and final reminder tie the extra ten leads to a first paid order. The final “zero risk” phrase was removed. |
| Is Upwork correct? | It matches the main portfolio's established profile URL. Cloudflare prevents independent confirmation in this environment. |
| Is contact easy? | Header, hero, FAQ and final section provide project/contact paths. Final and footer sections expose Upwork and email directly. |
| Is returning home intuitive? | Breadcrumb Home, drawer Main Portfolio, final Main Portfolio and footer Return to Main Portfolio all lead to `/`. |
| Is mobile navigation usable? | Requested widths pass; a short-screen drawer can scroll and keyboard focus stays within it. Full labels remain visible. |
| Is copy repetitive or misleading? | Repeating the conditional offer at hero/FAQ/final CTA supports conversion, though it is somewhat repetitive. No new outcome guarantees were added. Broader copy and approved sections were retained. |

## Build and lint

- `npm run build`: PASS, TypeScript project build and Vite production build. The restricted process initially could not load a native Tailwind dependency; the permitted elevated run succeeded without dependency changes.
- `npm run lint`: exit 0, with existing repository warnings (primarily vendored JavaScript plus React warnings). Full output: [lint-output.txt](lint-output.txt). This is not a warning-free repository.
- Targeted Oxlint on the new B2B module, its public copy and regression script: PASS with no diagnostics.
- `git diff --check`: PASS.

Re-run after `npm run build`: `node scripts/b2b-ux-check.mjs after`. Playwright must be available, or set `PLAYWRIGHT_MODULE` to its entry file. Set `CHROME_PATH` if Chrome is installed elsewhere. The script launches Chrome on CDP port 9236 and serves `dist/` on port 4174. `before` mode reads the public production URL; use it only when deliberately refreshing baseline images.

## Screenshots

Fresh production baselines replace unavailable historical screenshot attachments. Matching before/after images exist for every requested width in this folder.

| View | Before production | After local production build |
| --- | --- | --- |
| Desktop hero | [1440px](before-hero-1440.png) | [1440px](after-hero-1440.png) |
| Mobile hero | [390px](before-hero-390.png) | [390px](after-hero-390.png) |
| Desktop portfolio button | [1440px](before-home-1440.png) | [1440px](after-home-1440.png) |
| Mobile portfolio button | [320px](before-home-320.png) | [320px](after-home-320.png) |
| Desktop FAQ collapsed | [1440px](before-faq-collapsed-1440.png) | [1440px](after-faq-collapsed-1440.png) |
| Desktop FAQ expanded | [1440px](before-faq-expanded-1440.png) | [1440px](after-faq-expanded-1440.png) |
| Mobile FAQ collapsed | [390px](before-faq-collapsed-390.png) | [390px](after-faq-collapsed-390.png) |
| Mobile FAQ expanded | [390px](before-faq-expanded-390.png) | [390px](after-faq-expanded-390.png) |

Limitations: desktop Chrome emulation does not establish Safari/iOS or physical-device coverage. Reduced motion was emulated, rather than changing the OS preference. No screen-reader audit, email delivery test or paid-platform account verification was performed. Fixed floating headers can pass over content during ordinary scrolling; tested hero and Contact anchor positions clear the header. Production remains unchanged until an approved merge/deployment.
