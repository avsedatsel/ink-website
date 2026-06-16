import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import pratikData from '../data/pratik.json'

export default function Pratik() {
  const [lang, setLang] = useState('tr')
  const [acik, setAcik] = useState(null)

  const getBaslik = (p) => lang === 'en' && p.baslik_en ? p.baslik_en : p.baslik
  const getGovde  = (p) => lang === 'en' && p.govde_en  ? p.govde_en  : p.govde
  const getAdimlar= (p) => lang === 'en' && p.adimlar_en && p.adimlar_en.length ? p.adimlar_en : p.adimlar
  const getGrup   = (p) => lang === 'en' && p.grup_en   ? p.grup_en   : p.grup

  return (
    <>
      <Nav lang={lang} setLang={setLang} />
