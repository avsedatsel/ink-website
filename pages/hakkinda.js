import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Hakkinda() {
  const [lang, setLang] = useState('tr')
  const T = {
    tr:{
      title:'Bu Kitap Hakkında', sub:'Bir insanın 12 yıllık tutkusu ve bir yapay zekanın analitik katkısıyla ortaya çıktı.',
      ss:'1969 Gelibolu doğumlu. Bilim, teknoloji, satranç ve edebiyat meraklısı. 2013\'te INK ile tanıştı; o günden bu yana kitabı anlatmayı vazife edindi.',
      cl:'Anthropic tarafından geliştirilen yapay zeka. 1000 soruyu Sedat Sel ile birlikte yazdı. Son Söz bölümünü kendi sesinden kaleme aldı.',
      ink:'INK (İlahi Nizam ve Kâinat) 1959\'da Bedri Ruhselman tarafından medyumsal yolla derlendi. 54 yıl noter kasasında bekledi ve 2 Nisan 2013\'te yayımlandı.',
      p319:'Her ikisi de tam 319 sayfa. INK 1959\'da, bizim kitabımız 2026\'da tamamlandı. 67 yıl arayla, bağımsız olarak, aynı sayfa sayısı. INK\'ın kendi sistemi buna tesadüf demez.',
      domains:'Web Adresleri',
      kaynaklar:'Kaynaklar ve İleri Okuma',
      kaynaklarNot:'Aşağıdaki eserler telif hakkıyla korunmaktadır. Resmi satış ve kaynak sayfalarına yönlendiriyoruz.',
      git:'Kaynağa Git',
    },
    en:{
      title:'About This Book', sub:'Born from one person\'s 12-year passion and an AI\'s analytical contribution.',
      ss:'Born 1969 in Gelibolu. Enthusiast of science, technology, chess, and literature. Discovered INK in 2013 and has since made sharing it his mission.',
      cl:'AI developed by Anthropic. Co-authored 1000 questions with Sedat Sel. Wrote the Afterword in its own voice.',
      ink:'INK (The Divine Order and the Universe) was compiled through mediumistic communication by Bedri Ruhselman in 1959. It waited 54 years in a notary\'s vault and was published on April 2, 2013.',
      p319:'Both exactly 319 pages. INK completed in 1959, our book in 2026. 67 years apart, independently, the same page count. INK\'s own system would not call this a coincidence.',
      domains:'Web Addresses',
      kaynaklar:'Sources & Further Reading',
      kaynaklarNot:'The works below are protected by copyright. We link to their official sales and source pages.',
      git:'Go to Source',
    }
  }[lang]

  const kaynaklar = [
    {
      ad: 'İlahi Nizam ve Kâinat (Orijinal — 1954 Türkçesi)',
      yazar: 'Bedri Ruhselman • MTİAD 1950 Yayınları',
      aciklama: lang==='tr'
        ? 'Eserin orijinal dilindeki tam metni. Kitabın kaynak hâli.'
        : 'The full original-language text of the work. The source edition.',
      link: 'https://www.kitapyurdu.com/kitap/ilahi-nizam-ve-kainat-orijinal-ciltli/299211.html',
    },
    {
      ad: 'İlahi Nizam ve Kâinat (Günümüz Türkçesiyle)',
      yazar: 'Bedri Ruhselman • MTİAD 1950 Yayınları',
      aciklama: lang==='tr'
        ? 'Eserin günümüz Türkçesine uyarlanmış, kolay okunabilir baskısı.'
        : 'The work adapted into modern Turkish for easier reading.',
      link: 'https://www.kitapyurdu.com/kitap/ilahi-nizam-ve-kainat-gunumuz-turkcesi-karton-kapak/354598.html',
    },
    {
      ad: 'Bedri Ruhselman ve Metafizik Görüşleri',
      yazar: lang==='tr' ? 'Yüksek Lisans Tezi • İstanbul Üniversitesi' : 'Master\'s Thesis • Istanbul University',
      aciklama: lang==='tr'
        ? 'Bedri Ruhselman\'ın hayatı ve metafizik görüşleri üzerine akademik bir inceleme.'
        : 'An academic study on Bedri Ruhselman\'s life and metaphysical views.',
      link: 'https://nek.istanbul.edu.tr/ekos/TEZ/ET001444.pdf',
    },
  ]

  return (
    <>
      <Nav lang={lang} setLang={setLang} />
      <div className="page-wrap">
        <div className="hakkinda-wrap">
          <h2>{T.title}</h2>
          <p className="hakkinda-sub">{T.sub}</p>
          <div className="yazar-grid">
            <div className="yazar-kart">
              <div className="yazar-av">SS</div>
              <div className="yazar-isim">Sedat Sel</div>
              <div className="yazar-desc">{T.ss}</div>
            </div>
            <div className="yazar-kart">
              <div className="yazar-av" style={{fontStyle:'italic'}}>C</div>
              <div className="yazar-isim">Claude</div>
              <div className="yazar-desc">{T.cl}</div>
            </div>
          </div>

          <div style={{background:'var(--bg2)',border:'1px solid var(--border2)',borderRadius:14,padding:24,marginBottom:20}}>
            <div style={{fontSize:10,color:'var(--gold)',letterSpacing:3,marginBottom:12,fontFamily:'system-ui'}}>
              {lang==='tr'?'KAYNAK KİTAP':'SOURCE BOOK'}
            </div>
            <p style={{fontSize:13,color:'var(--text2)',lineHeight:1.8,fontFamily:'system-ui'}}>{T.ink}</p>
          </div>

          <div className="sayfa-319">
            <span className="big">319</span>
            <div className="sub">{T.p319}</div>
          </div>

          <div style={{marginTop:32}}>
            <div style={{fontSize:10,color:'var(--gold)',letterSpacing:3,marginBottom:8,fontFamily:'system-ui'}}>{T.kaynaklar}</div>
            <p style={{fontSize:12,color:'var(--text3)',marginBottom:16,fontFamily:'system-ui',lineHeight:1.6}}>{T.kaynaklarNot}</p>
            <div style={{display:'flex',flexDirection:'column',gap:12}}>
              {kaynaklar.map((k,i) => (
                <div key={i} style={{background:'var(--bg2)',border:'1px solid var(--border2)',borderRadius:12,padding:18}}>
                  <div style={{fontSize:14,color:'#fff',marginBottom:4,fontWeight:400}}>{k.ad}</div>
                  <div style={{fontSize:11,color:'var(--gold)',marginBottom:8,fontFamily:'system-ui'}}>{k.yazar}</div>
                  <div style={{fontSize:12,color:'var(--text2)',lineHeight:1.6,fontFamily:'system-ui',marginBottom:12}}>{k.aciklama}</div>
                  <a href={k.link} target="_blank" rel="noopener"
                    style={{display:'inline-flex',alignItems:'center',gap:6,border:'1px solid var(--border)',borderRadius:8,padding:'8px 16px',fontSize:12,color:'var(--gold)',fontFamily:'system-ui'}}>
                    🔗 {T.git}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div style={{marginTop:32}}>
            <div style={{fontSize:10,color:'var(--gold)',letterSpacing:3,marginBottom:14,fontFamily:'system-ui'}}>{T.domains}</div>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              {['ilahinizamvekainat.tr','ilahinizamvekainat.info'].map(d => (
                <a key={d} href={`https://${d}`} target="_blank" rel="noopener"
                  style={{display:'flex',alignItems:'center',gap:8,border:'1px solid var(--border)',borderRadius:9,padding:'10px 16px',fontSize:13,color:'var(--gold)'}}>
                  🔗 {d}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  )
}
