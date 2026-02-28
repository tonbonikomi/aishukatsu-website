# サイト編集ガイド（幹部・非エンジニア向け）

> **幹部の方が触ってよいファイルは3種類だけです。**
> コンポーネント（`.tsx` ファイル）は触らないでください。

---

## 触ってよいファイル / 触ってはいけないファイル

| ファイル / フォルダ | OK / NG | 用途 |
|---|---|---|
| `src/content/site.ts` | ✅ OK | 文言・URL・電話番号・表示のON/OFFを変更する |
| `public/images/` | ✅ OK | 画像ファイル（PNG/JPG）を追加・差し替えする |
| `public/company-profile.pdf` | ✅ OK | 会社説明資料PDFを配置・更新する |
| `src/components/*.tsx` | ❌ NG | デザイン・レイアウトのコード（エンジニアのみ） |
| `src/index.css` | ❌ NG | 全体スタイル（エンジニアのみ） |
| `src/App.tsx` | ❌ NG | ページ構成（エンジニアのみ） |
| `package.json` / `vite.config.ts` | ❌ NG | 設定ファイル（エンジニアのみ） |

---

## 目次

1. [編集フロー（GitHub → Vercel プレビュー → 公開）](#1-編集フロー)
2. [文言・連絡先を変更する](#2-文言連絡先を変更する)
3. [セクションを丸ごと非表示にする](#3-セクションを丸ごと非表示にする)
4. [画像を追加・差し替えする](#4-画像を追加差し替えする)
5. [会社説明資料PDFを公開する](#5-会社説明資料pdfを公開する)
6. [協賛ロゴを追加する](#6-協賛ロゴを追加する)
7. [SNSアカウントを追加・更新する](#7-snsアカウントを追加更新する)
8. [GRIT実績データを更新する](#8-grit実績データを更新する)

---

## 1. 編集フロー

すべての編集はこの手順で行います。

```
① GitHub でブランチを作成し、ファイルを編集する
        ↓
② Pull Request（PR）を作成する
        ↓
③ Vercel のプレビューURLで見た目を確認する
        ↓
④ 問題なければ「Merge」してサイトに反映する
```

### GitHub でファイルを編集する手順（例: site.ts）

1. [GitHub のリポジトリ](https://github.com/) を開く
2. `src/content/site.ts` をクリックして開く
3. 右上の **鉛筆アイコン（Edit）** をクリック
4. ブランチを新規作成する画面が出たら「Create a new branch」を選び、ブランチ名を入力（例: `update-contact`）
5. ファイルを編集して「**Commit changes**」をクリック
6. Pull Request の作成画面が出るので「**Create pull request**」をクリック

### Vercel プレビューで確認する

PR を作成すると、数分後に Vercel のプレビュー URL が自動でコメントに投稿されます。
そのリンクをクリックして、見た目が正しいか確認してください。

### マージして本番に反映する

確認がとれたら PR 画面の「**Merge pull request**」→「**Confirm merge**」をクリック。
数分後に本番サイトに反映されます。

---

## 2. 文言・連絡先を変更する

`src/content/site.ts` の `company` セクションを編集します。

```ts
export const company = {
  name: '株式会社AI就活',        // 会社名（通常変更不要）
  tagline: '学生と企業の、架け橋に。', // フッターのキャッチフレーズ
  tel: '090-4246-2713',          // 電話番号（空文字にすると非表示）
  email: 'info@aishukatu.com',   // メールアドレス（空文字にすると非表示）
  instagramUrl: 'https://www.instagram.com/kyodai_shukatu', // 空文字で非表示
  googleFormUrl: 'https://docs.google.com/...', // 空文字にするとフォームボタンが非表示
  pdfEnabled: false,             // true にするとPDFリンクが表示される
  pdfPath: '/company-profile.pdf',
}
```

### 変更例

- **電話番号を変える**: `tel: '06-1234-5678'` のように書き換える
- **電話番号を非表示にする**: `tel: ''` にする（シングルクォート2つ）
- **フォームURLを変える**: `googleFormUrl: '新しいURL'` に差し替える

---

## 3. セクションを丸ごと非表示にする

各セクションには `enabled` フラグがあります。
`false` にするとページからそのセクションが完全に消えます。

```ts
export const gritContent = {
  enabled: true,   // ← false に変えると GRIT セクションが非表示になる
  ...
}

export const snsNetworkContent = {
  enabled: true,   // ← false に変えると SNS セクションが非表示になる
  ...
}

export const sponsorsContent = {
  enabled: true,   // ← false に変えると協賛セクションが非表示になる
  ...
}
```

---

## 4. 画像を追加・差し替えする

### 対応している画像

| ファイル名 | 用途 | 有効にする方法 |
|---|---|---|
| `public/images/grit-results.png` | GRIT セクションのスライド画像 | `gritContent.imageEnabled: true` |
| `public/images/sns-network.png` | SNS ネットワーク一覧画像 | `snsNetworkContent.imageEnabled: true` |
| `public/images/sponsors/*.png` | 協賛ロゴ | `sponsorsContent.logos` に追記 |

### 手順

1. **画像ファイルを用意する**
   - 推奨形式：PNG（背景透過対応）または JPG
   - ファイル名は半角英数・ハイフンのみ（スペース・日本語は使わない）
     - 良い例: `grit-results.png` `sns-network.png`
     - 悪い例: `スライド.png` `slide 1.png`

2. **GitHub の `public/images/` フォルダにアップロードする**
   - GitHub のリポジトリで `public/images/` を開く
   - 「**Add file → Upload files**」をクリック
   - ファイルをドラッグ&ドロップしてコミットする

3. **`src/content/site.ts` で表示をONにする**

   ```ts
   // GRIT 画像を表示する場合
   export const gritContent = {
     imageEnabled: true,   // ← false → true に変える
     imageUrl: '/images/grit-results.png',
     ...
   }

   // SNS 画像を表示する場合
   export const snsNetworkContent = {
     imageEnabled: true,   // ← false → true に変える
     imageUrl: '/images/sns-network.png',
     ...
   }
   ```

---

## 5. 会社説明資料PDFを公開する

### 手順

1. **PDF ファイルを GitHub にアップロードする**
   - GitHub のリポジトリで `public/` フォルダを開く
   - 「**Add file → Upload files**」をクリック
   - `company-profile.pdf` というファイル名でアップロードする
   - （既存ファイルを更新する場合も同じ手順。上書きされます）

2. **`src/content/site.ts` で PDF リンクを表示する**

   ```ts
   export const company = {
     ...
     pdfEnabled: true,              // ← false → true に変える
     pdfPath: '/company-profile.pdf',
   }
   ```

`pdfEnabled: true` にすると、Hero セクションとフッターに
「会社説明資料（PDF）」のダウンロードリンクが自動で表示されます。

---

## 6. 協賛ロゴを追加する

### 手順

**Step 1: ロゴ画像を `public/images/sponsors/` にアップロードする**

- GitHub で `public/images/sponsors/` フォルダを開く（フォルダがなければ作成）
- 「Add file → Upload files」でロゴ画像をアップロード
- ファイル名は英数字のみ（例: `mckinsey.png`、`company-abc.png`）

**Step 2: `src/content/site.ts` の `sponsorsContent.logos` に追記する**

```ts
logos: [
  // ↓ この行をコピーして追加してください
  { name: '株式会社○○', src: '/images/sponsors/company.png', url: 'https://example.com' },
],
```

| フィールド | 説明 | 例 |
|---|---|---|
| `name` | 企業・団体名（マウスオーバー時に表示） | `'株式会社○○'` |
| `src` | 画像パス（`public/` からの相対パス） | `'/images/sponsors/company.png'` |
| `url` | クリック先URL（省略可能） | `'https://example.com'` |

URLなしの場合（リンクなし画像として表示）:
```ts
{ name: '株式会社○○', src: '/images/sponsors/company.png' },
```

---

## 7. SNSアカウントを追加・更新する

`snsNetworkContent.accounts` を編集します。

### URL が確定したとき（「準備中」→ 有効なリンクに変える）

```ts
// 変更前（「準備中」と表示される）
{ name: '○○就活', university: '○○大学', handle: 'TODO_HANDLE', url: 'TODO_URL' },

// 変更後（実際の URL に差し替え）
{ name: '○○就活', university: '○○大学', handle: '@account_name', url: 'https://www.instagram.com/account_name' },
```

### ポイント
- `url` が `TODO_` で始まっている間は「準備中」バッジが自動表示されます
- `handle` は `@` 付きで入力してください

---

## 8. GRIT実績データを更新する

`gritContent` の `results` と `note` を編集します。

```ts
export const gritContent = {
  results: [
    { label: '規模',     value: '京都大学生 約30名' },   // ← value を更新
    { label: '夏IS実績', value: 'BCG / ベイン / ...' },  // ← value を更新
  ],
  note: '※ 上記実績はすべて27卒時点の参考値です。',        // ← 年度を更新
}
```

### 年度が変わったとき
1. `results` の各 `value` を最新データに更新する
2. `note` の年度（`27卒` → `28卒` など）を更新する
3. 画像を差し替える場合は `public/images/grit-results.png` を上書きアップロードする

---

## よくある質問

**Q: 変更したのに反映されない**
A: PR をマージしましたか？ブランチに push しただけでは本番に反映されません。PR → Merge が必要です。

**Q: Vercel のプレビュー URL が表示されない**
A: PR 作成から数分かかります。Vercel のダッシュボードも確認してください。

**Q: `'` や `"` を文章の中に使いたい**
A: シングルクォート内でシングルクォートを使う場合は `\'` と書くか、`"..."` に変更してください。

**Q: 編集が怖い。元に戻せる？**
A: GitHub は変更履歴をすべて記録しています。万が一間違えた場合でも、PR をクローズするか、エンジニアに連絡すれば元に戻せます。
