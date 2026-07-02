---
name: Homepage performance
description: What actually slows the COCODIO homepage and where to look first
---
- Homepage images are already modest (150–520KB) and mostly `loading="lazy"`; the hero video is ~3MB webm/mp4 with a poster (acceptable). Don't assume images are the bottleneck.
- **Biggest culprit found:** a synchronous, render-blocking `<script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY">` in `client/index.html` <head>, never used anywhere (contact section uses Google Maps iframe embeds). A sync external script in <head> blocks HTML parsing/render. Removed it.
- **How to apply:** when the site "feels slow," first audit `client/index.html` <head> for synchronous third-party `<script>` tags (no async/defer) and dead/placeholder integrations (GA with placeholder id, kakao/facebook placeholders) before optimizing images.
