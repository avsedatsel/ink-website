import { useState, useEffect } from 'react'

export default function useLang() {
  const [lang, setLangState] = useState('tr')

  useEffect(() => {
    let saved = null
    try {
      saved = localStorage.getItem('ink-lang')
    } catch (e) {}
    if (saved === 'en') {
      setLangState('en')
    }
  }, [])

  const setLang = (newLang) => {
    setLangState(newLang)
    try {
      localStorage.setItem('ink-lang', newLang)
    } catch (e) {}
    // Diğer açık sekmelere/sayfalara haber ver
    try {
      window.dispatchEvent(new Event('ink-lang-change'))
    } catch (e) {}
  }

  // Başka bir sayfada dil değişirse bu sayfa da güncellensin
  useEffect(() => {
    const handler = () => {
      try {
        const v = localStorage.getItem('ink-lang')
        if (v === 'tr' || v === 'en') setLangState(v)
      } catch (e) {}
    }
    window.addEventListener('ink-lang-change', handler)
    window.addEventListener('storage', handler)
    return () => {
      window.removeEventListener('ink-lang-change', handler)
      window.removeEventListener('storage', handler)
    }
  }, [])

  return [lang, setLang]
}
