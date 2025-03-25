[![Stargazers][stars-shield]][stars-url]
[![Release][release-shield]][release-url]

<br />
<div align="center">
  <h3 align="center">Nano Blog</h3>

  <p align="center">
    📕 A performant, lightweight and SEO friendly modern blog system made by Astro 📕
    <br />
    <br />
    <a href="https://github.com/gaomingzhao666/nano-blog/blob/master/README.md">English</a>
      <strong> · </strong>
    <a href="https://github.com/gaomingzhao666/nano-blog/blob/master/README-JA.md">日本語</a>
  </p>
</div>

<details open>
  <summary>Directory</summary>
  <ul>
    <li><a href="#introduction">Introduction</a> </li>
    <li><a href="#build-with">Build with</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#runtime-requirement">Runtime Requirement</a></li>
    <li><a href="#installation">Installation</a></li>
  </ul>
</details>

## Introduction

<p align="center">
    <img src="/public/screenshot/post-dark.svg">
</p>

> The image shown here is the posts-page for medium-size, [click here](https://github.com/gaomingzhao666/nano-blog/tree/main/public/screenshot) to see more detailed screenshot for this application.

Nano-blog is a modern blog system build with Astro ecosystem, which is one of the most popular meta-framework for content-focusing web application, in this case as a blog system.

## Build With

- Astro
- TailwindCSS
- Localize with build-in i18n functionality
- Typescript with ES6+ syntax and ESM

## Features

- [x] Minimal styling
- [x] All components are written in `.astro`
- [x] Responsive Layout
- [x] Super Performance
- [x] Clean Dependency Injection
- [x] SEO Friendly
- [x] Markdown & MDX support
- [x] Code Highlighting
- [x] Dark Mode
- [x] Automatic Computing Reading Time
- [x] `Table of Content` for different experience between mobile and larger devices (added on v2.7)
- [x] [Pagefind](https://pagefind.app/) Integration for Content Searching (rewritten on v2.6)
- [x] Related Posts (updated on v2.1)
- [x] `English` and `Japanese` Localization (i18n) (updated on v2.4)
- [x] Giscus Comment system that powered by Github Discussion (added on v2.2)

## Roadmap

- [x] update to `Astro v5` (testing)
- [x] update to `TailwindCSS v4`

## Runtime Requirement

- NodeJS LTS 20 or above

## Installation

### Clone Repository - recommend

Firstly, clone this repository to local by running the following command:

```sh
$ git clone https://github.com/gaomingzhao666/nano-blog.git # clone
$ cd nano-blog
```

Once clone is done without any errors, you should install dependencies and start this project by running:

```sh
# pnpm - recommend
$ pnpm install
$ pnpm start

# npm - node default package manager
$ npm install
$ npm run start

# yarn
$ yarn run start
```

### Create a New Project using Astro Cli

```sh
# pnpm - recommend
pnpm create astro@latest --template gaomingzhao666/nano-blog

# npm - node default package manager
npm create astro@latest -- --template gaomingzhao666/nano-blog

# yarn
yarn create astro --template gaomingzhao666/nano-blog
```

> Please note that this method may encounter some compatibility issues with the template because nano-blog may not update to the major version of Astro immediately upon release due to stability concerns. Currently, nano-blog is using Astro v4.16.18.

[stars-shield]: https://img.shields.io/github/stars/gaomingzhao666/nano-blog?style=for-the-badge
[stars-url]: https://github.com/gaomingzhao666/nano-blog/stargazers
[release-shield]: https://img.shields.io/github/v/release/gaomingzhao666/nano-blog?style=for-the-badge
[release-url]: https://github.com/gaomingzhao666/nano-blog/releases
