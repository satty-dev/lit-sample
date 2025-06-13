### 🚀 Lit Web Components 学習
このリポジトリは、Lit を使用して Web Components を学習・開発するためのサンプルプロジェクトです。Vite + TypeScript 環境で構築されています。

---

### 🏗️ セットアップ
1. リポジトリのクローンと依存関係のインストール
```bash
git clone https://github.com/your-username/lit-web-components-learning.git
cd lit-web-components-learning
npm install
```

2. 開発サーバーの起動
```bash
npm run dev
```
ブラウザで http://localhost:5173 を開くと、Web Components が表示されます。

---

### ✨ 使用している主な技術
|技術|説明|
|--|--|
|Lit|軽量かつ高速なWeb Componentsライブラリ|
|TypeScript|型安全なJavaScript|
|Vite|高速なモダンフロントエンドビルドツール|

---

### 📦 ビルド
```bash
npm run build
```
dist/ ディレクトリ以下にビルドされたファイルが出力されます。

---

### 🧪 サンプルWeb Component: <my-greeting>
```html
<my-greeting name="Web Components"></my-greeting>
```
このコンポーネントは name 属性に応じて「Hello, ～!」と表示します。

---

### 🌍 外部サイトへWeb Componentを組み込む方法
Lit で作成した Web Component は、バンドルされた JavaScript ファイルを外部の HTML に読み込ませることで再利用可能です。

✅ 1. ビルドファイルの作成
```bash
npm run build
```
これにより dist/assets/my-greeting.js のようなファイルが出力されます。

✅ 2. HTML で読み込む
```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>組み込み例</title>
    <script type="module" src="https://your-site.com/dist/assets/my-greeting.js"></script>
  </head>
  <body>
    <my-greeting name="Lit User"></my-greeting>
  </body>
</html>
```

✅ 3. 公開方法の例
- 自前のサーバーに dist/ をアップロード
- Netlify / Vercel / GitHub Pages などでホスティング
- iframe による埋め込みも可能

---

### 🛠️ 開発メモ
- Lit の @property() デコレーターでは、プロパティの型と初期化のタイミングに注意が必要です。
- constructor() 内でプロパティを初期化する場合、プロパティ名に直接値を代入すると accessor を上書きしてしまうため注意：
  - ❌ NG: this.name = 'Lit';
  - ✅ OK: 初期化せず、HTML属性に値を渡す（例：<my-greeting name="xxx">）
