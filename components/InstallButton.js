import { useState, useEffect } from 'react'

export default function InstallButton({ lang }) {
  const [prompt, setPrompt] = useState(null)
  const [installed, setInstalled] = useState(false)
  const [iosDevice, setIosDevice] = useState(false)
  const [showIos, setShowIos] = useState(false)

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {})
    }
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent)
    const standalone = window.navigator.standalone
    setIosDevice(ios && !standalone)
    const handler = (e) => { e.preventDefault(); setPrompt(e) }
    window.addEventListener('beforeinstallprompt', handler)
    window.addEventListener('appinstalled', () => setInstalled(true))
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (!prompt) return
    prompt.prompt()
    const { outcome } = await prompt.userChoice
    if (outcome === 'accepted') setInstalled(true)
    setPrompt(null)
  }

  const T = {
    tr: { btn: '📱 Uygulamayı İndir', ios: '📱 Ana Ekrana Ekle', iosDesc: 'Safari\'de "Paylaş" → "Ana Ekrana Ekle"', installed: '✓ Uygulama kuruldu' },
    en: { btn: '📱 Install App', ios: '📱 Add to Home Screen', iosDesc: 'Safari: tap "Share" → "Add to Home Screen"', installed: '✓ App installed' }
  }[lang || 'tr']

  if (installed) return (
    <span style={{ display:'inline-flex', alignItems:'center', padding:'10px 20px', borderRadius:9, fontSize:13, color:'var(--gold)', border:'1px solid var(--border)', fontFamily:'system-ui' }}>
      {T.installed}
    </span>
  )

  if (prompt) return (
    <button onClick={handleInstall} style={{ background:'none', border:'1px solid var(--border)', color:'var(--gold)', padding:'10px 20px', borderRadius:9, fontSize:13, cursor:'pointer', fontFamily:'system-ui' }}>
      {T.btn}
    </button>
  )

  if (iosDevice) return (
    <div style={{ position:'relative', display:'inline-block' }}>
      <button onClick={() => setShowIos(!showIos)} style={{ background:'none', border:'1px solid var(--border)', color:'var(--gold)', padding:'10px 20px', borderRadius:9, fontSize:13, cursor:'pointer', fontFamily:'system-ui' }}>
        {T.ios}
      </button>
      {showIos && (
        <div style={{ position:'absolute', bottom:'110%', left:'50%', transform:'translateX(-50%)', background:'var(--bg2)', border:'1px solid var(--border)', borderRadius:10, padding:'12px 16px', fontSize:12, color:'var(--text2)', whiteSpace:'nowrap', fontFamily:'system-ui', zIndex:99 }}>
          {T.iosDesc}
        </div>
      )}
    </div>
  )

  return null
}
