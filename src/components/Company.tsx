const overview = [
  { label: '会社名', value: '株式会社AI就活' },
  { label: '設立', value: '2025年8月' },
  { label: '代表取締役', value: '里見 知馬' },
  { label: '事業内容', value: '採用支援・就活コミュニティ運営' },
  { label: '所在地', value: '（記入予定）' },
  { label: 'メール', value: 'info@aishukatu.com' },
]

const history = [
  { year: '2024年5月', desc: '新規事業として人材支援・就活コミュニティ事業を立ち上げ' },
  { year: '2025年8月', desc: '株式会社AI就活として法人化' },
]

export default function Company() {
  return (
    <section id="company" className="section">
      <div className="container">
        <div className="co-header">
          <p className="section-label">会社情報</p>
          <h2 className="section-title">株式会社AI就活について</h2>
        </div>

        {/* 代表メッセージ */}
        <div className="co-message">
          <div className="co-avatar" aria-hidden="true">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <rect width="64" height="64" rx="32" fill="#eff6ff" />
              <circle cx="32" cy="26" r="10" fill="#bfdbfe" />
              <path d="M12 56c0-11.046 8.954-20 20-20s20 8.954 20 20" fill="#dbeafe" />
            </svg>
          </div>
          <div className="co-message-body">
            <blockquote className="co-quote">
              「学生時代に感じた、採用の非効率さと学生の機会格差。その両方を解消したくて始めました。
              優秀な学生と真剣な企業が出会える場を、もっと増やしていきたい。
              それがAI就活の原点です。」
            </blockquote>
            <p className="co-ceo-name">代表取締役社長　里見 知馬</p>
            <p className="co-ceo-bg">京都大学法学部 / VCインターン経験 / 学生・企業双方に価値ある場づくりを目指してコミュニティを立ち上げ</p>
          </div>
        </div>

        <div className="co-grid">
          {/* 会社概要 */}
          <div className="co-section">
            <h3 className="co-section-title">会社概要</h3>
            <dl className="co-dl">
              {overview.map((row) => (
                <div key={row.label} className="co-dl-row">
                  <dt className="co-dt">{row.label}</dt>
                  <dd className="co-dd">
                    {row.label === 'メール'
                      ? <a href={`mailto:${row.value}`} className="co-link">{row.value}</a>
                      : row.value
                    }
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 沿革 */}
          <div className="co-section">
            <h3 className="co-section-title">沿革</h3>
            <ol className="co-timeline">
              {history.map((h) => (
                <li key={h.year} className="co-timeline-item">
                  <div className="co-timeline-year">{h.year}</div>
                  <p className="co-timeline-desc">{h.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <style>{`
        .co-header {
          margin-bottom: 56px;
        }
        .co-message {
          display: flex;
          align-items: flex-start;
          gap: 32px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 40px 36px;
          margin-bottom: 48px;
        }
        .co-avatar {
          flex-shrink: 0;
        }
        .co-message-body {
          flex: 1;
        }
        .co-quote {
          font-size: 1.0625rem;
          color: #374151;
          line-height: 1.8;
          font-style: normal;
          border-left: 3px solid #2563eb;
          padding-left: 20px;
          margin-bottom: 20px;
        }
        .co-ceo-name {
          font-size: 1rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 4px;
        }
        .co-ceo-bg {
          font-size: 0.875rem;
          color: #6b7280;
          line-height: 1.6;
        }
        .co-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .co-section {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 32px 28px;
        }
        .co-section-title {
          font-size: 1rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid #f3f4f6;
        }
        .co-dl {
          display: flex;
          flex-direction: column;
        }
        .co-dl-row {
          display: grid;
          grid-template-columns: 7rem 1fr;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid #f9fafb;
          align-items: start;
        }
        .co-dl-row:last-child {
          border-bottom: none;
        }
        .co-dt {
          font-size: 0.8125rem;
          font-weight: 600;
          color: #9ca3af;
          padding-top: 2px;
        }
        .co-dd {
          font-size: 0.9375rem;
          color: #374151;
        }
        .co-link {
          color: #2563eb;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .co-timeline {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .co-timeline-item {
          display: grid;
          grid-template-columns: 7.5rem 1fr;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid #f9fafb;
          align-items: start;
        }
        .co-timeline-item:last-child {
          border-bottom: none;
        }
        .co-timeline-year {
          font-size: 0.8125rem;
          font-weight: 600;
          color: #2563eb;
          padding-top: 2px;
        }
        .co-timeline-desc {
          font-size: 0.9375rem;
          color: #374151;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .co-message {
            flex-direction: column;
            gap: 20px;
            padding: 28px 20px;
          }
          .co-grid {
            grid-template-columns: 1fr;
          }
          .co-header {
            margin-bottom: 36px;
          }
          .co-dl-row,
          .co-timeline-item {
            grid-template-columns: 6rem 1fr;
          }
        }
      `}</style>
    </section>
  )
}
