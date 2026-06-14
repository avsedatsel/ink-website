import { useState } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import InstallButton from '../components/InstallButton'

export default function Home() {
  const [lang, setLang] = useState('tr')
  const T = {
    tr: {
      eyebrow: 'Sedat Sel + Claude  •  2026',
      h1a: '1000 Soruda', h1b: 'İlahi Nizam ve Kâinat',
      sub: 'Evrenin yapısı, ruhun yolculuğu ve varoluşun anlamı — INK\'ın tüm sistemini herkesin anlayabileceği bir dilde.',
      btn1: '1000 Soruyu Oku', btn2: 'PDF İndir',
      s1:'Soru & Cevap', s2:'Bölüm', s3:'Kavram', s4:'Sayfa',
      f1t:'1000 Soru & Cevap', f1d:'Asli Prensip\'ten Reenkarnasyon\'a — INK\'ın tüm sistemini keşfedin.',
      f2t:'Kavramlar Sözlüğü', f2d:'INK\'a özgü 57 kavramın net açıklamaları.',
      f3t:'Pratik Uygulama', f3d:'Zor hayat durumlarında INK perspektifinden rehberlik.',
      p319: 'INK de bizim kitabımız da tam 319 sayfadır. 67 yıl arayla, bağımsız olarak. Tesadüf mü?',
    },
    en: {
      eyebrow: 'Sedat Sel + Claude  •  2026',
      h1a: '1000 Questions About', h1b: 'The Divine Order and the Universe',
      sub: '1000 questions and answers about the universe, the soul, and the meaning of existence — in plain language.',
      btn1: 'Read 1000 Questions', btn2: 'Download PDF',
      s1:'Q & A', s2:'Sections', s3:'Concepts', s4:'Pages',
      f1t:'1000 Questions & Answers', f1d:'From the Primordial Principle to Reincarnation — explore the complete INK system.',
      f2t:'Glossary of Terms', f2d:'Clear definitions of 57 INK concepts.',
      f3t:'Practical Guide', f3d:'Concrete guidance for life\'s most difficult moments.',
      p319: 'INK and our book are both exactly 319 pages. Written 67 years apart. Coincidence?',
    }
  }[lang]

  return (
    <>
      <Nav lang={lang} setLang={setLang} />
      <div className="hero">
        <div className="hero-eyebrow">{T.eyebrow}</div>
        <h1>
          <span style={{color:'var(--gold)'}}>{T.h1a}</span><br />
          {T.h1b}
        </h1>
        <p className="hero-sub">{T.sub}</p>
        <div className="hero-btns">
          <Link href="/sorular" className="btn-gold">{T.btn1}</Link>
          <a href="/INK_KITAP_TAMAMI.pdf" download className="btn-outline">{T.btn2}</a>
          <InstallButton lang={lang} />
        </div>
        <div className="hero-stats">
          <div><span className="stat-num">1000</span><span className="stat-lbl">{T.s1}</span></div>
          <div><span className="stat-num">22</span><span className="stat-lbl">{T.s2}</span></div>
          <div><span className="stat-num">57</span><span className="stat-lbl">{T.s3}</span></div>
          <div><span className="stat-num">319</span><span className="stat-lbl">{T.s4}</span></div>
        </div>
      </div>
      <div className="features">
        <Link href="/sorular" className="feat-card" style={{display:'block'}}>
          <div className="feat-icon">✦</div>
          <div className="feat-title">{T.f1t}</div>
          <div className="feat-desc">{T.f1d}</div>
          <span className="feat-link">22 BÖLÜM →</span>
        </Link>
        <Link href="/sozluk" className="feat-card" style={{display:'block'}}>
          <div className="feat-icon">◈</div>
          <div className="feat-title">{T.f2t}</div>
          <div className="feat-desc">{T.f2d}</div>
          <span className="feat-link">57 KAVRAM →</span>
        </Link>
        <Link href="/pratik" className="feat-card" style={{display:'block'}}>
          <div className="feat-icon">◉</div>
          <div className="feat-title">{T.f3t}</div>
          <div className="feat-desc">{T.f3d}</div>
          <span className="feat-link">24 KONU →</span>
        </Link>
      </div>
      <div style={{padding:'24px 32px'}}>
        <div className="banner-319">
          <span className="num">319</span>
          <div className="lbl">{T.p319}</div>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  )
}
