import { useState } from 'react'
import useLang from '../components/useLang'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import sectionsData from '../data/sections_data.json'

export default function KitapKaynak() {
  const [lang, setLang] = useLang()
  const [acik, setAcik] = useState(null)

  const items = sectionsData.book_and_source.items

  return (
    <>
      <Nav lang={lang} setLang={setLang} />
      <div className="page-wrap">
        <h1 className="page-title">
          {lang === 'tr' ? 'KİTAP VE KAYNAK' : 'THE BOOK AND ITS SOURCE'}
        </h1>
        <p style={{color:'var(--text3)',fontFamily:'system-ui',fontSize:13,marginBottom:28}}>
          {lang === 'tr' ? 'INK hakkında temel sorular ve cevaplar' : '20 essential questions about INK and its origins'}
        </p>

        {items.map(item => (
          <div key={item.no} className="bolum-group" style={{marginBottom:6}}>
            <div className="soru-item">
              <div className="soru-q" onClick={() => setAcik(acik===item.no ? null : item.no)}>
                <span className="soru-no">{item.no}.</span>
                <span className="soru-text">
                  {lang === 'tr' ? item.soru_tr : item.soru_en}
                </span>
                <span className={`soru-chevron${acik===item.no?' open':''}`}>▾</span>
              </div>
              <div className={`soru-cevap${acik===item.no?' open':''}`}>
                {lang === 'tr' ? (item.cevap_tr || item.cevap_en) : item.cevap_en}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer lang={lang} />
    </>
  )
}
