import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Hakkinda() {
  const [lang, setLang] = useState('tr')
  const T = {
    tr:{
      title:'Bu Kitap Hakkında', sub:'Bir insanın 12 yıllık tutkusu ve bir yapay zekanın analitik katkısıyla ortaya çıktı.',
      ss:'1969 Gelibolu doğumlu. Avukat, satranç organizatörü, Gökçeada Yazarlar Derneği Başkanı. 2013\'te INK ile tanıştı; o günden bu yana kitabı anlatmayı vazife edindi.',
      cl:'Anthropic tarafından geliştirilen yapay zeka. 1000 soruyu Sedat Sel ile birlikte yazdı. Son Söz bölümünü kendi sesinden kaleme aldı.',
      ink:'INK (İlahi Nizam ve Kâinat) 1959\'da Bedri Ruhselman tarafından medyumsal yolla derlendi. 53 yıl noter kasasında bekledi ve 2012\'de yayımlandı.',
      p319:'Her ikisi de tam 319 sayfa. INK 1959\'da, bizim kitabımız 2026\'da tamamlandı. 67 yıl arayla, bağımsız olarak, aynı sayfa sayısı. INK\'ın kendi sistemi buna tesadüf demez.',
      domains:'Web Adresleri',
      kaynaklar:'Kaynaklar ve İleri Okuma',
      kaynaklarNot:'Aşağıdaki eserler telif hakkıyla korunmaktadır. Resmi satış ve kaynak sayfalarına yönlendiriyoruz.',
      git:'Kaynağa Git',
    },
    en:{
      title:'About This Book', sub:'Born from one person\'s 12-year passion and an AI\'s analytical contribution.',
      ss:'Born 1969 in Gelibolu. Lawyer, chess organizer, President of the Gökçeada Writers\' Association. Discovered INK in 2013 and has since made sharing it his mission.',
      cl:'AI developed by Anthropic. Co-authored 1000 questions with Sedat Sel. Wrote the Afterword in its own voice.',
      ink:'INK (The Divine Order and the Universe) was compiled through mediumistic communication by Bedri Ruhselman in 1959. It waited 53 years in a notary\'s vault and was published in 2012.',
      p319:'Both exactly 319 pages. INK completed in 1959, our book in 2026. 67 years apart, independently, the same page count. INK\'s own system would not call this a coincidence.',
      domains:'Web
