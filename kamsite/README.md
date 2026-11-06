# Kamran Hussain's Personal Website

Personal research website built with Next.js 15 (App Router, static export), TypeScript, and Tailwind CSS, deployed to GitHub Pages at kamranhussain.com.

## Pages

- `/` Home, `/research/` Research (papers, talks, posters), `/projects/` Projects: the public navigation.
- `/podcast/` The Kam Show archive: unlisted (no links from the site, `noindex, follow`).
- `/about/` and `/talks/`: forwarding pages to `/` and `/research/#talks`.
- `/blog/`: legacy posts, kept out of navigation.

Content lives in typed records in `src/lib/site-data.ts` (papers, talks, posters, projects, links) and `src/lib/podcast-data.ts` (episodes migrated from the RSS feed).

## Getting Started

```bash
cd Kam-Website/kamsite
npm install
npm run dev        # http://localhost:3000
```

## Building for Production

```bash
CI=true npm run build      # static export to out/, root base path as deployed
npm run check:export       # structural checks on the exported HTML
```

Without `CI=true`, a production build uses the legacy `/Kam-Website` base path.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the export and publishes `kamsite/out` to GitHub Pages with the custom-domain `CNAME`.

## Project Structure

```
kamsite/
├── src/
│   ├── app/              # Routes
│   ├── components/       # React components
│   ├── lib/              # Site and podcast content records
│   └── styles/           # Global styles
├── public/               # Static assets (CNAME, images)
├── scripts/              # Export checks
└── package.json
```

## Customization

- Update the content in the components to match your information
- Modify the theme colors in `src/styles/globals.css`
- Add your own blog posts in the `src/content/blog` directory

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
