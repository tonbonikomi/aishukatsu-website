import { company } from '../content/site'

const MAILTO_HREF = company.email
  ? 'mailto:' + company.email +
    '?subject=' + encodeURIComponent('採用に関するお問い合わせ（株式会社AI就活）') +
    '&body=' + encodeURIComponent(
      '【必須項目】\n会社名：\n氏名：\nメールアドレス：\n電話番号：\n\nご相談内容：'
    )
  : ''

// Instagram ハンドル（URL から @xxx 部分を抽出）
const instagramHandle = company.instagramUrl
  ? '@' + company.instagramUrl.replace(/\/$/, '').split('/').pop()
  : ''

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="text-center ct-header">
          <p className="section-label">お問い合わせ</p>
          <h2 className="section-title">まずはご相談ください</h2>
          <p className="section-desc">
            採用に関するご相談・イベント開催のご依頼は、お電話またはメールにてお気軽にどうぞ。
            <br />
            通常1〜2営業日以内にご返信いたします。
          </p>
        </div>

        <div className="ct-layout">
          {/* 連絡先カード */}
          <div className="ct-info-card">
            <h3 className="ct-info-title">連絡先</h3>

            <ul className="ct-info-list">
              {company.tel && (
                <li className="ct-info-item">
                  <div className="ct-info-icon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M3 3h4l1.5 3.5-2 1.2a9 9 0 004.8 4.8l1.2-2L16 11v4a1 1 0 01-1 1C7.163 16 2 10.837 2 4a1 1 0 011-1z" stroke="#2563eb" strokeWidth="1.6" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="ct-info-label">お電話</div>
                    <a href={`tel:${company.tel.replace(/-/g, '')}`} className="ct-info-value ct-link">
                      {company.tel}
                    </a>
                    <div className="ct-info-sub">平日10:00〜18:00</div>
                  </div>
                </li>
              )}

              {company.email && (
                <li className="ct-info-item">
                  <div className="ct-info-icon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <rect x="2" y="4" width="14" height="10" rx="2" stroke="#2563eb" strokeWidth="1.6" />
                      <path d="M2 6l7 5 7-5" stroke="#2563eb" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="ct-info-label">メール</div>
                    <a href={`mailto:${company.email}`} className="ct-info-value ct-link">
                      {company.email}
                    </a>
                    <div className="ct-info-sub">1〜2営業日以内に返信</div>
                  </div>
                </li>
              )}

              {company.instagramUrl && (
                <li className="ct-info-item">
                  <div className="ct-info-icon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <rect x="3" y="3" width="12" height="12" rx="4" stroke="#9333ea" strokeWidth="1.6" />
                      <circle cx="9" cy="9" r="3" stroke="#9333ea" strokeWidth="1.6" />
                      <circle cx="13" cy="5" r="0.8" fill="#9333ea" />
                    </svg>
                  </div>
                  <div>
                    <div className="ct-info-label">Instagram</div>
                    <a
                      href={company.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ct-info-value ct-link"
                    >
                      {instagramHandle}
                    </a>
                    <div className="ct-info-sub">DMでのご相談も歓迎</div>
                  </div>
                </li>
              )}
            </ul>
          </div>

          {/* アクションカード */}
          <div className="ct-action-card">
            <h3 className="ct-info-title">相談方法を選ぶ</h3>
            <p className="ct-action-desc">
              以下の項目をご準備いただくとスムーズです：
              <br />
              会社名 / 氏名 / メールアドレス / 電話番号 / ご相談内容
            </p>

            <div className="ct-actions">
              {company.email && (
                <a href={MAILTO_HREF} className="btn btn-primary ct-btn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  メールで相談する
                </a>
              )}
              {company.googleFormUrl && (
                <a
                  href={company.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline ct-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <rect x="2" y="1" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M5 5h6M5 8h6M5 11h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                  フォームで相談する
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ct-header {
          margin-bottom: 56px;
        }
        .ct-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          max-width: 880px;
          margin-inline: auto;
        }
        .ct-info-card,
        .ct-action-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 20px;
          padding: 36px 32px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.04);
        }
        .ct-info-title {
          font-size: 1rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 24px;
          padding-bottom: 12px;
          border-bottom: 1px solid #f3f4f6;
        }
        .ct-info-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .ct-info-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .ct-info-icon {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
        }
        .ct-info-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #9ca3af;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 2px;
        }
        .ct-info-value {
          font-size: 1rem;
          font-weight: 600;
          color: #111827;
          display: block;
          margin-bottom: 2px;
        }
        .ct-link {
          color: #2563eb;
          transition: color 0.15s;
        }
        .ct-link:hover {
          color: #1d4ed8;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .ct-info-sub {
          font-size: 0.8125rem;
          color: #9ca3af;
        }
        .ct-action-desc {
          font-size: 0.9375rem;
          color: #6b7280;
          line-height: 1.75;
          margin-bottom: 28px;
        }
        .ct-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }
        .ct-btn {
          width: 100%;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .ct-header {
            margin-bottom: 36px;
          }
          .ct-layout {
            grid-template-columns: 1fr;
          }
          .ct-info-card,
          .ct-action-card {
            padding: 28px 20px;
          }
        }
      `}</style>
    </section>
  )
}
