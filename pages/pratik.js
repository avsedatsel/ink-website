import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import pratikData from '../data/pratik.json'

export default function Pratik() {
  const [lang, setLang] = useState('tr')
  const [acik, setAcik] = useState(null)

  const gruplar = [...new Set(pratikData.map(p => p.grup))]

  return (
    <>
      <Nav lang={lang} setLang={setLang} />
      <div className="page-wrap">
        <h1 className="page-title">
          {lang==='tr' ? 'Pratik Uygulama' : 'Practical Guide'}
          <span style={{fontSize:14,color:'var(--text3)',fontWeight:400,marginLeft:12,fontFamily:'system-ui'}}>
            — {lang==='tr' ? 'Hayatın Zor Anlarında INK' : 'INK for Life\'s Hardest Moments'}
          </span>
        </h1>
        {gruplar.map(g => (
          <div key={g}>
            <div className="grup-baslik">{g}</div>
            {pratikData.filter(p => p.grup === g).map((p, i) => {
              const id = `${g}${i}`
              return (
                <div key={id} className="pratik-kart">
                  <div className="pratik-header" onClick={() => setAcik(acik===id?null:id)}>
                    <span className="pratik-baslik">{p.baslik}</span>
                    <span style={{color:'var(--text3)',fontSize:12}}>▾</span>
                  </div>
                  <div className={`pratik-body${acik===id?' open':''}`}>
                    <div className="pratik-acilis">"{p.acilis}"</div>
                    {p.govde && <div className="pratik-govde">{p.govde}</div>}
                    {p.adimlar && p.adimlar.map((a, j) => (
                      <div key={j} className="pratik-adim">{a}</div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        ))}
      </div>
      <Footer lang={lang} />
    </>
  )
}
