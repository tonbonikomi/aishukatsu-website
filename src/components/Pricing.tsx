const stats = [
  { value: '1.5万人+', label: '登録学生数', desc: '京大・阪大・関関同立を中心とした学生ネットワーク' },
  { value: '250〜350名', label: '月間平均送客数', desc: 'SNS・協賛・リファラル経由で毎月安定的に送客', highlight: true },
  { value: '1.1万回+', label: 'Instagram投稿平均閲覧数', desc: '就活生への高いリーチ力でブランド認知を支援' },
]

const caseStudy = {
  title: '開催事例：GD対策イベント',
  items: [
    { label: '開催時期', value: '8月中旬（オフライン・対面）' },
    { label: '参加学生', value: '京都大学生 約20名' },
    { label: '参加企業', value: '某コンサルティングファーム（匿名）' },
    { label: '内容', value: '社員紹介 → 企業説明 → グループディスカッション → フィードバック → 懇親会' },
    { label: '効果', value: '参加学生の早期母集団形成、企業認知の向上、志向理解と関係構築の深化' },
  ],
}

const community = {
  title: '選抜コミュニティ GRIT（27卒）',
  note: '※ 以下は27卒時点の参考値です。今後変更の可能性があります。',
  items: [
    { label: '規模', value: '京都大学生 約30名' },
    { label: '選抜方法', value: '書類選考＋面接' },
    { label: '男女比', value: '男性7：女性3' },
    { label: '志望業界', value: 'コンサル約4割・商社約3割・デベロッパー約3割' },
    { label: '夏IS実績', value: 'BCG / ベイン / GS / 総合商社 / Big4 等（参考値）' },
  ],
}

export default function Pricing() {
  return (
    <section id="results" className="section section--alt">
      <div className="container">
        <div className="results-header">
          <p className="section-label">実績・事例</p>
          <h2 className="section-title">数字で見るAI就活の実力</h2>
          <p className="section-desc">
            積み上げてきた実績が、信頼の根拠です。
          </p>
        </div>

        {/* Stats */}
        <div className="results-stats">
          {stats.map((s) => (
            <div key={s.label} className={`results-stat${s.highlight ? ' results-stat--hl' : ''}`}>
              {s.highlight && <div className="results-badge">主力サービス</div>}
              <div className="results-value">{s.value}</div>
              <div className="results-stat-label">{s.label}</div>
              <p className="results-stat-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="results-cases">
          {/* 開催事例 */}
          <div className="results-case">
            <h3 className="results-case-title">{caseStudy.title}</h3>
            <dl className="results-dl">
              {caseStudy.items.map((item) => (
                <div key={item.label} className="results-dl-row">
                  <dt className="results-dt">{item.label}</dt>
                  <dd className="results-dd">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* GRIT */}
          <div className="results-case">
            <h3 className="results-case-title">{community.title}</h3>
            <p className="results-case-note">{community.note}</p>
            <dl className="results-dl">
              {community.items.map((item) => (
                <div key={item.label} className="results-dl-row">
                  <dt className="results-dt">{item.label}</dt>
                  <dd className="results-dd">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <style>{`
        .results-header {
          margin-bottom: 56px;
        }
        .results-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }
        .results-stat {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          position: relative;
        }
        .results-stat--hl {
          border: 2px solid #2563eb;
          box-shadow: 0 6px 28px rgba(37,99,235,0.1);
          padding-top: 46px;
        }
        .results-badge {
          position: absolute;
          top: -13px;
          left: 50%;
          transform: translateX(-50%);
          background: #2563eb;
          color: #fff;
          font-size: 0.8125rem;
          font-weight: 600;
          padding: 4px 14px;
          border-radius: 999px;
          white-space: nowrap;
        }
        .results-value {
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 800;
          color: #2563eb;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 8px;
        }
        .results-stat-label {
          font-size: 0.9375rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 8px;
        }
        .results-stat-desc {
          font-size: 0.875rem;
          color: #6b7280;
          line-height: 1.6;
        }
        .results-cases {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .results-case {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 32px 28px;
        }
        .results-case-title {
          font-size: 1rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 6px;
        }
        .results-case-note {
          font-size: 0.8125rem;
          color: #9ca3af;
          margin-bottom: 16px;
          line-height: 1.5;
        }
        .results-dl {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .results-dl-row {
          display: grid;
          grid-template-columns: 7rem 1fr;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid #f3f4f6;
          align-items: start;
        }
        .results-dl-row:last-child {
          border-bottom: none;
        }
        .results-dt {
          font-size: 0.8125rem;
          font-weight: 600;
          color: #9ca3af;
          padding-top: 2px;
        }
        .results-dd {
          font-size: 0.9375rem;
          color: #374151;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .results-stats {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin-inline: auto;
          }
          .results-cases {
            grid-template-columns: 1fr;
          }
          .results-header {
            margin-bottom: 40px;
          }
        }
      `}</style>
    </section>
  )
}
