import { useState } from 'react'

const faqs = [
  {
    q: 'どのような企業様にご利用いただけますか？',
    a: '主に新卒採用を強化したい企業様にご活用いただいています。「難関大生の母集団を増やしたい」「採用ブランドを高めたい」「京大・難関大生と早期に接点を持ちたい」といったお悩みをお持ちの企業様は、ぜひお気軽にご相談ください。業種・企業規模は問いません。',
  },
  {
    q: '対象の学生はどの大学ですか？',
    a: '京都大学・大阪大学を中心に、関関同立（関西大学・関西学院大学・同志社大学・立命館大学）の学生を対象としています。合計登録学生数は1.5万人以上です。主に学部3年生・修士1年生（就職活動中の学生）が対象です。',
  },
  {
    q: 'イベントはどのような形式で開催できますか？',
    a: '合同説明会・個別セミナー・GD対策イベント・懇親会形式など、貴社の採用目的に合わせてご提案します。開催場所は大学付近または都市部の貸会議室が基本です。標準的な所要時間は120〜180分です。オンラインでの対応についてはご相談ください。',
  },
  {
    q: '費用はどのくらいかかりますか？',
    a: 'サービス内容・規模・期間によって異なります。まずは無料相談の上、最適なプランをご提案いたします。お問い合わせはメール・電話にてお気軽にどうぞ。',
  },
  {
    q: '最短でいつから開催できますか？',
    a: 'ご相談後、最短2〜3週間程度での開催実績があります。開催日程はご要望に合わせて柔軟に調整いたします。',
  },
  {
    q: '関西以外の企業様でも対応可能ですか？',
    a: '対応可能です。現在は関西中心に活動していますが、オンラインや出張対応により全国の企業様のご支援が可能です。まずはお気軽にお問い合わせください。',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="section section--alt" id="faq">
      <div className="container">
        <div className="text-center faq-header">
          <p className="section-label">FAQ</p>
          <h2 className="section-title">よくあるご質問</h2>
          <p className="section-desc">
            その他のご不明点は、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${openIndex === i ? ' faq-item--open' : ''}`}>
              <button
                className="faq-q"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.q}</span>
                <svg
                  className="faq-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 7.5l5 5 5-5"
                    stroke="#6b7280"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {openIndex === i && (
                <div className="faq-a">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .faq-header {
          margin-bottom: 56px;
        }
        .faq-list {
          max-width: 720px;
          margin-inline: auto;
        }
        .faq-item {
          border-bottom: 1px solid #e5e7eb;
        }
        .faq-item:first-child {
          border-top: 1px solid #e5e7eb;
        }
        .faq-q {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 22px 0;
          background: none;
          border: none;
          text-align: left;
          font-size: 1rem;
          font-weight: 600;
          color: #111827;
          cursor: pointer;
          transition: color 0.15s;
        }
        .faq-q:hover {
          color: #2563eb;
        }
        .faq-icon {
          flex-shrink: 0;
          transition: transform 0.2s;
        }
        .faq-item--open .faq-icon {
          transform: rotate(180deg);
        }
        .faq-a {
          padding: 0 0 20px;
          font-size: 0.9375rem;
          color: #6b7280;
          line-height: 1.75;
        }
        @media (max-width: 768px) {
          .faq-header {
            margin-bottom: 36px;
          }
          .faq-q {
            font-size: 0.9375rem;
          }
        }
      `}</style>
    </section>
  )
}
