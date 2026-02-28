import { sponsorsContent, type SponsorLogo } from '../content/site'

function LogoItem({ logo }: { logo: SponsorLogo }) {
  const inner = (
    <img
      src={logo.src}
      alt={logo.name}
      className="sponsor-logo-img"
      loading="lazy"
    />
  )
  if (logo.url) {
    return (
      <a
        href={logo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="sponsor-logo-item"
        title={logo.name}
      >
        {inner}
      </a>
    )
  }
  return (
    <div className="sponsor-logo-item" title={logo.name}>
      {inner}
    </div>
  )
}

export default function Sponsors() {
  if (!sponsorsContent.enabled) return null

  const { headline, headlineLabel, lead, note, logos } = sponsorsContent

  return (
    <section id="sponsors" className="section">
      <div className="container">
        {/* ヘッダー：大きな数字 + リード */}
        <div className="sp-header">
          <p className="section-label">協賛・パートナー</p>
          <div className="sp-stat">
            <div className="sp-headline">{headline}</div>
            <div className="sp-headline-label">{headlineLabel}</div>
          </div>
          <p className="sp-lead">{lead}</p>
        </div>

        {/* ロゴグリッド（空なら非表示）*/}
        {logos.length > 0 && (
          <div className="sp-logos">
            {logos.map((logo) => (
              <LogoItem key={logo.src} logo={logo} />
            ))}
          </div>
        )}

        {/* 注記 */}
        <p className="sp-note">{note}</p>

        {/* CTA */}
        <div className="sp-cta-wrap">
          <a href="#contact" className="btn btn-outline">
            協賛・パートナーシップのご相談
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .sp-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .sp-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          margin-bottom: 20px;
        }
        .sp-headline {
          font-size: clamp(4rem, 10vw, 6.5rem);
          font-weight: 800;
          color: #2563eb;
          letter-spacing: -0.04em;
          line-height: 1;
        }
        .sp-headline-label {
          font-size: 1rem;
          font-weight: 600;
          color: #374151;
          letter-spacing: 0.01em;
        }
        .sp-lead {
          font-size: 1.0625rem;
          color: #6b7280;
          max-width: 480px;
          margin-inline: auto;
          line-height: 1.75;
        }
        .sp-logos {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }
        .sponsor-logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 16px;
          height: 72px;
          transition: box-shadow 0.18s;
        }
        a.sponsor-logo-item:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.07);
        }
        .sponsor-logo-img {
          max-width: 100%;
          max-height: 40px;
          object-fit: contain;
          filter: grayscale(1);
          opacity: 0.7;
          transition: filter 0.2s, opacity 0.2s;
        }
        a.sponsor-logo-item:hover .sponsor-logo-img {
          filter: grayscale(0);
          opacity: 1;
        }
        .sp-note {
          font-size: 0.8125rem;
          color: #9ca3af;
          text-align: center;
          margin-bottom: 36px;
        }
        .sp-cta-wrap {
          display: flex;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .sp-logos {
            grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
          }
        }
      `}</style>
    </section>
  )
}
