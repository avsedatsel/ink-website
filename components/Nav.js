import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav({ lang, setLang }) {
  const router = useRouter()
  const t = {
    tr: { s:'1000 Soru', g:'Sözlük', p:'Pratik', a:'Hakkında' },
    en: { s:'1000 Questions', g:'Glossary', p:'Practical', a:'About' }
  }[lang]

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        <div className="nav-mark">INK</div>
        <div className="nav-title">
          <strong>ilahinizamvekainat</strong>.tr
        </div>
      </Link>

      <div className="nav-links">
        {[
          ['/sorular', t.s],
          ['/sozluk', t.g],
          ['/pratik', t.p],
          ['/hakkinda', t.a],
        ].map(([href, label]) => (
          <Link key={href} href={href}
            className={`nav-link${router.pathname === href ? ' active' : ''}`}>
            {label}
          </Link>
        ))}
      </div>

      <div className="lang-toggle">
        <button className={`lang-btn${lang==='tr'?' active':''}`} onClick={() => setLang('tr')}>TR</button>
        <button className={`lang-btn${lang==='en'?' active':''}`} onClick={() => setLang('en')}>EN</button>
      </div>
    </nav>
  )
}
