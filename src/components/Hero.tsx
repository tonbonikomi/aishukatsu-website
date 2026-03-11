import { company } from '../content/site'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__badge">企業様向け新卒採用支援</div>
        <h1 className="hero__title">
          学生と企業の、
          <br />
          架け橋を。
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
          <a href="#contact" className="btn btn-primary">
            採用について相談する
          </a>
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
          background:
            radial-gradient(ellipse 80% 60% at 70% 10%, rgba(37, 99, 235, 0.06) 0%, transparent 60%),
            linear-gradient(168deg, #f8faff 0%, #ffffff 55%);
          padding-block: 96px;
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
          color: var(--color-primary);
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 6px 16px;
          border-radius: 999px;
          border: 1px solid #bfdbfe;
          margin-bottom: 32px;
        }
        .hero__title {
          font-size: clamp(2.75rem, 8vw, 5.5rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.035em;
          color: var(--color-text);
          margin-bottom: 28px;
        }
        .hero__sub {
          font-size: clamp(1rem, 2.5vw, 1.1875rem);
          color: var(--color-text-muted);
          line-height: 1.9;
          margin-bottom: 44px;
          max-width: 540px;
        }
        .hero__sub strong {
          color: var(--color-text);
          font-weight: 700;
        }
        .hero__br {
          display: none;
        }
        .hero__actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .hero__note {
          font-size: 0.875rem;
          color: #94a3b8;
          letter-spacing: 0.01em;
        }
        @media (max-width: 768px) {
          .hero {
            min-height: auto;
            padding-block: 72px;
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
