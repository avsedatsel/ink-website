import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="1000 Soruda İlahi Nizam ve Kâinat — Sedat Sel + Claude" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#303034" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
