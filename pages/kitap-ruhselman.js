import { useState } from 'react'
import useLang from '../components/useLang'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import sectionsData from '../data/sections_data.json'

export default function KitapRuhselman() {
  const [lang, setLang] = useLang()
  const [tab, setTab] = useState('intro')

  const br = sectionsData.bedri_ruhselman
  const introParagraphs = br.intro_en.split('\n\n').filter(p => p.trim())
  const bioParagraphs = br.bio_en.split('\n\n').filter(p => p.trim())

  return (
    <>
      <Nav lang={lang} setLang={setLang} />
      <div className="page-wrap">
        <div className="hakkinda-wrap">
          <h2 style={{marginBottom:8}}>
            {lang === 'tr' ? 'KİTAP VE BEDRİ RUHSELMAN' : 'THE BOOK AND BEDRI RUHSELMAN'}
          </h2>
          <p style={{color:'var(--text3)',fontFamily:'system-ui',fontSize:13,marginBottom:24,fontStyle:'italic'}}>
            {lang === 'tr'
              ? 'Sarsılmaya hazır olun… Her şey, bildiğinizi sandığınızdan çok farklı…'
              : 'Be prepared to be shaken... Everything is very different from what you think you know...'}
          </p>

          <div style={{display:'flex',gap:8,marginBottom:28,flexWrap:'wrap'}}>
            {[
              {id:'intro', tr:'Kitabın Hikâyesi', en:"The Book's Story"},
              {id:'bio', tr:"Bedri Ruhselman'ın Hayatı", en:'Life of Bedri Ruhselman'},
            ].map(t => (
              <button key={t.id} onClick={() => setTab(t.id)}
                style={{padding:'8px 20px',borderRadius:8,border:'1px solid var(--border2)',
                  background: tab===t.id ? 'var(--gold)' : 'var(--bg2)',
                  color: tab===t.id ? '#1a1a2e' : 'var(--text1)',
                  fontWeight: tab===t.id ? 700 : 400,
                  cursor:'pointer', fontSize:13, transition:'all .2s'}}>
                {lang==='tr' ? t.tr : t.en}
              </button>
            ))}
          </div>

          {lang === 'en' ? (
            <div className="long-text">
              {tab === 'intro' && introParagraphs.map((p, i) => (
                <p key={i} style={{marginBottom:16, lineHeight:1.8, fontSize:15}}>{p}</p>
              ))}
              {tab === 'bio' && (
                <>
                  <h3 style={{color:'var(--gold)',marginBottom:20,fontSize:18}}>THE LIFE OF BEDRI RUHSELMAN</h3>
                  {bioParagraphs.map((p, i) => (
                    <p key={i} style={{marginBottom:16, lineHeight:1.8, fontSize:15}}>{p}</p>
                  ))}
                </>
              )}
            </div>
          ) : (
            <div style={{padding:'32px',background:'var(--bg2)',borderRadius:12,border:'1px solid var(--border2)',textAlign:'center'}}>
              <div style={{fontSize:32,marginBottom:12}}>📖</div>
              <p style={{color:'var(--text2)',fontSize:15,lineHeight:1.7}}>
                Bu bölümü İngilizce okumak için dil seçicisinden EN seçiniz.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer lang={lang} />
    </>
  )
}
