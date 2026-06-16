import { useState } from 'react'
import useLang from '../components/useLang'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import sozlukData from '../data/sozluk.json'

export default function Sozluk() {
  const [lang, setLang] = useLang()
  const [acik, setAcik] = useState(null)

  const getTerim = (k) => (lang === 'en' && k.terim_en) ? k.terim_en : k.terim
  const getTanim = (k) => (lang === 'en' && k.tanim_en) ? k.tanim_en : k.tanim

  const harfler = [...new Set(sozlukData.map(k => getTerim(k)[0].toUpperCase()))].sort()

  return (
    <>
      <Nav lang={lang} setLang={setLang} />
      <div className="page-wrap">
        <h1 className="page-title">
          {lang === 'tr' ? 'Kavramlar Sozlugu' : 'Glossary of Terms'}
        </h1>
        {harfler.map(h => {
          const kavramlar = sozlukData.filter(k => getTerim(k)[0].toUpperCase() === h)
          if (!kavramlar.length) return null
          return (
            <div key={h} className="harf-group">
              <div className="harf-label">{h}</div>
              {kavramlar.map((k, i) => {
                const id = h + i
                return (
                  <div key={id} className="kavram-item" onClick={() => setAcik(acik === id ? null : id)}>
                    <div className="kavram-header">
                      <span className="kavram-name">{getTerim(k)}</span>
                      <span style={{ color: 'var(--text3)', fontSize: 12 }}>{acik === id ? '-' : '+'}</span>
                    </div>
                    <div className={acik === id ? 'kavram-body open' : 'kavram-body'}>{getTanim(k)}</div>
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
