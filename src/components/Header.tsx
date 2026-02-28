import { useState } from 'react'

const navLinks = [
  { label: '事業内容', href: '#business' },
  { label: 'GRIT',   href: '#grit' },
  { label: 'SNS',    href: '#sns' },
  { label: '協賛',   href: '#sponsors' },
  { label: '実績・事例', href: '#results' },
  { label: '会社情報', href: '#company' },
  { label: 'お問い合わせ', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#top" className="site-header__logo">
          <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="28" height="28" rx="7" fill="#2563eb" />
            <path d="M7 14l5 5 9-10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>株式会社AI就活</span>
        </a>

        <nav className="site-header__nav" aria-label="メインナビゲーション">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="site-header__link">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary site-header__cta">
            採用相談
          </a>
        </nav>

        <button
          className="site-header__hamburger"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
        >
          <span className={`h-line h-line-1${open ? ' h-line--open-1' : ''}`} />
          <span className={`h-line h-line-2${open ? ' h-line--open-2' : ''}`} />
          <span className={`h-line h-line-3${open ? ' h-line--open-3' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="site-header__mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="site-header__mobile-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ marginTop: '8px', alignSelf: 'flex-start' }}
            onClick={() => setOpen(false)}
          >
            採用について相談する
          </a>
        </div>
      )}

      <style>{`
        .site-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid #e5e7eb;
          height: var(--header-height);
        }
        .site-header__inner {
          height: var(--header-height);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .site-header__logo {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #111827;
          font-size: 0.875rem;
          font-weight: 700;
          white-space: nowrap;
          flex-shrink: 0;
          letter-spacing: -0.01em;
        }
        .site-header__nav {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
          justify-content: flex-end;
        }
        .site-header__link {
          font-size: 0.8125rem;
          font-weight: 500;
          color: #374151;
          transition: color 0.15s;
          white-space: nowrap;
        }
        .site-header__link:hover {
          color: #2563eb;
        }
        .site-header__cta {
          padding: 7px 16px;
          font-size: 0.8125rem;
          flex-shrink: 0;
          margin-left: 4px;
        }
        .site-header__hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          flex-shrink: 0;
        }
        .h-line {
          display: block;
          width: 22px;
          height: 2px;
          background: #374151;
          border-radius: 2px;
          transition: transform 0.22s, opacity 0.22s;
          transform-origin: center;
        }
        .h-line--open-1 { transform: translateY(7px) rotate(45deg); }
        .h-line--open-2 { opacity: 0; transform: scaleX(0); }
        .h-line--open-3 { transform: translateY(-7px) rotate(-45deg); }
        .site-header__mobile {
          background: #fff;
          border-top: 1px solid #e5e7eb;
          padding: 12px var(--section-px) 20px;
          display: flex;
          flex-direction: column;
        }
        .site-header__mobile-link {
          font-size: 0.9375rem;
          font-weight: 500;
          color: #374151;
          padding: 12px 0;
          border-bottom: 1px solid #f3f4f6;
          transition: color 0.15s;
        }
        .site-header__mobile-link:hover {
          color: #2563eb;
        }
        /* ナビが多いので 900px でハンバーガーに切り替え */
        @media (max-width: 900px) {
          .site-header__nav {
            display: none;
          }
          .site-header__hamburger {
            display: flex;
          }
        }
      `}</style>
    </header>
  )
}
