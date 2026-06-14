import { useState, useMemo } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import sorularData from '../data/sorular.json'

export default function Sorular() {
  const [lang, setLang] = useState('tr')
  const [arama, setArama] = useState('')
  const [acikBolum, setAcikBolum] = useState(null)
  const [acikSoru, setAcikSoru] = useState(null)

  // Bölümlere grupla
  const bolumler = useMemo(() => {
    const grp = {}
    sorularData.forEach(s => {
      if (!grp[s.kat]) grp[s.kat] = []
      grp[s.kat].push(s)
    })
    return Object.entries(grp)
  }, [])

  // Arama filtresi
  const filtreliSorular = useMemo(() => {
    if (!arama.trim()) return null
    const q = arama.toLowerCase()
    return sorularData.filter(s =>
      s.soru.toLowerCase().includes(q) || s.cevap.toLowerCase().includes(q)
    )
  }, [arama])

  const toggleBolum = (idx) => setAcikBolum(acikBolum === idx ? null : idx)
  const toggleSoru = (no) => setAcikSoru(acikSoru === no ? null : no)

  return (
    <>
      <Nav lang={lang} setLang={setLang} />
      <div className="page-wrap">
        <h1 className="page-title">
          {lang === 'tr' ? '1000 Soru & Cevap' : '1000 Questions & Answers'}
        </h1>

        <div className="search-wrap">
          <span className="search-icon">🔍</span>
          <input
            className="search-input"
            placeholder={lang === 'tr' ? 'Soru veya kavram arayın...' : 'Search questions or concepts...'}
            value={arama}
            onChange={e => setArama(e.target.value)}
          />
        </div>

        {/* ARAMA SONUÇLARI */}
        {filtreliSorular && (
          <div>
            <p style={{fontSize:12,color:'var(--text3)',marginBottom:16,fontFamily:'system-ui'}}>
              {filtreliSorular.length} {lang==='tr'?'sonuç bulundu':'results found'}
            </p>
            {filtreliSorular.map(s => (
              <div key={s.no} className="bolum-group" style={{marginBottom:6}}>
                <div className="soru-item">
                  <div className="soru-q" onClick={() => toggleSoru(s.no)}>
                    <span className="soru-no">{s.no}.</span>
                    <span className="soru-text">{s.soru}</span>
                    <span className={`soru-chevron${acikSoru===s.no?' open':''}`}>▾</span>
                  </div>
                  <div className={`soru-cevap${acikSoru===s.no?' open':''}`}>{s.cevap}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BÖLÜM LİSTESİ */}
        {!filtreliSorular && bolumler.map(([kat, sorular], idx) => (
          <div key={kat} className="bolum-group">
            <div className="bolum-header" onClick={() => toggleBolum(idx)}>
              <span className="bolum-name">{kat}</span>
              <span style={{display:'flex',gap:10,alignItems:'center'}}>
                <span className="bolum-count">{sorular.length} soru</span>
                <span className={`bolum-arrow${acikBolum===idx?' open':''}`}>▼</span>
              </span>
            </div>
            <div className={`bolum-content${acikBolum===idx?' open':''}`}>
              {sorular.map(s => (
                <div key={s.no} className="soru-item">
                  <div className="soru-q" onClick={() => toggleSoru(s.no)}>
                    <span className="soru-no">{s.no}.</span>
                    <span className="soru-text">{s.soru}</span>
                    <span className={`soru-chevron${acikSoru===s.no?' open':''}`}>▾</span>
                  </div>
                  <div className={`soru-cevap${acikSoru===s.no?' open':''}`}>{s.cevap}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer lang={lang} />
    </>
  )
}
