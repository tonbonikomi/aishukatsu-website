// src/content/site.ts
// ─────────────────────────────────────────────────────────────────
//  非エンジニアの方はこのファイルだけ編集してください。
//  文言・リンク・画像パスの変更はすべてここで行います。
//  コンポーネント（.tsx ファイル）の編集は不要です。
// ─────────────────────────────────────────────────────────────────

// ── 型定義（編集不要）────────────────────────────────────────────

/** 協賛ロゴの型 */
export type SponsorLogo = {
  /** 表示名（ロゴの alt テキストにも使われます） */
  name: string
  /** 画像パス 例: '/images/sponsors/company.png' */
  src: string
  /** クリック先 URL（省略可）*/
  url?: string
}

/** SNS アカウントの型 */
export type SnsAccount = {
  /** カードに表示する名前 例: 京大就活 */
  name: string
  /** 大学名 例: 京都大学 */
  university: string
  /** Instagram ハンドル 例: @kyodai_shukatu */
  handle: string
  /**
   * Instagram URL。
   * まだ決まっていない場合は 'TODO_' で始まる文字列を入れると
   * サイト上で「準備中」と自動表示されます。
   */
  url: string
}

// ── 会社基本情報 ───────────────────────────────────────────────
//
//  ここを変更するとヘッダー・フッター・お問い合わせページ・Hero に
//  自動的に反映されます。各コンポーネントを個別に直す必要はありません。
//

export const company = {
  /** 会社名（現時点では変更不要） */
  name: '株式会社AI就活',

  /** フッターに表示するキャッチフレーズ */
  tagline: '学生と企業の、架け橋に。',

  /** 電話番号（ハイフンあり）。空文字にすると表示されません */
  tel: '090-4246-2713',

  /** メールアドレス。空文字にすると表示されません */
  email: 'info@aishukatu.com',

  /**
   * 会社公式 Instagram の URL。
   * お問い合わせページ・フッターに表示されます。
   * 空文字にすると非表示になります。
   */
  instagramUrl: 'https://www.instagram.com/kyodai_shukatu',

  /**
   * お問い合わせフォーム（Google フォームなど）の URL。
   * 空文字にすると「フォームで相談する」ボタンが非表示になります。
   */
  googleFormUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSccCw4yLbQlsTnGTn5T7TQ_7ZPCYjTmjvKb55dpswxlaFmQJA/viewform?usp=header',

  /**
   * 会社説明資料 PDF の表示設定。
   * true にすると Hero とフッターに PDF ダウンロードリンクが表示されます。
   * PDF ファイルを public/ に置くまでは false にしておいてください。
   */
  pdfEnabled: false,

  /**
   * PDF ファイルのパス（public/ フォルダからの相対パス）。
   * pdfEnabled が true のときだけ参照されます。
   */
  pdfPath: '/company-profile.pdf',
}

// ── 選抜コミュニティ GRIT ────────────────────────────────────────

export const gritContent = {
  /**
   * セクション全体の表示切り替え。
   * false にするとページからまるごと非表示になります。
   */
  enabled: true,

  /** セクションタイトル */
  title: '選抜コミュニティ GRIT',

  /** リード文（2〜3文が目安）*/
  lead: '書類選考・面接で選抜した京都大学生を対象に、GD対策・面接対策・ES添削などの就活支援を実施。高い志望意識を持つ優秀な学生と、企業が深くつながれる場を提供します。',

  /**
   * スライド画像の表示切り替え。
   * 画像ファイル（grit-results.png）を用意するまでは false にしておいてください。
   * true にすると画像エリアが表示されます。
   */
  imageEnabled: false,

  /** スライド画像のパス（public/images/ に画像を置いたら imageEnabled を true に）*/
  imageUrl: '/images/grit-results.png',

  /** 画像の説明テキスト（スクリーンリーダー向け）*/
  imageAlt: 'GRIT 実績スライド（27卒）',

  /** 実績テーブルの各行 */
  results: [
    { label: '規模',          value: '京都大学生 約30名' },
    { label: '選抜方法',      value: '書類選考 ＋ 面接' },
    { label: '男女比',        value: '男性 7：女性 3' },
    { label: '志望業界',      value: 'コンサル約4割・商社約3割・デベロッパー約3割' },
    { label: '夏IS実績',      value: 'BCG / ベイン / GS / 総合商社 / Big4 等' },
  ] as { label: string; value: string }[],

  /**
   * 実績データに付ける免責注記。
   * 年度が変わったら「27卒」の部分を更新してください。
   */
  note: '※ 上記実績はすべて27卒時点の参考値です。年度・選抜状況により変動する場合があります。',
}

// ── 関西就活 SNS ネットワーク ────────────────────────────────────

export const snsNetworkContent = {
  /**
   * セクション全体の表示切り替え。
   * false にするとページからまるごと非表示になります。
   */
  enabled: true,

  /** セクションタイトル */
  title: '関西主要大学 就活 SNS ネットワーク',

  /** リード文 */
  lead: '京大・阪大・関関同立の各大学に特化した就活SNSアカウントを運営。合計登録学生数1.5万人以上のネットワークで、採用ブランディングと学生集客を支援します。',

  /**
   * SNS ネットワーク一覧画像の表示切り替え。
   * 画像ファイル（sns-network.png）を用意するまでは false にしておいてください。
   */
  imageEnabled: false,

  /** SNS ネットワーク一覧画像のパス */
  imageUrl: '/images/sns-network.png',

  /** 画像の説明テキスト（スクリーンリーダー向け）*/
  imageAlt: '関西ハイクラス学生 SNS ネットワーク一覧',

  /** ヘッダー統計として大きく表示する数字 */
  totalFollowers: '1.5万人以上',

  /**
   * アカウント一覧。
   * url / handle が確定したら 'TODO_...' 部分を差し替えてください。
   * url が 'TODO_' で始まっている間は「準備中」と表示されます。
   */
  accounts: [
    {
      name: '京大就活',
      university: '京都大学',
      handle: '@kyodai_shukatu',
      url: 'https://www.instagram.com/kyodai_shukatu',
    },
    {
      name: '阪大就活',
      university: '大阪大学',
      handle: '@handai_shukatsu_navi',
      url: 'https://www.instagram.com/handai_shukatsu_navi',
    },
    {
      name: '同志社就活',
      university: '同志社大学',
      handle: '@doshisha_shukatsu',
      url: 'https://www.instagram.com/doshisha_shukatsu',
    },
    {
      name: '立命館就活',
      university: '立命館大学',
      handle: '@rits_shukatsunavi',
      url: 'https://www.instagram.com/rits_shukatsunavi',
    },
    {
      name: '関学就活',
      university: '関西学院大学',
      handle: '@kangaku_shukatsu',
      url: 'https://www.instagram.com/kangaku_shukatsu',
    },
    {
      name: '関大就活',
      university: '関西大学',
      handle: '@kandai_shukatu',
      url: 'https://www.instagram.com/kandai_shukatu',
    },
  ] as SnsAccount[],
}

// ── 協賛・パートナー ──────────────────────────────────────────────

export const sponsorsContent = {
  /**
   * セクション全体の表示切り替え。
   * false にするとページからまるごと非表示になります。
   */
  enabled: true,

  /** 大きく表示する実績数字 */
  headline: '50+',

  /** 数字の下ラベル */
  headlineLabel: '協賛・パートナー団体',

  /** リード文 */
  lead: '多くの企業・団体様にご協賛・ご支援をいただき、学生へのリーチを拡大しています。',

  /** ロゴグリッド下部に表示する注記 */
  note: '※ 掲載許諾のあるロゴのみ表示しています。',

  /**
   * 協賛ロゴ一覧。追加方法は EDITING.md を参照してください。
   *
   * 追加例:
   *   { name: '株式会社○○', src: '/images/sponsors/company.png', url: 'https://example.com' },
   *
   * url は省略可能です。省略するとリンクなしの画像として表示されます。
   */
  logos: [] as SponsorLogo[],
}
