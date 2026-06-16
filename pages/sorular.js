import { useState, useMemo } from 'react'
import useLang from '../components/useLang'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import sorularData from '../data/sorular.json'

export default function Sorular() {
  const [lang, setLang] = useLang()
  const [arama, setArama] = useState('')
  const [acikBolum, setAcikBolum] = useState(null)
  const [acikSoru, setAcikSoru] = useState(null)

  const katEN = {
    'KİTAP VE KAYNAK': 'BOOK AND SOURCE',
    'MADDE': 'MATTER',
    'DÜALİTE VE HAREKET': 'DUALITY AND MOTION',
    'KÂİNATLAR': 'UNIVERSES',
    'RUH': 'SPIRIT',
    'ASLİ PRENSİP': 'PRIMORDIAL PRINCIPLE',
    'VARLIK': 'BEING',
    'ÜNİTE VE TESİRLER': 'UNIT AND INFLUENCES',
    'TEKÂMÜL': 'EVOLUTION',
    'İNSAN': 'THE HUMAN',
    'BEYİN VE ŞUUR': 'BRAIN AND CONSCIOUSNESS',
    'VİCDAN': 'CONSCIENCE',
    'SPATYOM': 'SPATYOM',
    'YARI SÜPTİL ÂLEM': 'SEMI-SUBTLE REALM',
    'VAZİFE PLÂNI': 'PLANE OF DUTY',
    'KADER MEKANİZMASI': 'FATE MECHANISM',
    'REENKARNASYON': 'REINCARNATION',
    'DİNLER': 'RELIGIONS',
    'ZAMAN': 'TIME',
    'RÜYA VE MEDYUMLUK': 'DREAMS AND MEDIUMSHIP',
    'DÜNYANIN GELECEĞİ': 'FUTURE OF THE WORLD',
    'FELSEFİ SORULAR': 'PHILOSOPHICAL QUESTIONS'
  }
  const getKat = (k) => (lang === 'en' && katEN[k]) ? katEN[k] : k

  const getSoru = (s) => (lang === 'en' && s.soru_en) ? s.soru_en : s.soru
  const getCevap = (s) => (lang === 'en' && s.cevap_en) ? s.cevap_en : s.cevap

  const bolumler = useMemo(() => {
    const grp = {}
    sorularData.forEach(s => {
      if (!grp[s.kat]) grp[s.kat] = []
      grp[s.kat].push(s)
    })
    return Object.entries(grp)
  }, [])

  const filtreliSorular = useMemo(() => {
    if (!arama.trim()) return null
    const q = arama.toLowerCase()
    return sorularData.filter(s => {
      const sr = ((s.soru || '') + (s.cevap || '') + (s.soru_en || '') + (s.cevap_en || '')).toLowerCase()
      return sr.includes(q)
    })
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
                    <span className="soru-text">{getSoru(s)}</span>
                    <span className={`soru-chevron${acikSoru===s.no?' open':''}`}>▾</span>
                  </div>
                  <div className={`soru-cevap${acikSoru===s.no?' open':''}`}>{getCevap(s)}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!filtreliSorular && bolumler.map(([kat, sorular], idx) => (
          <div key={kat} className="bolum-group">
            <div className="bolum-header" onClick={() => toggleBolum(idx)}>
              <span className="bolum-name">{getKat(kat)}</span>
              <span style={{display:'flex',gap:10,alignItems:'center'}}>
                <span className="bolum-count">{sorular.length} {lang==='tr'?'soru':'questions'}</span>
                <span className={`bolum-arrow${acikBolum===idx?' open':''}`}>▼</span>
              </span>
            </div>
            <div className={`bolum-content${acikBolum===idx?' open':''}`}>
              {sorular.map(s => (
                <div key={s.no} className="soru-item">
                  <div className="soru-q" onClick={() => toggleSoru(s.no)}>
                    <span className="soru-no">{s.no}.</span>
                    <span className="soru-text">{getSoru(s)}</span>
                    <span className={`soru-chevron${acikSoru===s.no?' open':''}`}>▾</span>
                  </div>
                  <div className={`soru-cevap${acikSoru===s.no?' open':''}`}>{getCevap(s)}</div>
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
