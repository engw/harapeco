# LGTM Image Generator

AI を使って LGTM 画像を生成する Chrome 拡張機能です。

## 機能

- **Gemini API (Nano Banana Pro)** または **Ollama** で画像生成
- 食べ物や生成AI感のないカテゴリを選択可能
- Markdown 形式でクリップボードにコピー

### カテゴリ

- Nature (自然)
- Animal (動物)
- Space (宇宙)
- Abstract (抽象)
- Minimal (ミニマル)
- Retro (レトロ)
- Cute (かわいい)
- Cool (かっこいい)

### スタイル

- Photo-realistic
- Illustration
- Watercolor
- Sketch
- Pixel Art

## インストール

1. Chrome で `chrome://extensions` を開く
2. 「デベロッパーモード」を有効化
3. 「パッケージ化されていない拡張機能を読み込む」をクリック
4. `lgtm-food` フォルダを選択

## 設定

拡張機能アイコンを右クリック → 「オプション」から設定画面を開きます。

### Gemini API

1. [Google AI Studio](https://aistudio.google.com/app/apikey) で API キーを取得
2. 設定画面で API キーを入力

### Ollama

1. [Ollama](https://ollama.ai) をインストール
2. 画像生成対応モデルをダウンロード
3. 設定画面で Server URL とモデル名を入力

## 使い方

1. 拡張機能アイコンをクリック
2. カテゴリとスタイルを選択
3. 「Generate LGTM」をクリック
4. 生成された画像を確認し「Copy」でMarkdownをコピー

```markdown
![LGTM](data:image/png;base64,...)
```

## ライセンス

MIT
