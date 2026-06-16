import { useState } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Icerik() {
  const [lang, setLang] = useState('tr')

  const chapters = [
    {n:1,  tr:'KİTAP VE KAYNAK, MADDE',                      en:'Book & Source, Matter',                    range:'1–50'},
    {n:2,  tr:'MADDE devamı, DÜALİTE VE HAREKET',             en:'Matter (cont.), Duality & Motion',         range:'51–100'},
    {n:3,  tr:'DÜALİTE devamı, KÂİNATLAR',                   en:'Duality (cont.), Universes',               range:'101–150'},
    {n:4,  tr:'KÂİNATLAR devamı, RUH',                        en:'Universes (cont.), Spirit',                range:'151–200'},
    {n:5,  tr:'RUH devamı, ASLİ PRENSİP, VARLIK',             en:'Spirit (cont.), Primordial Principle, Being', range:'201–250'},
    {n:6,  tr:'VARLIK devamı, ÜNİTE VE TESİRLER',             en:'Being (cont.), Unit & Influences',         range:'251–300'},
    {n:7,  tr:'ÜNİTE devamı, TEKÂMÜL',                        en:'Unit (cont.), Spiritual Evolution',        range:'301–350'},
    {n:8,  tr:'TEKÂMÜL devamı',                               en:'Spiritual Evolution (cont.)',              range:'351–400'},
    {n:9,  tr:'İNSAN',                                        en:'The Human',                                range:'401–450'},
    {n:10, tr:'İNSAN devamı, BEYİN VE ŞUUR',                  en:'Human (cont.), Brain & Consciousness',     range:'451–500'},
    {n:11, tr:'BEYİN VE ŞUUR devamı, VİCDAN',                 en:'Brain (cont.), Conscience',                range:'501–550'},
    {n:12, tr:'VİCDAN devamı, SPATYOM',                       en:'Conscience (cont.), The Spatyom',          range:'551–600'},
    {n:13, tr:'SPATYOM devamı, YARI SÜPTİL ÂLEM',             en:'Spatyom (cont.), Semi-Subtle Realm',       range:'601–650'},
    {n:14, tr:'YARI SÜPTİL ÂLEM devamı, VAZİFE PLÂNI',        en:'Semi-Subtle (cont.), Mission Plan',        range:'651–700'},
    {n:15, tr:'VAZİFE PLÂNI devamı, KADER MEKANİZMASI',       en:'Mission Plan (cont.), Fate Mechanism',     range:'701–750'},
    {n:16, tr:'KADER devamı, REENKARNASYON',                  en:'Fate (cont.), Reincarnation',              range:'751–800'},
    {n:17, tr:'REENKARNASYON devamı, DİNLER',                 en:'Reincarnation (cont.), Religions',         range:'801–850'},
    {n:18, tr:'DİNLER devamı, ZAMAN',                         en:'Religions (cont.), Time',                  range:'851–900'},
    {n:19, tr:'RÜYA VE MEDYUMLUK, DÜNYANIN GELECEĞİ',         en:'Dreams & Mediumship, Future of the World', range:'901–950'},
    {n:20, tr:'DÜNYANIN GELECEĞİ devamı, FELSEFİ SORULAR',    en:'Future (cont.), Philosophical Questions',  range:'951–1000'},
  ]

  return (
    <>
      <Nav lang={lang} setLang={setLang} />
      <div className="page-wrap">
        <h1 className="page-title">
          {lang === 'tr' ? 'BÖLÜMLER VE KONULAR' : 'CHAPTERS AND TOPICS'}
        </h1>
        <p style={{color:'var(--text3)',fontFamily:'system-ui',fontSize:13,marginBottom:28}}>
          {lang === 'tr' ? '1000 Soruda İlahi Nizam ve Kâinat — 20 bölüm' : '1000 Questions on Divine Order and Universe — 20 chapters'}
        </p>

        <div style={{display:'grid',gap:10}}>
          {chapters.map(c => (
            <Link key={c.n} href={`/sorular`}
              style={{display:'flex',alignItems:'center',gap:16,padding:'16px 20px',
                background:'var(--bg2)',borderRadius:12,border:'1px solid var(--border2)',
                textDecoration:'none',color:'var(--text1)'}}>
              <div style={{minWidth:48,height:48,borderRadius:10,background:'var(--bg3)',
