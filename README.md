# Portfolio Website (v2)

Personal portfolio website built as a **Single Page Application** to present projects, skills, and professional background.

[![Portfolio](https://img.shields.io/badge/Explore_now-✨My_Portfolio✨-ae3855?style=for-the-badge&labelColor=ae3855)](https://ysengoku.github.io/?lang=en)


## Overview

This project is the second major iteration of my portfolio website.  
Version 2 replaces the initial Bootstrap-based static template with a modern Vue.js architecture, focusing on maintainability, performance, and scalability.

## Features

- Frontend-only Single Page Application (SPA)
- Responsive layout
- Multi-language support (English, French, Japanese)
- Language persistence via URL query parameter
- Project detail popup system
- Clean and minimal UI

## Tech Stack

![Vue 3](https://img.shields.io/badge/Vue%203-4FC08D.svg?style=flat&logo=vue.js&logoColor=fff)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=typescript&logoColor=fff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC.svg?style=flat&logo=tailwindcss&logoColor=fff)
![Vite](https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=vite&logoColor=fff)

### Development Environment

- Vue 3
- TypeScript
- Pinia (state management)
- Vue I18n (language management)
- Tailwind CSS
- Vite (local development on localhost)


#### Local setup

```bash
npm install
npm run dev
```
The application runs locally on a Vite dev server (default port 5173) with HMR (Hot Module Replacement).

### Deployment

The project is deployed as a static site on **GitHub Pages**.

#### Build

```bash
npm run build
```
This generates optimized static assets in the dist/ directory.

#### Hosting

- Static files are served via GitHub Pages. No backend or server-side rendering.
- Client-side routing is not used (hash-based navigation only)
- The deployment process is fully frontend-oriented and optimized for static hosting.

## Internationalization

- Languages managed through a centralized store
- Translation keys separated by locale
- Language synchronized with URL (`?lang=`)
- Designed to allow easy addition of new languages

## Project Structure (simplified)

```bash
app    
├── src/
│   ├── App.vue # Root Vue component
│   ├── main.ts # Application entry point
│   ├── style.css # Global styles
│   ├── components/ # Vue components
│   ├── data/ # Static data
│   ├── i18n/ # Language dictionaries and i18n configuration
│   ├── models/ # TypeScript interfaces and type definitions
│   ├── store/ # Pinia stores
│   └── utils/
├── public/ # Static assets
├── index.html   
└── .github  
    └── workflows 
        └── deploy.yaml # GitHub Actions workflow for GitHub Pages deployment
```

## Versioning

![Latest Release](https://img.shields.io/github/v/release/ysengoku/ysengoku.github.io?style=flat)

####  **v2.1.1**

- Added Japanese language support

####  **v2.1.0**

- Added French language support
- Introduced internationalization structure

####  **v2.0.0**

- Migration from Bootstrap template to Vue.js
- UI refactor with Tailwind CSS

#### **v1.0.0**

- Initial portfolio based on a Bootstrap template

## License

This project is for personal use and portfolio presentation.
