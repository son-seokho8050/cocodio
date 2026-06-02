---
name: Asset optimization for COCODIO site
description: How media assets are served and the rule for adding new heavy media
---

# Asset pipeline rule
Components/pages import media directly from `attached_assets/` via the `@assets/...`
alias, and Vite bundles + hashes each imported file into `dist/public/assets/`.
Files in `attached_assets/` that are NOT imported are never served (no runtime cost),
only repo bloat.

**Rule:** any new image/video added under `attached_assets/` and imported MUST be
optimized first, or it ships full-size to every visitor on that route.

**Why:** the source assets are raw exports (4000px JPGs, 64MB mp4s) that tanked page
load. Optimizing in place (ImageMagick for images, ffmpeg for video) with originals
backed up to `attached_assets/.originals_backup/` fixed it.

**How to apply:**
- Images: `magick IN -resize '1600x1600>' -strip -interlace Plane -quality 82-88 OUT`.
  Price-table / text screenshots (e.g. 교습비 계시표 like `입시코코`) need higher res
  (~2000px) + q88 for legibility.
- Opaque PNGs → JPG (flatten white) saves ~85%; update the import extension too.
- Video: `ffmpeg -i IN -vf "scale='min(1280,iw)':-2" -c:v libx264 -preset slow -crf 30
  -c:a aac -b:a 96k -movflags +faststart OUT`. Keep audio if a sound/unmute toggle exists.
  Add a `poster` (extract a frame) and use `preload="metadata"` on autoplay `<video>`.
- Tooling: ImageMagick (`magick`) and ffmpeg are available; `sharp` and `bc` are NOT
  (use awk for math).
- Routes are code-split in `client/src/App.tsx` via `lazy()` + `Suspense` (Home eager).
