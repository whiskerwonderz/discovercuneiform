# Discover Cuneiform

A free educational web app for exploring cuneiform, the world's oldest writing system. Learn to read and write like an ancient Mesopotamian scribe.

**Live site:** [discovercuneiform.info](https://discovercuneiform.info)

## Features

### Explore
Browse famous cuneiform tablets from history, including the Epic of Gilgamesh, Code of Hammurabi, and more. Use the Sign Explorer to identify and learn individual cuneiform signs.

### Learn (Scribe School)
Interactive lessons teaching cuneiform writing from individual wedge strokes to full signs. Practice drawing on a virtual clay tablet.

### Create (Verse in Clay)
Write poetry or prose and see it rendered in cuneiform script. Export as PNG, SVG, or PDF with multiple visual styles.

## Tech Stack

- **Framework:** SvelteKit with Svelte 5 runes
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Testing:** Playwright (152 E2E tests)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npx playwright test

# Build for production
npm run build
```

## Data Sources

Cuneiform sign data compiled from:
- [ORACC Sign List (OSL)](https://oracc.org) - CC0 Public Domain
- [Unicode Cuneiform Block](https://unicode.org/charts/PDF/U12000.pdf)

## License

MIT License - See [LICENSE](LICENSE) for details.
