export default function Footer({ lang }) {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://ilahinizamvekainat.tr" target="_blank" rel="noopener">ilahinizamvekainat.tr</a>
        <span>•</span>
        <a href="https://ilahinizamvekainat.info" target="_blank" rel="noopener">ilahinizamvekainat.info</a>
        <span>•</span>
        <a href="/INK_KITAP_TAMAMI.pdf" download>PDF {lang==='tr'?'İndir':'Download'}</a>
      </div>
      <div>© 2026 Sedat Sel + Claude &nbsp;•&nbsp; INK • Bedri Ruhselman • 1959</div>
    </footer>
  )
}
