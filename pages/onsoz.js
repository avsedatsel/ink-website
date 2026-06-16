import { useState } from 'react'
import useLang from '../components/useLang'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import sectionsData from '../data/sections_data.json'

export default function Onsoz() {
  const [lang, setLang] = useLang()

  const paragraphs = sectionsData.preface.content_en.split('\n\n').filter(p => p.trim())

  return (
    <>
      <Nav lang={lang} setLang={setLang} />
      <div className="page-wrap">
        <div className="hakkinda-wrap">
          <h2 style={{marginBottom:6}}>
            {lang === 'tr' ? 'ÖNSÖZ' : 'PREFACE'}
          </h2>
          <p style={{color:'var(--text3)',fontFamily:'system-ui',fontSize:13,marginBottom:28}}>
            Sedat Sel — Gökçeada, 2026
          </p>

          {lang === 'en' ? (
            <div className="long-text">
              {paragraphs.map((p, i) => (
                <p key={i} style={{marginBottom:16, lineHeight:1.8, fontSize:15}}>{p}</p>
              ))}
            </div>
          ) : (
            <div style={{padding:'32px',background:'var(--bg2)',borderRadius:12,border:'1px solid var(--border2)',textAlign:'center'}}>
              <div style={{fontSize:32,marginBottom:12}}>📖</div>
              <p style={{color:'var(--text2)',fontSize:15,lineHeight:1.7}}>
                Önsöz Türkçesi orijinal kitapta mevcuttur.<br />
                Tam metni okumak için Türkçe PDF indirebilirsiniz.
              </p>
              <a href="/INK_KITAP_TAMAMI.pdf" download
                style={{display:'inline-block',marginTop:16,padding:'10px 24px',background:'var(--gold)',color:'#1a1a2e',borderRadius:8,textDecoration:'none',fontWeight:600,fontSize:14}}>
                📄 Türkçe PDF İndir
              </a>
            </div>
          )}
        </div>
      </div>
      <Footer lang={lang} />
    </>
  )
}
