const sections = [
  {
    title: '1. 事業者情報',
    content: '本プライバシーポリシーは、株式会社AI就活（以下「当社」）が運営するウェブサイトにおける個人情報の取り扱いについて定めるものです。',
  },
  {
    title: '2. 取得する個人情報',
    content: '当社では、お問い合わせ・資料請求等の際に以下の個人情報をお預かりする場合があります。\n・会社名\n・氏名\n・メールアドレス\n・電話番号\n・ご相談内容',
  },
  {
    title: '3. 利用目的',
    content: '取得した個人情報は、以下の目的にのみ利用します。\n・お問い合わせへの回答・ご連絡\n・サービスのご提案・ご提供\n・必要に応じたご連絡',
  },
  {
    title: '4. 第三者への提供',
    content: '当社は、以下の場合を除き、お預かりした個人情報を第三者に提供・開示いたしません。\n・ご本人の同意がある場合\n・法令に基づく場合',
  },
  {
    title: '5. 個人情報の管理',
    content: '取得した個人情報は、不正アクセス・紛失・漏洩等が生じないよう、適切かつ合理的な安全対策を講じて管理します。',
  },
  {
    title: '6. 開示・訂正・削除等の請求',
    content: 'ご本人から個人情報の開示・訂正・削除等のご請求があった場合は、ご本人であることを確認の上、合理的な期間内に対応いたします。ご請求は下記お問い合わせ先までご連絡ください。',
  },
  {
    title: '7. アクセス解析ツールについて',
    content: '現在、当サイトではアクセス解析ツール（Google Analytics 等）を導入しておりません。将来的に導入する際は、本ポリシーを更新してご案内します。',
  },
  {
    title: '8. 本ポリシーの変更',
    content: '本ポリシーは、法令の改正・サービスの変更等に伴い、予告なく改定することがあります。改定後は当サイトへの掲載をもって効力を生じるものとします。',
  },
  {
    title: '9. お問い合わせ先',
    content: '個人情報の取り扱いに関するお問い合わせは以下までご連絡ください。\n株式会社AI就活 個人情報担当\nメール：info@aishukatu.com\n電話：090-4246-2713',
  },
]

export default function Privacy() {
  return (
    <section id="privacy" className="section section--alt">
      <div className="container">
        <div className="prv-header">
          <p className="section-label">Legal</p>
          <h2 className="section-title">プライバシーポリシー</h2>
          <p className="prv-date">制定日：2025年8月</p>
        </div>

        <div className="prv-body">
          <p className="prv-intro">
            株式会社AI就活（以下「当社」）は、個人情報の保護を重要な責務と認識し、
            以下のとおり個人情報の取り扱い方針を定めます。
          </p>

          {sections.map((s) => (
            <div key={s.title} className="prv-section">
              <h3 className="prv-section-title">{s.title}</h3>
              <p className="prv-section-content">
                {s.content.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < s.content.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .prv-header {
          margin-bottom: 48px;
        }
        .prv-date {
          font-size: 0.875rem;
          color: #9ca3af;
          margin-top: 8px;
        }
        .prv-body {
          max-width: 760px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 44px 48px;
        }
        .prv-intro {
          font-size: 0.9375rem;
          color: #6b7280;
          line-height: 1.8;
          margin-bottom: 36px;
          padding-bottom: 28px;
          border-bottom: 1px solid #f3f4f6;
        }
        .prv-section {
          margin-bottom: 28px;
          padding-bottom: 28px;
          border-bottom: 1px solid #f3f4f6;
        }
        .prv-section:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }
        .prv-section-title {
          font-size: 0.9375rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 10px;
        }
        .prv-section-content {
          font-size: 0.9375rem;
          color: #6b7280;
          line-height: 1.8;
        }
        @media (max-width: 768px) {
          .prv-body {
            padding: 28px 20px;
          }
          .prv-header {
            margin-bottom: 32px;
          }
        }
      `}</style>
    </section>
  )
}
