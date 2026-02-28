import { company } from '../content/site'

const navLinks = [
  { label: '事業内容', href: '#business' },
  { label: 'GRIT',   href: '#grit' },
  { label: 'SNS',    href: '#sns' },
  { label: '協賛',   href: '#sponsors' },
  { label: '実績・事例', href: '#results' },
  { label: '会社情報', href: '#company' },
  { label: 'お問い合わせ', href: '#contact' },
]

export default function Footer() {
  const telHref = company.tel ? `tel:${company.tel.replace(/-/g, '')}` : ''

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="footer__logo">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <rect width="28" height="28" rx="7" fill="#2563eb" />
              <path d="M7 14l5 5 9-10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{company.name}</span>
          </a>
          {company.tagline && (
            <p className="footer__tagline">{company.tagline}</p>
          )}
          <div className="footer__contact">
            {company.tel && (
              <a href={telHref} className="footer__contact-item">{company.tel}</a>
            )}
            {company.email && (
              <a href={`mailto:${company.email}`} className="footer__contact-item">{company.email}</a>
            )}
          </div>
        </div>

        <nav className="footer__nav" aria-label="フッターナビゲーション">
          <ul className="footer__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="footer__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="footer__links">
            {company.pdfEnabled && company.pdfPath && (
              <li>
                <a
                  href={company.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link footer__link--pdf"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 1v8M3 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  会社説明資料（PDF）
                </a>
              </li>
            )}
            {company.instagramUrl && (
              <li>
                <a
                  href={company.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  Instagram
                </a>
              </li>
            )}
            <li>
              <a href="#privacy" className="footer__link">プライバシーポリシー</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copy">© 2026 {company.name}. All rights reserved.</p>
      </div>

      <style>{`
        .footer {
          background: #111827;
          color: #d1d5db;
          padding-top: 64px;
          padding-bottom: 32px;
        }
        .footer__inner {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 40px;
          padding-bottom: 48px;
          border-bottom: 1px solid #1f2937;
        }
        .footer__brand {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer__logo {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: -0.01em;
        }
        .footer__tagline {
          font-size: 0.9375rem;
          color: #9ca3af;
        }
        .footer__contact {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 4px;
        }
        .footer__contact-item {
          font-size: 0.875rem;
          color: #9ca3af;
          transition: color 0.15s;
        }
        .footer__contact-item:hover {
          color: #fff;
        }
        .footer__nav {
          display: flex;
          gap: 48px;
          flex-shrink: 0;
        }
        .footer__links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer__link {
          font-size: 0.9375rem;
          color: #9ca3af;
          transition: color 0.15s;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .footer__link:hover {
          color: #fff;
        }
        .footer__link--pdf {
          color: #93c5fd;
        }
        .footer__link--pdf:hover {
          color: #bfdbfe;
        }
        .footer__bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 32px;
        }
        .footer__copy {
          font-size: 0.875rem;
          color: #6b7280;
        }
        @media (max-width: 768px) {
          .footer__inner {
            flex-direction: column;
            gap: 32px;
          }
          .footer__nav {
            gap: 32px;
          }
        }
      `}</style>
    </footer>
  )
}
