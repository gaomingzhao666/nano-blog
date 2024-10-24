[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]
[![Release][release-shield]][release-url]

<div align="center">
  <a href="https://github.com/gaomingzhao666/nano-blog">
    <img src="/public/favicon.ico" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Nano Blog</h3>

  <p align="center">
    📕 An super fast, lightweight and SEO friendly blog made by Astro 📕 
    <br />
    <br />
    <a href="https://github.com/gaomingzhao666/nano-blog/blob/master/README.md">English</a>
      <strong> · </strong>
    <a href="https://github.com/gaomingzhao666/nano-blog/blob/master/README-CN.md">简体中文</a>
      <strong> · </strong>
    <a href="https://github.com/gaomingzhao666/nano-blog/blob/master/README-JP.md">日本語</a>
  </p>
</div>

<details open>
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#introduction-of-project">Introduction of Project</a> </li>
    <li><a href="#build-with">Build with</a></li>
    <li><a href="#runtime-requirement">Runtime Requirement</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#how-to-use-this-project-for-your-case">How to use this project for your case</a></li>
    <li><a href="#about-cors-error">About cors error</a></li>
    <li><a href="#contributor">Contributor</a></li>
    <li><a href="#license">LICENSE</a></li>
  </ul>
</details>

<!-- ----- -->

<p align="center">
    <img src="/SCREENSHOT/index-mockup.png">
    <img src="/SCREENSHOT/new-about-mockup.png">
</p>

> The image shown here is a index-page for laptop-size, [click here](https://github.com/gaomingzhao666/nano-blog/tree/main/SCREENSHOT) to see more detailed screenshot for this application.

<p align="center">
  <a href="https://pagespeed.web.dev/analysis/https-blog-template-gray-vercel-app/7ovjfewos9?form_factor=mobile">
    <img width="510" alt="openblog Lighthouse Score" src="public/openblog-lighthouse-score.svg">
  <a>
</p>
    
## 💪 Features

- [√] Minimal styling
- [√] Mobile responsive
- [√] 100/100 Lighthouse performance
- [√] SEO-friendly with canonical URLs and OpenGraph data
- [√] Sitemap support
- [√] RSS Feed support
- [√] Markdown & MDX support
- [√] Syntax highlighting
- [√] Image optimization
- [√] Table of contents
- [√] Dark mode
- [√] Reading Time
- [√] [Pagefind](https://pagefind.app/) static search library integration
- [√] Related posts
- [√] Share posts (Linkedin, twitter)
- [√] Draft mode
- [√] Copy code block
- [√] CMS in the repository (Tina CMS)
- [√] Pagination
- [√] ViewTransition (new)
- [√] Disqus comments (new)

## 🛣️ Roadmap

- [x] Add post author
- [x] Add customization with colors
- [x] Add filters for reading time, date...
- [x] More sharing options
- [x] Internationalization (i18n)

## ⚙️ Stack

- [**ASTRO** + **Typescript**](https://astro.build/) - Astro is the all-in-one web framework designed for speed.
- [**Tailwind CSS** + **Tailwind-Merge** + **clsx**](https://tailwindcss.com/) - Tailwind CSS is a utility-first CSS framework.
- [**Tabler Icons**](https://tabler-icons.io/i/) - A open source SVG icons.
- [**Eslint**](https://eslint.org/) - ESLint is an open source project that helps you find and fix problems.
- [**Prettier**](https://prettier.io/) - Code formatter.
- [**Search Library**](https://pagefind.app/) - Static search library integration.
- [**Motion**](https://motion.dev/) - Motion One is the smallest fully-featured animation library for the web.
- [**Tina CMS**](https://tina.io/) - CMS.

## 😎 Prerequisites

- NodeJS v20 LTS above

## 👨🏻‍💻 Running Locally

1. Clone or [fork](https://github.com/danielcgilibert/blog-template/fork) the repository:

2. Install dependencies:

```sh
cd nano-blog
pnpm install
```

3. Run the development server:

```sh
pnpm start
```

## 📐 Configure

- Edit the configuration file **src/data/site.config.ts** for the basic blog metadata.
- Update the **astro.config.mjs** file at the root of the project with your own domain.
- Modify the files in the **/public** folder:
  - favicon
  - robots.txt -> update the Sitemap url to your own domain
  - open-graph -> the open-graph is the image that will be displayed when sharing the blog link. For posts, the preview image is the post cover.
- Edit the social networks in the Header component - **src/components/Header.astro**, change the URL to your social network.

## 🗂️ Adding a category

To add a new category to your blog, simply go to the src/data/categories.ts file and add it to the array.

Example:

```ts
export const CATEGORIES  =  [
'JavaScript',
'React',
'new category here'  <---
]  as  const
```

> 🚨 Zod checks whether the category is not correctly written or does not exist in the properties of the markdown document. **It will throw an error when building the application.** 🚨

## 📄 Adding a post

Adding a post is as simple as adding a .md or .mdx file to the blog folder at the path **src/content/blog**. The filename will be used to create the slug/URL of the page.

For example, if you have a file named **jsx-and-react.md**, it will be transformed into: **http://yourdomain.com/post/jsx-and-react/**

## 📝 Activating draft mode

To activate draft mode, add the property **draft: true** to the file, and it will no longer be displayed on the blog.

Example :

```ts
title: MacBook Pro 2022
description: 'The new MacBook Pro 2022 is here. With the Apple M2 chip, a new design, and more, the new MacBook Pro is the best laptop Apple has ever made.'
pubDate: 'Jul 02 2022'
heroImage: '../../assets/bg.jpg'
category: 'Category 1'
tags: ['JavaScript', 'css', 'HTML5', 'GitHub']
draft: true <---
```

## 🥰 Thanks to
