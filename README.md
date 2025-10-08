# Multipage site web

```sh
npm create astro@latest -- --template basics
```

## 🚀 Project Structure

Inside of your this project, you'll see the following folders and files:

```
/
├──public
│   ├──cafe-back.png
│   └──favicon.svg
├──src
│   ├──assets
│   │   ├──about
│   │   │   └──about-images
│   │   ├──hero
│   │   │   └──hero-images
│   │   ├──menu
│   │   │   └──menu-images
│   │   ├──astro.svg
│   │   └──background.svg
│   ├──components
│   │   ├──Layout
│   │   │   ├──Footer.astro
│   │   │   └──Header.astro
│   │   ├──AboutUs.astro
│   │   ├──BlogCaf.astro
│   │   ├──ContactUs.astro
│   │   ├──Hero.astro
│   │   └──MenuCaf.astro
│   ├──content
│   │   ├──blog
│   │   │   ├──blog-posts
│   │   ├──otros
│   │   └──content.ts
│   ├──data
│   │   ├──contactData.ts
│   │   ├──menu.ts
│   │   ├──navbarItems.ts
│   │   └──socials.ts
│   ├──icons
│   │   ├──logo
│   │   │   └──logo-icons
│   │   ├──socials
│   │   │   └──socials-icons
│   │   └──ui
│   │   │   └──ui-icons
│   ├──layouts
│   │   └──Layout.astro
│   ├──pages
│   │   ├──about.astro
│   │   ├──blog.astro
│   │   ├──contact.astro
│   │   ├──index.astro
│   │   └──menu.astro
│   └──styles
│   │   └──global.css
├──astro.config.mjs
├──package-lock.json
├──package.json
├──README.md
├──tsconfig.json
└──.gitignore
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
