export default function Footer({ lang }) {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://ilahinizamvekainat.tr" target="_blank" rel="noopener">ilahinizamvekainat.tr</a>
        <span>•</span>
        <a href="https://ilahinizamvekainat.info" target="_blank" rel="noopener">ilahinizamvekainat.info</a>
        <span>•</span>
        <a href="/INK_KITAP_TAMAMI.pdf" download>{lang==='tr'?'Türkçe PDF':'Turkish PDF'}</a>
        <span>•</span>
        <a href="/The_Divine_Order_and_The_Universe.pdf" download>{lang==='tr'?'İngilizce PDF':'English PDF'}</a>
      </div>
      <div>© 2026 Sedat Sel + Claude &nbsp;•&nbsp; INK • Bedri Ruhselman • 1959</div>
    </footer>
  )
}
