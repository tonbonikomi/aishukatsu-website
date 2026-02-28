import { gritContent } from '../content/site'

export default function Grit() {
  if (!gritContent.enabled) return null

  const { title, lead, imageEnabled, imageUrl, imageAlt, results, note } = gritContent

  return (
    <section id="grit" className="section">
      <div className="container">
        <div className="grit-header">
          <p className="section-label">選抜コミュニティ</p>
          <h2 className="section-title">{title}</h2>
          <p className="section-desc">{lead}</p>
        </div>

        <div className={`grit-body${imageEnabled ? ' grit-body--has-image' : ''}`}>
          {/* 画像（imageEnabled が true のときのみ表示）*/}
          {imageEnabled && (
            <div className="grit-img-wrap">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="grit-img"
              />
            </div>
          )}

          {/* 実績テーブル */}
          <div className="grit-results">
            <div className="grit-results-head">
              <h3 className="grit-results-title">実績データ</h3>
              <span className="grit-badge">27卒 参考値</span>
            </div>

            <dl className="grit-dl">
              {results.map((row) => (
                <div key={row.label} className="grit-dl-row">
                  <dt className="grit-dt">{row.label}</dt>
                  <dd className="grit-dd">{row.value}</dd>
                </div>
              ))}
            </dl>

            <p className="grit-note">{note}</p>

            <a href="#contact" className="btn btn-outline grit-cta">
              GRIT への協賛・接点を相談する
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .grit-header {
          margin-bottom: 52px;
        }
        .grit-body {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: start;
        }
        .grit-body--has-image {
          grid-template-columns: 1fr 1fr;
        }
        .grit-img-wrap {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e5e7eb;
          background: #f9fafb;
        }
        .grit-img {
          width: 100%;
          display: block;
          object-fit: contain;
          aspect-ratio: 16/10;
          background: #f3f4f6;
        }
        .grit-results {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 32px 28px;
        }
        .grit-results-head {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid #f3f4f6;
        }
        .grit-results-title {
          font-size: 1rem;
          font-weight: 700;
          color: #111827;
        }
        .grit-badge {
          display: inline-block;
          background: #fef3c7;
          color: #92400e;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 999px;
          border: 1px solid #fde68a;
        }
        .grit-dl {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 20px;
        }
        .grit-dl-row {
          display: grid;
          grid-template-columns: 8rem 1fr;
          gap: 12px;
          padding: 11px 0;
          border-bottom: 1px solid #f9fafb;
          align-items: start;
        }
        .grit-dl-row:last-child {
          border-bottom: none;
        }
        .grit-dt {
          font-size: 0.8125rem;
          font-weight: 600;
          color: #9ca3af;
          padding-top: 2px;
          flex-shrink: 0;
        }
        .grit-dd {
          font-size: 0.9375rem;
          color: #374151;
          line-height: 1.6;
        }
        .grit-note {
          font-size: 0.8125rem;
          color: #9ca3af;
          line-height: 1.6;
          margin-bottom: 24px;
          padding: 12px 14px;
          background: #f9fafb;
          border-radius: 8px;
          border: 1px solid #f3f4f6;
        }
        .grit-cta {
          width: 100%;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .grit-body,
          .grit-body--has-image {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .grit-header {
            margin-bottom: 36px;
          }
          .grit-dl-row {
            grid-template-columns: 6.5rem 1fr;
          }
        }
      `}</style>
    </section>
  )
}
