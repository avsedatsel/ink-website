import { useState } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import InstallButton from '../components/InstallButton'

export default function Home() {
  const [lang, setLang] = useState('tr')

  const T = lang === 'tr' ? {
    eyebrow: 'Sedat Sel + Claude  \u2022  2026',
    h1a: '1000 Soruda', h1b: '\u0130lahi Nizam ve K\u00e2inat',
    sub: 'Evrenin yap\u0131s\u0131, ruhun yolculu\u011fu ve varolu\u015fun anlam\u0131 \u2014 INK\u2019\u0131n t\u00fcm sistemini herkesin anlayabilece\u011fi bir dilde.',
    btn1: '1000 Soruyu Oku',
    pdfTr: '1000 Soruda INK \u2014 T\u00fcrk\u00e7e PDF',
    pdfEn: '1000 Questions on Divine Order \u2014 English PDF',
    s1:'Soru & Cevap', s2:'B\u00f6l\u00fcm', s3:'Kavram', s4:'Sayfa',
    f1t:'1000 Soru & Cevap', f1d:'Asli Prensipten Reenkarnasyona, Kaderden Spatyoma \u2014 INK sistemini soru-cevap formatinda kesfed\u0131n.',
    f2t:'Kavramlar S\u00f6zl\u00fc\u011f\u00fc', f2d:'INKa \u00f6zg\u00fc 57 kavram\u0131n net, anlas\u0131l\u0131r a\u00e7\u0131klamalar\u0131.',
    f3t:'Pratik Uygulama', f3d:'Yas, hastal\u0131k, anlam kayb\u0131, \u00f6l\u00fcm korkusu \u2014 zor hayat durumlar\u0131nda INK perspektifinden somut rehberlik.',
    p319: 'INK de bizim kitab\u0131m\u0131z da tam 319 sayfad\u0131r. 67 y\u0131l arayla, ba\u011f\u0131ms\u0131z olarak. Tesad\u00fcf m\u00fc?',
    kitapBasligi: 'K\u0130TAP B\u00d6L\u00dcMLER',
  } : {
    eyebrow: 'Sedat Sel + Claude  \u2022  2026',
    h1a: '1000 Questions About', h1b: 'The Divine Order and the Universe',
    sub: '1000 questions and answers about the structure of the universe, the journey of the soul, and the meaning of existence.',
    btn1: 'Read 1000 Questions',
    pdfTr: '1000 Questions INK \u2014 Turkish PDF',
    pdfEn: '1000 Questions on Divine Order \u2014 English PDF',
    s1:'Q & A', s2:'Sections', s3:'Concepts', s4:'Pages',
    f1t:'1000 Questions & Answers', f1d:'From the Primordial Principle to Reincarnation \u2014 explore the complete INK system in Q&A format.',
    f2t:'Glossary of Terms', f2d:'Clear, accessible definitions of 57 concepts unique to the INK system.',
    f3t:'Practical Guide', f3d:'Grief, illness, loss of meaning, fear of death \u2014 concrete INK-based guidance.',
    p319: 'INK and our book are both exactly 319 pages. Written 67 years apart, independently. Coincidence?',
    kitapBasligi: 'BOOK SECTIONS',
  }

  const bookSections = [
    { href: '/onsoz',           icon: '\u270d\ufe0f', tr: '\u00d6NS\u00d6Z',                     en: 'PREFACE' },
    { href: '/kitap-ruhselman', icon: '\ud83d\udcda', tr: 'K\u0130TAP VE BEDR\u0130 RUHSELMAN',  en: 'THE BOOK & BEDRI RUHSELMAN' },
    { href: '/icerik',          icon: '\ud83d\udccb', tr: 'B\u00d6L\u00dcMLER VE KONULAR',        en: 'CHAPTERS & TOPICS' },
    { href: '/kitap-kaynak',    icon: '\u2753',  tr: 'K\u0130TAP VE KAYNAK',            en: 'THE BOOK & ITS SOURCE' },
    { href: '/pratik',          icon: '\ud83d\udca1', tr: 'PRAT\u0130K HAYAT',               en: 'PRACTICAL LIFE' },
    { href: '/sozluk',          icon: '\u25c8',  tr: 'KAVRAMLAR S\u00d6ZL\u00dc\u011e\u00dc',          en: 'GLOSSARY OF TERMS' },
  ]

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
          <a href="/INK_KITAP_TAMAMI.pdf" download className="btn-outline">{T.pdfTr}</a>
          <a href="/INK_1000_Questions_English.pdf" download className="btn-outline">{T.pdfEn}</a>
          <InstallButton lang={lang} />
        </div>
        <div className="hero-stats">
          <div><span className="stat-num">1000</span><span className="stat-lbl">{T.s1}</span></div>
          <div><span className="stat-num">20</span><span className="stat-lbl">{T.s2}</span></div>
          <div><span className="stat-num">57</span><span className="stat-lbl">{T.s3}</span></div>
          <div><span className="stat-num">319</span><span className="stat-lbl">{T.s4}</span></div>
        </div>
      </div>

      <div style={{padding:'0 24px 8px'}}>
