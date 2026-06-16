import { useState } from 'react'
import useLang from '../components/useLang'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import pratikData from '../data/pratik.json'

export default function Pratik() {
  const [lang, setLang] = useLang()
  const [acik, setAcik] = useState(null)

  const getBaslik = (p) => lang === 'en' && p.baslik_en ? p.baslik_en : p.baslik
  const getGovde  = (p) => lang === 'en' && p.govde_en  ? p.govde_en  : p.govde
  const getAdimlar= (p) => lang === 'en' && p.adimlar_en && p.adimlar_en.length ? p.adimlar_en : p.adimlar
  const getGrup   = (p) => lang === 'en' && p.grup_en   ? p.grup_en   : p.grup

  return (
    <>
      <Nav lang={lang} setLang={setLang} />
      <div className="page-wrap">
        <h1 className="page-title">
          {lang==='tr' ? 'Pratik Uygulama' : 'Practical Guide'}
          <span style={{fontSize:14,color:'var(--text3)',fontWeight:400,marginLeft:12,fontFamily:'system-ui'}}>
            {lang==='tr' ? '— Hayatin Zor Anlarinda INK' : "— INK for Life's Hardest Moments"}
          </span>
        </h1>

        {[...new Set(pratikData.map(p => getGrup(p)))].map(g => (
          <div key={g}>
            <div className="grup-baslik">{g}</div>
            {pratikData.filter(p => getGrup(p) === g).map((p, i) => {
              const id = `${g}${i}`
              const govde = getGovde(p)
              const adimlar = getAdimlar(p)
              return (
                <div key={id} className="pratik-kart">
                  <div className="pratik-header" onClick={() => setAcik(acik===id?null:id)}>
                    <span className="pratik-baslik">{getBaslik(p)}</span>
                    <span className={`bolum-arrow${acik===id?' open':''}`}>▼</span>
                  </div>
                  {acik === id && (
                    <div className="pratik-body">
                      {govde && (
                        <div style={{marginBottom:16,lineHeight:1.7,fontSize:14}}>
                          {govde.split('\n\n').map((para, pi) => (
                            <p key={pi} style={{marginBottom:10}}>{para}</p>
                          ))}
                        </div>
                      )}
                      {adimlar && adimlar.length > 0 && (
                        <div className="pratik-adimlar">
                          <div style={{fontSize:11,color:'var(--gold)',letterSpacing:2,marginBottom:10,fontFamily:'system-ui'}}>
                            {lang==='tr' ? 'PRATİK ADIMLAR' : 'PRACTICAL STEPS'}
                          </div>
                          {adimlar.map((adim, ai) => (
                            <div key={ai} style={{display:'flex',gap:10,marginBottom:8,fontSize:13,lineHeight:1.6}}>
                              <span style={{color:'var(--gold)',fontWeight:700,minWidth:20}}>{ai+1}.</span>
                              <span>{adim.replace(/^\d+\.\s*/, '')}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
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
