[![Stargazers][stars-shield]][stars-url]
[![Release][release-shield]][release-url]

<br />
<div align="center">
  <h1 align="center">Nano Blog</h1>

  <p align="center">
    📕 Astroで作られた高性能で軽量、SEOに優しいモダンなブログシステム 📕
    <br />
    <br />
    <a href="https://github.com/gaomingzhao666/nano-blog/blob/master/README.md">English</a>
      <strong> · </strong>
    <a href="https://github.com/gaomingzhao666/nano-blog/blob/master/README-JA.md">日本語</a>
  </p>
</div>

<details open>
  <summary>目次</summary>
  <ul>
    <li><a href="#紹介">紹介</a> </li>
    <li><a href="#技術スタック">技術スタック</a></li>
    <li><a href="#フィーチャー">フィーチャー</a></li>
    <li><a href="#ロードマップ">ロードマップ</a></li>
    <li><a href="#環境要件">環境要件</a></li>
    <li><a href="#インストール">インストール</a></li>
  </ul>
</details>

## 紹介

<p align="center">
    <img src="/public/screenshot/post-dark.svg">
</p>

> ここに表示されている画像は中等サイズのポストページです。詳細なスクリーンショットを見るには、[こちらをクリック](https://github.com/gaomingzhao666/nano-blog/tree/main/public/screenshot)してください。

Nano-blogはAstroとTailwindエコシステムを基盤として構築された現代ブログシステム。このテンプレートは、[openBlog](https://github.com/danielcgilibert/blog-template)を基にして以上、より多くの機能、活躍的な保守、最新の構文やモジュール、およびAstroやTailwindの新しいメジャーバージョンを最適化しています。

## 技術スタック

- Astro
- TailwindCSS
- 組み込みのi18n機能による国際化
- ES6+構文とESMを使用したTypeScript

## フィーチャー

- [√] 簡潔なスタイル
- [√] 全てのコンポーネントはAstroで構築
- [√] レスポンシブレイアウト
- [√] 高性能
- [√] 清潔感あるの依頼注入
- [√] SEOに優しい
- [√] MarkdownとMDXサポート
- [√] コードハイライト
- [√] ダークモード
- [√] 自動読書時間計算
- [x] 最新版`Astro`と`Tailwind`の互換性あり（v2.9で更新）
- [x] モバイルと大型デバイスでの異なるユーザーエクスペリエンスの目次機能（v2.7で追加）
- [√] コンテンツ検索のための[Pagefind](https://pagefind.app/)集成（v2.6でリライトした）
- [√] 関連投稿（v2.1で更新）
- [√] `英語`と`日本語`の国際化（i18n）(v2.4で改善)
- [√] GitHub Discussionsを利用したGiscusコメントシステムの集成（v2.2で追加）

## ロードマップ

- [x] `Astro v6`へのアップグレード (v2.9で完成)
- [x] `TailwindCSS v4`へのアップグレード ( v2.8で完成)

## 環境要件

- NodeJS LTS 24以上

## インストール

### 直接リポジトリをクローン - おすすめ

まず、以下のコマンドを実行してこのリポジトリをローカルにクローンします：

```sh
$ git clone https://github.com/gaomingzhao666/nano-blog.git # クローン
$ cd nano-blog
```

クローンがエラーなく完了したら、以下のコマンドを実行して依存関係をインストールし、このプロジェクトを開始します：

```sh
# pnpm - おすすめ
$ pnpm install
$ pnpm start

# npm - Nodeのデフォルトパッケージマネージャー
$ npm install
$ npm run start

# yarn
$ yarn run start
```

### Astro CLIを使用して新しいプロジェクトを作成

```sh
# pnpm - おすすめ
pnpm create astro@latest --template gaomingzhao666/nano-blog

# npm - Nodeのデフォルトパッケージマネージャー
npm create astro@latest -- --template gaomingzhao666/nano-blog

# yarn
yarn create astro --template gaomingzhao666/nano-blog
```

[stars-shield]: https://img.shields.io/github/stars/gaomingzhao666/nano-blog?style=for-the-badge
[stars-url]: https://github.com/gaomingzhao666/nano-blog/stargazers
[release-shield]: https://img.shields.io/github/v/release/gaomingzhao666/nano-blog?style=for-the-badge
[release-url]: https://github.com/gaomingzhao666/nano-blog/releases
