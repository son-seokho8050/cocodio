---
name: Popup system
description: How the marketing-site popup modal works and how to verify it
---
- Popups are defined as an array in `PopupManager` (client/src/components/popup-modal.tsx). Each entry: id, title, imageUrl (import), linkUrl, ctaLabel, ctaLabelActive, delay (seconds), isLarge, position.
- CTA is a two-label crossfade: `ctaLabel` shows by default; on click it fades/scales to `ctaLabelActive` (positioned absolute inset-0 over the default so button width stays constant), then navigates. `ctaExpanded` state drives it and resets on close.
- **CTA navigation must be reliable, not popup-blocked.** For a "show text, then go" sequence, navigate SAME-TAB via `window.location.href` after a short setTimeout. Do NOT use a delayed `window.open(_,'_blank')` — deferred new-tab opens (outside the click's user-activation window) get popup-blocked.
- **Do not nest a `<button>` inside an `<a>`** (invalid interactive nesting). Make the clickable image a `<div onClick>` and keep the CTA as a sibling `<button>`.
- Keep `aria-label` state-aware (match the visible label) so screen readers don't announce the post-click text before click.
- Flex gotcha: a child you want to collapse to width 0 inside an `inline-flex`/`flex` parent needs `min-width: 0` — flex items default to `min-width: auto` which overrides `max-width: 0`.

**Verifying popups visually:** app_preview screenshots almost always MISS delayed popups — a fresh navigation resets the `delay` timer, so the capture lands before the popup appears. Rely on the browser console logs (`Showing popup <id>` + `Image loaded for <id>`) as proof of correct behavior instead of looping screenshots.
