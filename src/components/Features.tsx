const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="#eff6ff" />
        <path d="M10 16h12M16 10v12" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" />
        <rect x="9" y="9" width="14" height="14" rx="3" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 2" />
      </svg>
    ),
    label: '01',
    title: '就活イベントの開催',
    desc: '企業の採用ニーズに合わせたイベントを企画・集客・運営まで一貫して担当。合同説明会・GD対策イベント・懇親会形式など多彩な形式に対応します。',
    points: ['企画〜当日運営まで一括対応', '大学付近・都市部の貸会議室で開催', '120〜180分・オフライン形式が標準'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="#fdf4ff" />
        <rect x="9" y="9" width="14" height="14" rx="4" stroke="#9333ea" strokeWidth="2" />
        <circle cx="16" cy="16" r="3.5" stroke="#9333ea" strokeWidth="2" />
        <circle cx="21" cy="11" r="1.2" fill="#9333ea" />
      </svg>
    ),
    label: '02',
    title: '学生集客・送客',
    desc: 'SNS・協賛・リファラルで集めた京大・難関大生を、就活エージェントや採用イベントへ月平均250〜350名送客。Instagram投稿1本で平均1.1万回閲覧を実現します。',
    points: ['月間送客250〜350名（実績値）', 'Instagram閲覧1.1万回/投稿以上', '京大・阪大・関関同立を主対象'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="#f0fdf4" />
        <path d="M9 23l5-10 4 5 4-9" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: '03',
    title: '選抜コミュニティ運営',
    desc: '書類選考＋面接で選抜した京大生を対象に、GD対策・面接対策・ES添削などの就活支援を実施。志望度の高い優秀な学生との深い接点を提供します。',
    points: ['書類+面接による選抜（27卒：30名規模）', 'コンサル・商社・デベロッパー志望が中心', '企業との接点機会を設計可能'],
  },
]

export default function Features() {
  return (
    <section id="business" className="section">
      <div className="container">
        <div className="feat-header">
          <p className="section-label">事業内容</p>
          <h2 className="section-title">三本柱の採用支援</h2>
          <p className="section-desc">
            採用ブランディングから母集団形成・個別フォローまで、
            貴社の採用フェーズに応じたサポートを提供します。
          </p>
        </div>

        <div className="feat-grid">
          {features.map((f) => (
            <div key={f.label} className="feat-card">
              <div className="feat-card-top">
                <div className="feat-icon">{f.icon}</div>
                <span className="feat-label">{f.label}</span>
              </div>
              <h3 className="feat-title">{f.title}</h3>
              <p className="feat-desc">{f.desc}</p>
              <ul className="feat-points">
                {f.points.map((p) => (
                  <li key={p} className="feat-point">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7l3 3 6-6" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .feat-header {
          margin-bottom: 64px;
        }
        .feat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .feat-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 32px 28px;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .feat-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.07);
          transform: translateY(-3px);
        }
        .feat-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .feat-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: #d1d5db;
          letter-spacing: 0.05em;
          line-height: 1;
        }
        .feat-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 12px;
          line-height: 1.4;
        }
        .feat-desc {
          font-size: 0.9375rem;
          color: #6b7280;
          line-height: 1.75;
          margin-bottom: 20px;
        }
        .feat-points {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          border-top: 1px solid #f3f4f6;
          padding-top: 16px;
        }
        .feat-point {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.875rem;
          color: #374151;
          line-height: 1.5;
        }
        .feat-point svg {
          flex-shrink: 0;
          margin-top: 1px;
        }
        @media (max-width: 768px) {
          .feat-grid {
            grid-template-columns: 1fr;
          }
          .feat-header {
            margin-bottom: 40px;
          }
        }
      `}</style>
    </section>
  )
}
