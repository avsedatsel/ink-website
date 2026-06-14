import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import sozlukData from '../data/sozluk.json'

export default function Sozluk() {
  const [lang, setLang] = useState('tr')
  const [acik, setAcik] = useState(null)

  const harfler = [...new Set(sozlukData.map(k => k.terim[0].toUpperCase()))].sort()

  return (
    <>
      <Nav lang={lang} setLang={setLang} />
      <div className="page-wrap">
        <h1 className="page-title">
          {lang==='tr' ? 'Kavramlar Sözlüğü' : 'Glossary of Terms'}
        </h1>
        {harfler.map(h => {
          const kavramlar = sozlukData.filter(k => k.terim[0].toUpperCase() === h)
          if (!kavramlar.length) return null
          return (
            <div key={h} className="harf-group">
              <div className="harf-label">{h}</div>
              {kavramlar.map((k, i) => {
                const id = `${h}${i}`
                return (
                  <div key={id} className="kavram-item" onClick={() => setAcik(acik===id?null:id)}>
                    <div className="kavram-header">
                      <span className="kavram-name">{k.terim}</span>
                      <span style={{color:'var(--text3)',fontSize:12}}>▾</span>
                    </div>
                    <div className={`kavram-body${acik===id?' open':''}`}>{k.tanim}</div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
      <Footer lang={lang} />
    </>
  )
}
