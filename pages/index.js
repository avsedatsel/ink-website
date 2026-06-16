import { useState } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import InstallButton from '../components/InstallButton'

export default function Home() {
  const [lang, setLang] = useState('tr')
  const T = {
    tr: {
      eyebrow: 'Sedat Sel + Claude  •  2026',
      h1a: '1000 Soruda', h1b: 'İlahi Nizam ve Kâinat',
      sub: 'Evrenin yapısı, ruhun yolculuğu ve varoluşun anlamı — INK\'ın tüm sistemini herkesin anlayabileceği bir dilde.',
      btn1: '1000 Soruyu Oku',
      pdfTr: '1000 Soruda INK — Türkçe PDF',
      pdfEn: '1000 Questions on Divine Order — English PDF',
      s1:'Soru & Cevap', s2:'Bölüm', s3:'Kavram', s4:'Sayfa',
      f1t:'1000 Soru & Cevap', f1d:'Asli Prensip\'ten Reenkarnasyon\'a, Kader\'den Spatyom\'a — INK\'ın tüm sistemini
