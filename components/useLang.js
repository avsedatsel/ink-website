import { useState, useEffect } from 'react'

export default function useLang() {
  const [lang, setLangState] = useState('tr')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ink-lang')
      if (saved === 'tr' || saved === 'en') {
        setLangState(saved)
      }
    } catch (e) {}
  }, [])

  const setLang = (newLang) => {
    setLangState(newLang)
    try {
      localStorage.setItem('ink-lang', newLang)
    } catch (e) {}
  }

  return [lang, setLang]
}
