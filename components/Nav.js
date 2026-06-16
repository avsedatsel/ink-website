import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav({ lang, setLang }) {
  const router = useRouter()
  const t = {
    tr: { s:'1000 Soru', g:'Sözlük', p:'Pratik', a:'Hakkında', k:'Kitap' },
    en: { s:'1000 Questions', g:'Glossary', p:'Practical', a:'About', k:'Book' }
  }[lang]

  return (
    <nav className="nav">
      <Link href="/"
