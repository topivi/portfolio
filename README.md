# Topi Virkki — Portfolio Website

A personal portfolio website for **Topi Virkki** (Senior Engineering Manager, Fortum / Development Studio).

Designed with a modern Scandinavian aesthetic, featuring dark/light mode, responsive layouts, accessible semantic HTML5, and a retro computing tribute.

## ✨ Features

- **Zero External Runtime Dependencies**: Built with vanilla modern HTML5, modern CSS (CSS Custom Properties, Grid, Flexbox), and vanilla JavaScript.
- **Dark & Light Mode**: Seamless theme toggle with automatic system preference detection and `localStorage` persistence.
- **Responsive & Accessible**: Optimized for desktops, tablets, and mobile viewports with semantic tags and keyboard navigation.
- **Key Highlights & Timeline**: Covers 30+ years in software craftsmanship, agile leadership, trainee mentoring, and team culture.
- **Interactive Easter Egg**: Commodore 64 BASIC terminal modal honoring 8-bit computing origins.
- **Fast & Lightweight**: Sub-second load times and high Lighthouse performance.

---

## 🚀 Running Locally

You can preview the site immediately with Python's built-in HTTP server:

```bash
# Serve the directory
python3 -m http.server 8080
```

Then open your browser to:
[http://localhost:8080](http://localhost:8080)

Or open `index.html` directly in your web browser:
```bash
xdg-open index.html
```

---

## 📁 File Structure

```
.
├── index.html       # Semantic HTML5 markup, meta tags, and structured sections
├── css/
│   └── style.css    # Complete stylesheet: responsive layouts, variables, animations
├── js/
│   └── main.js      # Interactive features: theme toggle, scroll tracking, modal
└── README.md        # Documentation and guide
```

---

## 🚢 Deployment

Because this project uses static web technologies without any build steps, it can be hosted anywhere effortlessly:

- **GitHub Pages**: Push this repository to GitHub, go to **Settings → Pages**, and select the `main` branch root.
- **Cloudflare Pages / Vercel / Netlify**: Connect your repository and select static HTML output (no build command needed).
