---
name: Popup system
description: How the marketing-site popup modal works and how to verify it
---
- Popups are defined as an array in `PopupManager` (client/src/components/popup-modal.tsx). Each entry: id, title, imageUrl (import), linkUrl, ctaLabel, delay (seconds), isLarge, position.
- `ctaLabel` supports a `{word}` token (e.g. `코코의 여름{특강}, 둘러보기`): the braced word is hidden by default and revealed via a maxWidth/opacity transition when the CTA button is clicked. Parsed with `/^(.*)\{(.+?)\}(.*)$/`.
- **CTA click must open links synchronously** (`window.open` directly in the click handler) — deferring it inside setTimeout gets popup-blocked because it's outside the user-activation window.
- **Do not nest a `<button>` inside the image `<a>`** (invalid interactive nesting). When a CTA button is needed, render the image inside a clickable `<div onClick>` instead and keep the button as a sibling.

**Verifying popups visually:** app_preview screenshots almost always MISS delayed popups — a fresh navigation resets the `delay` timer, so the capture lands before the popup appears. Rely on the browser console logs (`Showing popup <id>` + `Image loaded for <id>`) as proof of correct behavior instead of looping screenshots.
