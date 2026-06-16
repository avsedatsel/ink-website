import { useState } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Icerik() {
  const [lang, setLang] = useState('tr')
  const tr = lang === 'tr'

  const chapters = [
    { n: 1, tr: 'Kitap ve Kaynak, Madde', en: 'Book and Source, Matter', range: '1-50' },
    { n: 2, tr: 'Madde, Dualite ve Hareket', en: 'Matter, Duality and Motion', range: '51-100' },
    { n: 3, tr: 'Dualite, Kainatlar', en: 'Duality, Universes', range: '101-150' },
    { n: 4, tr: 'Kainatlar, Ruh', en: 'Universes, Spirit', range: '151-200' },
    { n: 5, tr: 'Ruh, Asli Prensip, Varlik', en: 'Spirit, Primordial Principle, Being', range: '201-250' },
    { n: 6, tr: 'Varlik, Unite ve Tesirler', en: 'Being, Unit and Influences', range: '251-300' },
    { n: 7, tr: 'Unite, Tekamul', en: 'Unit, Spiritual Evolution', range: '301-350' },
    { n: 8, tr: 'Tekamul', en: 'Spiritual Evolution', range: '351-400' },
    { n: 9, tr: 'Insan', en: 'The Human', range: '401-450' },
    { n: 10, tr: 'Insan, Beyin ve Suur', en: 'Human, Brain and Consciousness', range: '451-500' },
    { n: 11, tr: 'Beyin, Vicdan', en: 'Brain, Conscience', range: '501-550' },
    { n: 12, tr: 'Vicdan, Spatyom', en: 'Conscience, Spatyom', range: '551-600' },
    { n: 13, tr: 'Spatyom, Yari Suptil Alem', en: 'Spatyom, Semi-Subtle Realm', range: '601-650' },
    { n: 14, tr: 'Yari Suptil Alem, Vazife Plani', en: 'Semi-Subtle, Mission Plan', range: '651-700' },
    { n: 15, tr: 'Vazife Plani, Kader Mekanizmasi', en: 'Mission Plan, Fate', range: '701-750' },
    { n: 16, tr: 'Kader, Reenkarnasyon', en: 'Fate, Reincarnation', range: '751-800' },
    { n: 17, tr: 'Reenkarnasyon, Dinler', en: 'Reincarnation, Religions', range: '801-850' },
    { n: 18, tr: 'Dinler, Zaman', en: 'Religions, Time', range: '851-900' },
    { n: 19, tr: 'Ruya, Dunyanin Gelecegi', en: 'Dreams, Future of the World', range: '901-950' },
    { n: 20, tr: 'Gelecek, Felsefi Sorular', en: 'Future, Philosophy', range: '951-1000' }
  ]

  return (
    <>
      <Nav lang={lang} setLang={setLang} />
      <div className="page-wrap">
        <h1 className="page-title">{tr ? 'BOLUMLER VE KONULAR' : 'CHAPTERS AND TOPICS'}</h1>
        <p style={{ color: 'var(--text3)', fontFamily: 'system-ui', fontSize: 13, marginBottom: 28 }}>
          {tr ? '1000 Soruda Ilahi Nizam ve Kainat - 20 bolum' : '1000 Questions - 20 chapters'}
        </p>
        <div style={{ display: 'grid', gap: 10 }}>
          {chapters.map(c => (
            <Link key={c.n} href="/sorular" className="icerik-card">
              <div className="icerik-num">{c.n}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>{tr ? c.tr : c.en}</div>
                <div style={{ fontSize: 12, color: 'var(--text3)', fontFamily: 'system-ui' }}>
                  {tr ? 'Sorular ' + c.range : 'Questions ' + c.range}
                </div>
              </div>
              <span style={{ color: 'var(--gold)', fontSize: 16 }}>{'>'}</span>
            </Link>
          ))}
        </div>
        <div className="icerik-pdfbox">
          <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
            {tr ? 'Tum sorular tek bir PDF olarak da mevcuttur.' : 'All questions are also available as a single PDF.'}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/INK_KITAP_TAMAMI.pdf" download className="btn-outline">
              {tr ? 'Turkce PDF' : 'Turkish PDF'}
            </a>
            <a href="/INK_1000_Questions_English.pdf" download className="btn-gold">
              {tr ? 'Ingilizce PDF' : 'English PDF'}
            </a>
          </div>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  )
}
