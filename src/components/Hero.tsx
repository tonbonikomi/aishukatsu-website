import { company } from '../content/site'

const MAILTO_HREF =
  `mailto:${company.email}` +
  '?subject=' + encodeURIComponent('採用に関するお問い合わせ（株式会社AI就活）') +
  '&body=' + encodeURIComponent(
    '【必須項目】\n会社名：\n氏名：\nメールアドレス：\n電話番号：\n\nご相談内容：'
  )

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__badge">企業様向け新卒採用支援</div>
        <h1 className="hero__title">
          学生と企業の、
          <br />
          架け橋に。

        </h1>
        <p className="hero__sub">
          京大・阪大・関関同立を中心とした
          <strong>登録学生1.5万人以上</strong>のネットワーク。
          <br className="hero__br" />
          就活イベント・学生送客・選抜コミュニティの三本柱で
          <br className="hero__br" />
          貴社の採用活動を多角的に支援します。
        </p>
        <div className="hero__actions">
          {company.email && (
            <a href={MAILTO_HREF} className="btn btn-primary">
              採用について相談する
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          )}
          {company.pdfEnabled && company.pdfPath && (
            <a href={company.pdfPath} className="btn btn-outline" download="会社説明資料.pdf">
              会社説明資料（PDF）
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1v8M3 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </a>
          )}
        </div>
        {company.tel && (
          <p className="hero__note">まずは無料でご相談ください · お電話：{company.tel}</p>
        )}
      </div>

      <style>{`
        .hero {
          min-height: 88vh;
          display: flex;
          align-items: center;
          background: linear-gradient(160deg, #f0f6ff 0%, #ffffff 60%);
          padding-block: 80px;
        }
        .hero__inner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
        }
        .hero__badge {
          display: inline-block;
          background: #eff6ff;
          color: #2563eb;
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 6px 14px;
          border-radius: 999px;
          border: 1px solid #bfdbfe;
          margin-bottom: 28px;
        }
        .hero__title {
          font-size: clamp(2.75rem, 8vw, 5.5rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #111827;
          margin-bottom: 28px;
        }
        .hero__sub {
          font-size: clamp(1rem, 2.5vw, 1.1875rem);
          color: #4b5563;
          line-height: 1.85;
          margin-bottom: 40px;
          max-width: 540px;
        }
        .hero__sub strong {
          color: #111827;
          font-weight: 700;
        }
        .hero__br {
          display: none;
        }
        .hero__actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .hero__note {
          font-size: 0.875rem;
          color: #9ca3af;
        }
        @media (max-width: 768px) {
          .hero {
            min-height: auto;
            padding-block: 64px;
          }
          .hero__br {
            display: block;
          }
          .hero__actions .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
