# Lumen Edge

A sub-chromatic dark design system — hierarchy through luminance, not hue.
Built with **React + Vite**, icons by **lucide-react**.

Four reusable primitives:

- **Radial surfaces** — an ellipse-at-bottom gradient (`--surface-gradient`).
- **Hairline rims** — a 1px inset highlight at low alpha (`--rim-inset`), 0.08 → 0.16 on hover/focus.
- **Horizon line** — a 70%-wide luminous gradient at the bottom edge (`--horizon-line`).
- **Lumen focus** — a cool-white ring with a soft glow.

One signature ease: `cubic-bezier(.15, .83, .66, 1)`. Radius scale `7px / 14px`.

## Run it locally

You need **Node.js 20+** (get the LTS from https://nodejs.org).

```bash
npm install      # first time only — downloads dependencies
npm run dev      # start the dev server
```

Then open the URL it prints (usually **http://localhost:5173**). Edits hot-reload instantly.

Other scripts:

```bash
npm run build    # production build into dist/
npm run preview  # preview the production build
```

> On Windows: open **PowerShell** or **cmd** in this folder and run the same commands.
> Fonts (Space Grotesk / Inter / Space Mono) load from Google Fonts, so keep internet on.

## Project structure

```
src/
  main.jsx            app entry
  App.jsx             page composition
  index.css           design tokens + all component styles
  components/
    Nav, Hero, SignalPanel, Capabilities,
    Workbench, Plans, CTA, Footer
    Reveal.jsx         scroll-reveal wrapper
    Sparkline.jsx      inline chart
```
