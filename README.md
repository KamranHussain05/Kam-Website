# Kam-Website

[![Deploy Next.js site to Pages](https://github.com/KamranHussain05/Kam-Website/actions/workflows/deploy.yml/badge.svg)](https://github.com/KamranHussain05/Kam-Website/actions/workflows/deploy.yml)

Welcome to the repository for my personal website! This project serves as a digital portfolio to showcase my skills, projects, and experience. It's built using modern web technologies including Next.js, TypeScript, and Tailwind CSS, and automatically deployed to GitHub Pages.

## Live Demo

You can view the live version of the website here: **[https://KamranHussain05.github.io/](https://kamranhussain.com/)**

## Features

*(Please review and update this section based on your actual website features)*

*   **Responsive Design:** Adapts seamlessly to various screen sizes (desktops, tablets, mobiles).
*   **Project Showcase:** Dedicated section detailing personal and professional projects.
*   **Content Sections:** Potential blog posts or articles managed via MDX (based on dependencies like `next-mdx-remote`).
*   **Interactive Elements:** May include animations (`framer-motion`) or 3D graphics (`three.js`).
*   **Component-Based Architecture:** Built with reusable React components.

## Tech Stack

This project utilizes the following technologies and libraries:

*   **Framework:** [Next.js](https://nextjs.org/) (^14.1.0) - React framework for server-side rendering, static site generation, and more.
*   **Language:** [TypeScript](https://www.typescriptlang.org/) (^5.3.3) - Superset of JavaScript adding static types.
*   **Styling:**
    *   [Tailwind CSS](https://tailwindcss.com/) (^3.4.4) - Utility-first CSS framework.
    *   [PostCSS](https://postcss.org/) (^8.4.39) & [Autoprefixer](https://github.com/postcss/autoprefixer) (^10.4.19) - CSS processing.
    *   `tailwindcss-animate`: For integrating Tailwind with animation libraries.
*   **UI Components:** [Material UI](https://mui.com/) (`@mui/material`, `@mui/icons-material`, `@mui/lab`) - React component library.
*   **Animation:** [Framer Motion](https://www.framer.com/motion/) (^11.0.8) - Production-ready motion library for React.
*   **3D Graphics:** [Three.js](https://threejs.org/) (^0.166.0) - JavaScript 3D library.
*   **Markdown/MDX:**
    *   `next-mdx-remote` (^4.4.1) - Load MDX content in Next.js.
    *   `gray-matter` (^4.0.3) - Parse front-matter from files.
    *   `react-markdown` (^9.0.1) - Render Markdown as React components.
*   **Utilities:**
    *   `date-fns` (^3.3.1) - Modern JavaScript date utility library.
    *   `lucide-react` (^0.344.0) - Icon library.
    *   `next-themes` (^0.2.1) - Theme management for Next.js.
*   **Development Tools:**
    *   ESLint (via `next lint`) - Code linting.
    *   `@tailwindcss/typography` - Tailwind plugin for beautiful typography defaults.
*   **Deployment:** [GitHub Actions](https://github.com/features/actions) & [GitHub Pages](https://pages.github.com/)

## Project Structure

The repository is organized as follows:

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow for CI/CD
├── kamsite/                # Root directory for the Next.js application
│   ├── public/             # Static assets (images, fonts, etc.)
│   │   ├── src/
│   │   │   ├── app/            # Core application files (layouts, pages - likely using App Router)
│   │   │   ├── components/     # Reusable React components
│   │   │   ├── styles/         # Global CSS styles (if any)
│   │   ├── .gitignore          # Specifies intentionally untracked files for kamsite
│   │   ├── next.config.js      # Next.js configuration (handles basePath for GH Pages)
│   │   ├── package.json        # Project metadata and dependencies for kamsite
│   │   ├── postcss.config.js   # PostCSS configuration
│   │   ├── tailwind.config.js  # Tailwind CSS configuration
│   │   ├── tsconfig.json       # TypeScript configuration
│   │   └── ...
│   ├── .gitignore              # Specifies intentionally untracked files for the repo root
│   └── package.json            # Root package.json (if used for workspace setup or scripts)
└── README.md               # This file
```

*   The main application code resides within the `kamsite` directory.
*   The GitHub Actions workflow (`deploy.yml`) is configured to work within the `kamsite` subdirectory.

## Getting Started (Local Development)

To run this project locally, follow these steps (though you're kinda weird for running someone's personal website locally):

1.  **Prerequisites:**
    *   [Node.js](https://nodejs.org/) (v18 or later recommended, as used in the deployment workflow)
    *   [npm](https://www.npmjs.com/) (usually comes with Node.js)
2.  **Clone the repository:**
    ```bash
    git clone https://github.com/KamranHussain05/Kam-Website.git
    cd Kam-Website
    ```
3.  **Navigate to the application directory:**
    ```bash
    cd kamsite
    ```
4.  **Install dependencies:**
    ```bash
    npm install
    ```
5.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application should now be running at [http://localhost:3000](http://localhost:3000).

## Build Process

To build the application for production (static export for GitHub Pages), run the following command inside the `kamsite` directory:

```bash
npm run build
```

This command executes `next build`, which creates an optimized production build and generates static HTML/CSS/JS files in the `kamsite/out` directory. The `next.config.js` file is likely configured to handle the necessary `output: 'export'` setting and potentially the `basePath` required for deployment under a subpath on GitHub Pages (though the workflow environment variable `NODE_ENV=production` might also trigger this configuration).

## Deployment

This project is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. The deployment process is handled by the GitHub Actions workflow defined in `.github/workflows/deploy.yml`.

Here's a breakdown of the deployment workflow:

1.  **Trigger:** Pushing code to the `main` branch or manual trigger via the Actions tab.
2.  **Build Job:**
    *   Checks out the repository code.
    *   Sets up Node.js version 18.
    *   Configures GitHub Pages settings.
    *   Installs project dependencies (`npm install` within `./kamsite`).
    *   Builds the Next.js application (`npm run build` within `./kamsite`). Crucially, it sets `NODE_ENV: production` which likely signals `next.config.js` to configure the build for static export (`output: 'export'`) and set the correct `basePath` and `assetPrefix` for GitHub Pages.
    *   Uploads the contents of the `kamsite/out` directory as a GitHub Pages artifact.
3.  **Deploy Job:**
    *   Waits for the build job to complete successfully.
    *   Downloads the artifact uploaded by the build job.
    *   Deploys the artifact to the GitHub Pages environment.

## Development Decisions & Considerations

*   **Next.js:** Chosen for its powerful features like static site generation (SSG), excellent developer experience, image optimization, and robust ecosystem. SSG is ideal for a portfolio site, ensuring fast load times and good SEO.
*   **TypeScript:** Used to enhance code quality, maintainability, and reduce runtime errors through static typing.
*   **Tailwind CSS:** Selected for rapid UI development using utility classes, promoting consistency and maintainability without writing custom CSS for every component.
*   **GitHub Pages & Actions:** Provides free hosting for static sites and a seamless CI/CD pipeline for automated builds and deployments directly from the repository.
*   **`kamsite` Subdirectory:** The Next.js project resides in a subdirectory. The deployment workflow (`deploy.yml`) and local development commands are adjusted accordingly (using `working-directory: ./kamsite`).
*   **Static Export (`next build`):** The build process generates a fully static site suitable for hosting providers like GitHub Pages that don't run a Node.js server. Configuration in `next.config.js` (likely setting `output: 'export'`) is essential for this.

---

Feel free to explore the code, and if you have any questions or suggestions, please open an issue!

DISCLAIMER: This is a work in progress and I will be updating it as I go along. I certainly used the assistance of LLMs via Cursor, but I really did write the core functional code myself. (Invite me for an interview if you want proof 😉, if there is any crappy code...uhhh...thats not me 😅 I swear!!)
