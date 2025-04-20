# React Template

![eslint version](https://img.shields.io/badge/eslint-9.25.0-4B32C3?logo=eslint&logoColor=white)
![prettier version](https://img.shields.io/badge/prettier-3.5.3-F7B93E?logo=prettier&logoColor=white)
![react version](https://img.shields.io/badge/react-19.1.0-61DAFB?logo=react&logoColor=white)
![tailwindcss version](https://img.shields.io/badge/tailwindcss-4.0.0-06B6D4?logo=tailwindcss&logoColor=white)
![typescript version](https://img.shields.io/badge/typescript-5.7.2-3178C6?logo=typescript&logoColor=white)
![vite version](https://img.shields.io/badge/vite-6.2.0-646CFF?logo=vite&logoColor=white)
![vitest version](https://img.shields.io/badge/vitest-3.1.1-6E9F18?logo=vitest&logoColor=white)
![pwa Support](https://img.shields.io/badge/PWA-support-4FC08D?logo=pwa&logoColor=white)
![docker](https://img.shields.io/badge/Docker-available-2496ED?logo=docker&logoColor=white)
![github pages](https://img.shields.io/github/deployments/ganemedelabs/react-template/github-pages?label=GitHub%20Pages&color=brightgreen&logo=github&logoColor=white)
![browser router](https://img.shields.io/badge/Router-BrowserRouter-CA4245?logo=reactrouter&logoColor=white)

A modern React template created with Vite, Typescript, and Vitest. Pre-configured with TailwindCSS, ESLint, Prettier, Docker, and PWA support using Workbox. It features a GitHub Action workflow for automated deployment to GitHub Pages and is compatible with BrowserRouter, allowing seamless URL routing.

## 📋 Table of Contents

- [Features](#-features)
- [Getting Started](#-getting-started)
- [BrowserRouter Support](#-browserrouter-support)
- [Repository Configuration](#-repository-configuration)
- [Deploying to GitHub Pages](#-deploying-to-github-pages)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- **React**: Component-based architecture for dynamic, scalable UIs.
- **TypeScript**: Type-safe JavaScript with modern ECMAScript features.
- **Vite**: Ultra-fast bundling and development server with HMR support.
- **Vitest**: Lightweight and fast unit testing framework for robust code quality.
- **TailwindCSS**: Utility-first CSS framework for rapid, customizable styling.
- **Prettier & ESLint**: Ensures consistent code style and catches potential errors.
- **Docker**: Containerized development and production environments.
- **PWA Support**: Offline capabilities, installable app experience, and service worker integration.
- **GitHub Pages Deployment**: Automated deployment with BrowserRouter support for client-side routing.
- **BrowserRouter on GitHub Pages**: Custom 404.html fallback to enable SPA routing.

## 📦 Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)
- Docker (for containerized development, optional)

## 🚀 Getting Started

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/ganemedelabs/react-template.git
    cd react-template
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Run the Development Server**

    ```bash
    npm start

    # or if you prefer to run it inside a Docker container
    docker build -t react-template .
    docker run -p 3000:3000 react-template
    ```

This will start the development server at `http://localhost:3000/react-template/`.

## ⚙️ BrowserRouter Support

Unlike many GitHub Pages setups that require the use of `HashRouter` due to URL routing limitations, this template is compatible with `BrowserRouter` thanks to the configuration provided by [rafgraph's Single Page Apps for GitHub Pages](https://github.com/rafgraph/spa-github-pages). It uses a custom `404.html` file and a redirect script to handle URL routing correctly and avoid 404 errors on page reloads.

## 🚢 Deploying to GitHub Pages

Deploying is handled automatically by a GitHub Action when you push changes to the `main` branch with a new version name.

### Features

- Triggers on push to the `main` branch.
- Checks out the repository code.
- Checks if the version in package.json has changed.
- If changed, sets up Node.js 20.
- Installs project dependencies.
- Builds the static site into the `dist` directory.
- Pushes the contents of `dist` to the `gh-pages` branch.

### Notes

GitHub does NOT automatically configure the Pages source when deployed using GitHub Actions.

- After the first deployment, you must configure GitHub Pages manually:

    1. Go to your repository on GitHub.
    2. Click on the "Settings" tab.
    3. Scroll down to the "Pages" section in the sidebar.
    4. Under "Source", choose:
        - Branch: `gh-pages`
        - Folder: `/ (root)`
    5. Click "Save".

- Once this is done, future deployments will update the site automatically.

## 🔧 Repository Configuration

To make this template work for your repository, you need to update a few configuration files:

1. **vite.config.ts**

    - Change the `base` value to the name of your repository.

    ```typescript
    base: "/your-repo-name/";
    ```

2. **src/index.tsx**

    - Change the `basename` value of `<Router basename="/react-template/">` to the name of your repository.

    ```tsx
    <Router basename="/your-repo-name/">
    ```

3. **.env.production and .env.development**

    - Update the `.env` files to reflect your repository's URL. Ensure that `VITE_PUBLIC_URL` matches your local development server URL in `.env.development` and your GitHub Pages URL in `.env.production`.

    **.env.development**

    ```env
    VITE_PUBLIC_URL=http://localhost:3000/your-repo-name
    ```

    **.env.production**

    ```env
    VITE_PUBLIC_URL=https://your-username.github.io/your-repo-name
    ```

4. **index.html**

    - Change the `href` value of `<link rel="canonical" href="https://ganemedelabs.github.io/react-template/" />` to the URL of your GitHub Pages.

    ```html
    <link rel="canonical" href="https://your-username.github.io/your-repo-name/" />
    ```

5. **public/manifest.json**

    - Change all instances of `"react-template"` to the name of your repository. If your GitHub Pages URL is `https://your-username.github.io/`, leave the `"react-template"` string as `"/"`.

    ```json
    "icons": [
        {
            "src": "/your-repo-name/favicon.ico",
            "sizes": "64x64 32x32 24x24 16x16",
            "type": "image/x-icon"
        }
    ],
    "start_url": "/your-repo-name/",
    "scope": "/your-repo-name/",
    ```

## 🤝 Contributing

Feel free to submit issues or pull requests to improve this template!

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
