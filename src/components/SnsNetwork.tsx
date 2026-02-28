import { snsNetworkContent, type SnsAccount } from '../content/site'

const isPending = (url: string) => url.startsWith('TODO')

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="15" cy="5" r="1" fill="currentColor" />
    </svg>
  )
}

function AccountCard({ acc }: { acc: SnsAccount }) {
  const pending = isPending(acc.url)
  return (
    <div className={`sns-card${pending ? ' sns-card--pending' : ''}`}>
      <div className="sns-card-icon">
        <InstagramIcon />
      </div>
      <div className="sns-card-name">{acc.name}</div>
      <div className="sns-card-univ">{acc.university}</div>
      {pending ? (
        <span className="sns-card-badge">準備中</span>
      ) : (
        <a
          href={acc.url}
          target="_blank"
          rel="noopener noreferrer"
          className="sns-card-handle"
        >
          {acc.handle}
        </a>
      )}
    </div>
  )
}

export default function SnsNetwork() {
  if (!snsNetworkContent.enabled) return null

  const { title, lead, imageEnabled, imageUrl, imageAlt, totalFollowers, accounts } = snsNetworkContent

  return (
    <section id="sns" className="section section--alt">
      <div className="container">
        {/* ヘッダー */}
        <div className="sns-header">
          <p className="section-label">SNS ネットワーク</p>
          <h2 className="section-title">{title}</h2>
          <p className="section-desc">{lead}</p>
        </div>

        {/* 画像 + 統計（imageEnabled が true のとき画像も表示）*/}
        <div className={`sns-visual${imageEnabled ? '' : ' sns-visual--no-image'}`}>
          {imageEnabled && (
            <div className="sns-img-wrap">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="sns-img"
              />
            </div>
          )}
          <div className="sns-stat-card">
            <div className="sns-stat-value">{totalFollowers}</div>
            <div className="sns-stat-label">合計登録学生数</div>
            <p className="sns-stat-sub">京大・阪大・関関同立の<br />就活SNSアカウント合計</p>
          </div>
        </div>

        {/* アカウントグリッド */}
        <div className="sns-grid">
          {accounts.map((acc) => (
            <AccountCard key={acc.name} acc={acc} />
          ))}
        </div>
      </div>

      <style>{`
        .sns-header {
          margin-bottom: 48px;
        }
        .sns-visual {
          display: grid;
          grid-template-columns: 1fr 240px;
          gap: 24px;
          align-items: center;
          margin-bottom: 40px;
        }
        .sns-visual--no-image {
          grid-template-columns: 240px;
          justify-content: center;
        }
        .sns-img-wrap {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e5e7eb;
          background: #f9fafb;
        }
        .sns-img {
          width: 100%;
          display: block;
          object-fit: contain;
          aspect-ratio: 16/7;
          background: #f3f4f6;
        }
        .sns-stat-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 28px 20px;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        }
        .sns-stat-value {
          font-size: 2.25rem;
          font-weight: 800;
          color: #2563eb;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 6px;
        }
        .sns-stat-label {
          font-size: 0.9rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 10px;
        }
        .sns-stat-sub {
          font-size: 0.8125rem;
          color: #9ca3af;
          line-height: 1.6;
        }
        .sns-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .sns-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 20px 18px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          transition: box-shadow 0.18s, transform 0.18s;
        }
        .sns-card:not(.sns-card--pending):hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.07);
          transform: translateY(-2px);
        }
        .sns-card--pending {
          opacity: 0.65;
        }
        .sns-card-icon {
          color: #9333ea;
          margin-bottom: 8px;
        }
        .sns-card-name {
          font-size: 0.9375rem;
          font-weight: 700;
          color: #111827;
        }
        .sns-card-univ {
          font-size: 0.8125rem;
          color: #9ca3af;
          margin-bottom: 8px;
        }
        .sns-card-handle {
          font-size: 0.875rem;
          color: #2563eb;
          font-weight: 500;
          transition: color 0.15s;
        }
        .sns-card-handle:hover {
          color: #1d4ed8;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .sns-card-badge {
          display: inline-block;
          background: #f3f4f6;
          color: #9ca3af;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 999px;
        }
        @media (max-width: 768px) {
          .sns-header {
            margin-bottom: 32px;
          }
          .sns-visual,
          .sns-visual--no-image {
            grid-template-columns: 1fr;
            justify-content: stretch;
          }
          .sns-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 480px) {
          .sns-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
