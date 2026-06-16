import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav({ lang, setLang }) {
  const router = useRouter()
  const t = {
    tr: { s: '1000 Soru', k: 'Kitap', g: 'Sozluk', p: 'Pratik', a: 'Hakkinda' },
    en: { s: '1000 Questions', k: 'Book', g: 'Glossary', p: 'Practical', a: 'About' }
  }[lang]

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        <div className="nav-mark">INK</div>
        <div className="nav-title">
          <strong>ilahinizamvekainat</strong>.info
        </div>
      </Link>

      <div className="nav-links">
        <Link href="/sorular" className={router.pathname === '/sorular' ? 'nav-link active' : 'nav-link'}>{t.s}</Link>
        <Link href="/icerik" className={router.pathname === '/icerik' ? 'nav-link active' : 'nav-link'}>{t.k}</Link>
        <Link href="/sozluk" className={router.pathname === '/sozluk' ? 'nav-link active' : 'nav-link'}>{t.g}</Link>
        <Link href="/pratik" className={router.pathname === '/pratik' ? 'nav-link active' : 'nav-link'}>{t.p}</Link>
        <Link href="/hakkinda" className={router.pathname === '/hakkinda' ? 'nav-link active' : 'nav-link'}>{t.a}</Link>
      </div>

      <div className="lang-toggle">
        <button className={lang === 'tr' ? 'lang-btn active' : 'lang-btn'} onClick={() => setLang('tr')}>TR</button>
        <button className={lang === 'en' ? 'lang-btn active' : 'lang-btn'} onClick={() => setLang('en')}>EN</button>
      </div>
    </nav>
  )
}
