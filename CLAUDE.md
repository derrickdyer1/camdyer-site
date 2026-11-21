# Cam Dyer website — notes for Claude

Static site (no build step) hosted on Netlify, auto-deployed from this GitHub repo on every push to `main`.

- `index.html` — the whole page (HTML, CSS, JS). Only change it for layout/feature work.
- `config.js` — ALL routine updates go here: scores (`results`), Cam's per-game stats + box score links (`games`), senior points fallback, GoFundMe `raised`/`goal`, `milestones`, `quotes`, extra `photos`, `vlogs`, `youtubeChannelId`, `ads`, `adsense`, `sponsors`, social links.
- `photos/` — images and video clips (keep each file under ~20 MB; convert videos to H.264 MP4).
- Game IDs: g01 = first game of the 2026-27 schedule (Nov 14 at SUNY Delhi), numbered in schedule order.

Routine after-game update: add `results.gXX`, add `games.gXX` {pts, reb, ast, box}, commit "Game XX: <opponent>", push.
Always check config.js still parses (node --check config.js) before pushing.
Sponsors/ads on Cam's personal site are NIL activity — Derrick handles compliance with SUNY Brockport.
