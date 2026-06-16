import { useState } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Icerik() {
  const [lang, setLang] = useState('tr')
  const tr = lang === 'tr'

  const chapters = [
    {n:1, tr:'Kitap ve Kaynak, Madde', en:'Book and Source, Matter', range:'1-50'},
    {n:2, tr:'Madde, Dualite ve Hareket', en:'Matter, Duality and Motion', range:'51-100'},
    {n:3, tr:'Dualite, Kainatlar', en:'Duality, Universes', range:'101-150'},
    {n:4, tr:'Kainatlar, Ruh', en:'Universes, Spirit', range:'151-200'},
    {n:5, tr:'Ruh, Asli Prensip, Varlik', en:'Spirit, Primordial Principle, Being', range:'201-250'},
    {n:6, tr:'Varlik, Unite ve Tesirler', en:'Being, Unit and Influences', range:'251-300'},
    {n:7, tr:'Unite, Tekamul', en:'Unit, Spiritual Evolution', range:'301-350'},
    {n:8, tr:'Tekamul', en:'Spiritual Evolution', range:'351-400'},
    {n:9, tr:'Insan', en:'The Human', range:'401-450'},
    {n:10, tr:'Insan, Beyin ve Suur', en:'Human, Brain and Consciousness', range:'451-500'},
    {n:11, tr:'Beyin, Vicdan', en:'Brain, Conscience', range:'501-550'},
    {n:12, tr:'Vicdan, Spatyom', en:'Conscience, The Spatyom', range:'551-600'},
    {n:13, tr:'Spatyom, Yari Suptil Alem', en:'Spatyom, Semi-Subtle Realm', range:'601-650'},
    {n:14, tr:'Yari Suptil Alem, Vazife Plani', en:'Semi-Subtle, Mission Plan', range:'651-700'},
    {n:15, tr:'Vazife Plani, Kader Mekanizmasi', en:'Mission Plan, Fate Mechanism', range:'701-750'},
    {n:16, tr:'Kader, Reenkarnasyon', en:'Fate, Reincarnation', range:'751-800'},
    {n:17, tr:'Reenkarnasyon, Dinler', en:'Reincarnation, Religions', range:'801-850'},
    {n:18, tr:'Dinler, Zaman', en:'Religions, Time', range:'851-900'},
    {n:19, tr:'Ruya ve Medyumluk, Dunyanin
