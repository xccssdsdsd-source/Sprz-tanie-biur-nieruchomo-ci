'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Zmienialiśmy już kilka firm sprzątających. DL Komfort to pierwszy, z którym nie musimy nic sprawdzać. Przyjeżdżają, sprzątają, wychodzą. Rano wszystko gotowe.',
    name: 'Anna K.',
    role: 'Office Manager, firma doradcza, Mokotów'
  },
  {
    quote: 'Zleciliśmy im sprzątanie po kapitalnym remoncie biura. Dużo pyłu, farby na podłodze, brud wszędzie. Ekipa przyśła rano i do wieczora biuro było gotowe. Naprawdę solidna robota.',
    name: 'Marek W.',
    role: 'Właściciel, biuro rachunkowe, Wola'
  },
  {
    quote: 'Obsługują naszą wspólnotę już trzeci rok. Klatki czyste, mieszkańcy przestali się skarżyć, faktury zawsze na czas. Nie wyobrażam sobie zmiany.',
    name: 'Dorota S.',
    role: 'Zarządca wspólnoty mieszkaniowej, Ursynów'
  }
]

const Testimonials = () => (
  <section id='opinie' className='relative bg-[#F5F3EF] py-24 sm:py-32'>
    <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.12),transparent_55%)]' />

    <div className='relative mx-auto max-w-7xl px-5 sm:px-8'>
      <div className='mb-16 max-w-2xl'>
        <span className='inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark shadow-[0_1px_0_rgba(0,0,0,0.04)]'>
          <span className='h-1.5 w-1.5 rounded-full bg-brand-yellow' />
          Opinie
        </span>
        <h2 className='mt-5 text-4xl font-bold tracking-tightest sm:text-5xl lg:text-6xl'>
          Pracujemy z nimi od lat.
        </h2>
        <p className='mt-4 text-base text-brand-dark/65'>
          Każda z poniższych firm oddała nam klucze do swojego biura. To chyba najlepsza rekomendacja.
        </p>
      </div>

      <div className='grid gap-8 md:grid-cols-3'>
        {testimonials.map((t, i) => (
          <motion.article
            key={t.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
            className='relative flex flex-col rounded-3xl border-l-4 border-brand-yellow bg-white p-7 shadow-[0_20px_45px_-25px_rgba(20,20,20,0.15)]'
          >
            <div className='flex gap-1'>
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className='fill-brand-yellow text-brand-yellow' />
              ))}
            </div>
            <blockquote className='mt-5 text-[15px] leading-relaxed text-brand-dark'>
              "{t.quote}"
            </blockquote>
            <div className='mt-6 border-t border-brand-dark/10 pt-5'>
              <div className='font-semibold text-brand-dark'>{t.name}</div>
              <div className='text-xs text-brand-dark/60'>{t.role}</div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
