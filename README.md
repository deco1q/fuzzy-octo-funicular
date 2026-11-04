# Lumen Edge

A sub-chromatic dark design system — hierarchy through luminance, not hue.

Built on four reusable primitives:

- **Radial surfaces** — an ellipse-at-bottom gradient (`--surface-gradient`).
- **Hairline rims** — a 1px inset highlight at low alpha (`--rim-inset`), 0.10 → 0.16 on hover/focus.
- **Horizon line** — a 70%-wide luminous gradient at the bottom edge (`--horizon-line`).
- **Lumen focus** — a cool-white 1px ring with a 16px glow.

One signature ease: `cubic-bezier(.15, .83, .66, 1)` at 1000ms. Radius scale `7px / 14px`.

## Files

- `index.html` — the landing page / specimen showcase.
- `style.css` — the token set and component styles.
- `script.js` — segmented-control interactivity.

Open `index.html` in a browser — no build step.
