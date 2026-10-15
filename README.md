# Cyclekind

A responsive, bilingual (English / Simplified Chinese) period tracker with a light-purple theme. All period dates, symptoms and notes stay in the current browser's local storage. The app has no analytics, model calls or record-upload endpoint.

## Run locally

Requires Node.js 20 or newer; no package installation needed.

```sh
node server.mjs
```

Open http://127.0.0.1:4173. Use the same address/browser each time to access existing records.

```sh
npm test
npm run build
```

The static build is in `dist/`. Serve over HTTPS when hosting; localhost works for development.

## Features

- Add/edit/delete periods, including an ongoing period.
- Daily symptom, discomfort and note check-ins; calendar and history.
- Median next-period estimate after four recorded starts, using up to six recent start-to-start intervals. The historical min/max window is not a statistical confidence interval. No invented roll-forward periods or fertile-day prediction.
- Prediction pause, chronological validation, transparent method page.
- English and Simplified Chinese interface, health guidance, error messages and dates; language preference saved separately.
- Compact dashboard with a visible English / 中文 selector, estimated-date timeline, and four quick discomfort choices.
- Cycle-length and symptom-frequency charts describe recorded history. Symptom counts use all saved check-ins as the denominator; they do not infer cycle phases or diagnose conditions.
- Expandable tips, source details, estimation method and storage explanations keep the main screens brief. Care guidance remains directly available from Tips.
- Fictional demo records isolated in memory; they never overwrite personal records.
- Validated JSON backup export/import, with explicit replacement confirmation and delete controls.

## Health content and limits

Health cards link to NHS, ACOG and U.S. Office on Women's Health sources checked on 8 October 2026. Source checking is not clinical review, certification, or endorsement. Guidance is educational; the app cannot diagnose conditions or recommend personalized treatment. Its simple prediction algorithm is not clinically validated and must not be used to prevent pregnancy.

Estimates are withheld for intervals under 15 or over 90 days, or recent variation greater than 20 days. These are software heuristics, not diagnostic or normality thresholds.

## Privacy

Records are isolated by browser profile and site origin. Changing browsers, moving from localhost to the hosted site, or clearing browser storage loses access unless a backup is imported. Browser storage and exported JSON are not encrypted by the app. Anyone with access to the browser profile may view the records. Do not add real records to demo mode; demo changes disappear on exit/reload.

Private hosting access may use platform authentication; it is separate from the browser-only record storage. The page blocks outgoing app requests with Content Security Policy. Visiting an external source link opens its publisher's website.

Corrupt or inaccessible storage locks ordinary writes so existing data is not silently overwritten. Explicit import/reset is available as recovery.

## Architecture

Vanilla ES modules with no runtime dependencies: `app.js` renders UI; `cycle-engine.js` contains pure date/estimation logic; `storage.js` validates and persists records; `health-content.js` holds sourced bilingual copy; `i18n.js` handles the rest of the UI. Tests cover calculation and storage boundaries.
