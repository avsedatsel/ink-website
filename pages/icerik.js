import { useState } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Icerik() {
  const [lang, setLang] = useState('tr')
  const tr = lang === 'tr'

  const chapters = [
    {n:1,  tr:'KITAP VE KAYNAK, MADDE',                    en:'Book and Source, Matter',                  range:'1-50'},
    {n:2,  tr:'MADDE devami, DUALITE VE HAREKET',           en:'Matter, Duality and Motion',               range:'51-100'},
    {n:3,  tr:'DUALITE devami, KAINATLAR',                  en:'Duality, Universes',                       range:'101-150'},
    {n:4,  tr:'KAINATLAR devami, RUH',                      en:'Universes, Spirit',                        range:'151-200'},
    {n:5,  tr:'RUH devami, ASLI PRENSIP, VARLIK',           en:'Spirit, Primordial Principle, Being',      range:'201-250'},
    {n:6,  tr:'VARLIK devami, UNITE VE TESIRLER',           en:'Being, Unit and Influences',               range:'251-300'},
    {n:7,  tr:'UNITE devami, TEKAMUL',                      en:'Unit, Spiritual Evolution',                range:'301-350'},
    {n:8,  tr:'TEKAMUL devami',                             en:'Spiritual Evolution',                      range:'351-400'},
    {n:9,  tr:'INSAN',                                      en:'The Human',                                range:'401-450'},
    {n:10, tr:'INSAN devami, BEYIN VE SUUR',                en:'Human, Brain and Consciousness',           range:'451-500'},
    {n:11, tr:'BEYIN VE SUUR devami, VICDAN',               en:'Brain, Conscience',                        range:'501-550'},
    {n:12, tr:'VICDAN devami, SPATYOM',                     en:'Conscience, The Spatyom',                  range:'551-600'},
    {n:13, tr:'SPATYOM devami, YARI SUPTIL ALEM',           en:'Spatyom, Semi-Subtle Realm',               range:'601-650'},
    {n:14, tr:'YARI SUPTIL ALEM devami, VAZIFE PLANI',      en:'Semi-Subtle, Mission Plan',                range:'651-700'},
    {n:15, tr:'VAZIFE PLANI devami, KADER MEKANIZMASI',     en:'Mission Plan, Fate Mechanism',             range:'701-750'},
    {n:16, tr:'KADER devami, REENKARNASYON',                en:'Fate, Reincarnation',                      range:'751-800'},
    {n:17, tr:'REENKARNASYON devami, DINLER',               en:'Reincarnation, Religions',                 range:'801-850'},
    {n:18, tr:'DINLER devami, ZAMAN',                       en:'Religions, Time',                          range:'851-900'},
    {n:19, tr:'RUYA VE MEDYUMLUK, DUNYANIN GELECEGI',       en:'Dreams, Future of the World',              range:'901-950'},
    {n:20, tr:'DUNYANIN GELECEGI devami, FELSEFI SORULAR',  en:'Future, Philosophical
