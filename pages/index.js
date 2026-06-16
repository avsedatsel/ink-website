import { useState } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import InstallButton from '../components/InstallButton'

export default function Home() {
  const [lang, setLang] = useState('tr')
  const tr = lang === 'tr'

  return (
    <>
      <Nav lang={lang} setLang={setLang} />
      <div className="hero">
        <div className="hero-eyebrow">Sedat Sel + Claude / 2026</div>
        <h1>
          <span style={{color:'var(--gold)'}}>
            {tr ? '1000 Soruda' : '1000 Questions About'}
          </span>
          <br />
          {tr ? 'Ilahi Nizam ve Kainat' : 'The Divine Order and the Universe'}
        </h1>
        <p className="hero-sub">
          {tr
            ? 'Evrenin yapisi, ruhun yolculugu - INK sistemini herkesin anlayabilecegi bir dilde.'
            : '1000 questions about the universe, the soul, and the meaning of existence.'}
        </p>
        <div className="hero-btns">
          <Link href="/sorular" className="btn-gold">
            {tr ? '1000 Soruyu Oku' : 'Read 1000 Questions'}
          </Link>
          <a href="/INK_KITAP_TAMAMI.pdf" download className="btn-outline">
            {tr ? 'Turkce PDF' : 'Turkish PDF'}
          </a>
          <a href="/INK_1000_Questions_English.pdf" download className="btn-outline">
            {tr ? 'Ingilizce PDF' : 'English PDF'}
          </a>
          <InstallButton lang={lang} />
        </div>
        <div className="hero-stats">
          <div><span className="stat-num">1000</span><span className="stat-lbl">{tr ? 'Soru' : 'Q&A'}</span></div>
          <div><span className="stat-num">20</span><span className="stat-lbl">{tr ? 'Bolum' : 'Sections'}</span></div>
          <div><span className="stat-num">57</span><span className="stat-lbl">{tr ? 'Kavram' : 'Concepts'}</span></div>
          <div><span className="stat-num">319</span><span className="stat-lbl">{tr ? 'Sayfa' : 'Pages'}</span></div>
        </div>
      </div>

      <div style={{padding:'0 24px 8px'}}>
        <div style={{fontSize:11,letterSpacing:3,color:'var(--text3)',fontFamily:'system-ui',marginBottom:12}}>
          {tr ? 'KITAP BOLUMLERI' : 'BOOK SECTIONS'}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',gap:10}}>
          {[
            {href:'/onsoz',           tr:'ONSOZ',                    en:'PREFACE'},
            {href:'/kitap-ruhselman', tr:'KITAP VE BEDRI RUHSELMAN', en:'BOOK & BEDRI RUHSELMAN'},
            {href:'/icerik',          tr:'BOLUMLER VE KONULAR',       en:'CHAPTERS & TOPICS'},
            {href:'/kitap-kaynak',    tr:'KITAP VE KAYNAK',           en:'BOOK & ITS SOURCE'},
            {href:'/pratik',          tr:'PRATIK HAYAT',              en:'PRACTICAL LIFE'},
            {href:'/sozluk',          tr:'KAVRAMLAR SOZLUGU',         en:'GLOSSARY'},
          ].map(s => (
            <Link key={s.href} href={s.href}
              style={{display:'flex',flexDirection:'column',alignItems:'center',gap:8,
                padding:'16px 12px',background:'var(--bg2)',borderRadius:12,
                border:'1px solid var(--border2)',textDecoration:'none',
                color:'var(--text1)',textAlign:'center'}}>
              <span style={{fontSize:11,fontWeight:700,letterSpacing:1,lineHeight:1.3,
                color:'var(--text2)',fontFamily:'system-ui'}}>
                {tr ? s.tr : s.en}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="features">
        <Link href="/sorular" className="feat-card" style={{display:'block'}}>
          <div className="feat-icon">*</div>
          <div className="feat-title">{tr ? '1000 Soru ve Cevap' : '1000 Questions & Answers'}</div>
          <div className="feat-desc">
            {tr ? 'INK sistemini kesfed.' : 'Explore the complete INK system.'}
          </div>
          <span className="feat-link">20 {tr ? 'BOLUM' : 'SECTIONS'}</span>
        </Link>
        <Link href="/sozluk" className="feat-card" style={{display:'block'}}>
          <div className="feat-icon">o</div>
          <div className="feat-title">{tr ? 'Kavramlar Sozlugu' : 'Glossary of Terms'}</div>
          <div className="feat-desc">
            {tr ? 'INKa ozgu 57 kavram.' : '57 concepts unique to INK.'}
          </div>
          <span className="feat-link">57 {tr ? 'KAVRAM' : 'CONCEPTS'}</span>
        </Link>
        <Link href="/pratik" className="feat-card" style={{display:'block'}}>
          <div className="feat-icon">+</div>
          <div className="feat-title">{tr ? 'Pratik Uygulama' : 'Practical Guide'}</div>
          <div className="feat-desc">
            {tr ? 'Hayatin zor anlari.' : 'INK guidance for life\'s hardest moments.'}
          </div>
          <span className="feat-link">24 {tr ? 'KONU' : 'TOPICS'}</span>
        </Link>
      </div>

      <div style={{padding:'24px 32px'}}>
        <div className="banner-319">
          <span className="num">319</span>
          <div className="lbl">
            {tr
              ? 'INK de bizim kitabimiz da tam 319 sayfadir. 67 yil arayla, bagimsiz olarak.'
              : 'INK and our book are both exactly 319 pages. Written 67 years apart. Coincidence?'}
          </div>
        </div>
      </div>

      <Footer lang={lang} />
    </>
  )
}
