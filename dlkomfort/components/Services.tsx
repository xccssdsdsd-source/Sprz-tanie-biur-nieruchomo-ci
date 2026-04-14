'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Regularne sprzątanie biur',
    tag: 'Najpopularniejsze',
    desc: 'Przychodzimy codziennie lub w ustalonych dniach. Czyścimy biurka, sanitariaty, kuchnie socjalne i dezynfekujemy powierzchnie wspólne. Stały zespół który zna Państwa biuro na pamięć.',
    bullets: ['Stała ekipa — te same osoby za każdym razem', 'Własny sprzęt i środki czystości w cenie', 'Elastyczny grafik dopasowany do biura'],
    icon: (
      <>
        <rect x='3' y='4' width='18' height='14' rx='2' />
        <path d='M3 9h18' />
        <path d='M8 4v5' />
        <path d='M16 4v5' />
        <path d='M7 21h10' />
      </>
    )
  },
  {
    title: 'Sprzątanie po remoncie',
    tag: 'Deep clean',
    desc: 'Pył budowlany, resztki gipsu, kleje i farby to nie nasza pierwsza taka robota. Wchodzimy po ekipie remontowej i oddajemy biuro gotowe do pracy — jeszcze tego samego dnia.',
    bullets: ['Usuwanie pyłu i resztek materiałów', 'Mycie okien, posadzek i stolarki', 'Możliwość realizacji w jeden dzień'],
    icon: (
      <>
        <path d='M12 2l2.39 4.84L20 8l-4 3.9.94 5.5L12 14.8l-4.94 2.6L8 11.9 4 8l5.61-1.16L12 2z' />
      </>
    )
  },
  {
    title: 'Szkoły i wspólnoty mieszkaniowe',
    tag: 'Obiekty publiczne',
    desc: 'Obsługujemy klatki schodowe, sale lekcyjne, korytarze i tereny zewnętrzne. Rozliczenie z administratorem lub dyrekcją, stały harmonogram i raportowanie.',
    bullets: ['Klatki schodowe i części wspólne', 'Sale lekcyjne i sanitariaty', 'Rozliczenie bezpośrednio z zarządcą'],
    icon: (
      <>
        <path d='M3 10l9-6 9 6' />
        <path d='M5 10v10h14V10' />
        <path d='M9 20v-6h6v6' />
      </>
    )
  }
]

const Services = () => (
  <section id='uslugi' className='relative bg-[#F5F3EF] py-24 sm:py-32'>
    <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,215,0,0.1),transparent_55%)]' />
    <div className='mx-auto max-w-7xl px-5 sm:px-8'>
      <div className='relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-end'>
        <div className='max-w-2xl'>
          <span className='inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark shadow-[0_1px_0_rgba(0,0,0,0.04)]'>
            <span className='h-1.5 w-1.5 rounded-full bg-brand-yellow' />
            Usługi
          </span>
          <h2 className='mt-5 text-4xl font-bold tracking-tightest sm:text-5xl lg:text-6xl'>
            Czystość na miarę
            <br />
            Twojego obiektu.
          </h2>
        </div>
        <p className='max-w-md text-base text-brand-dark/65'>
          Od pojedynczych zleceń po stałą, wieloletnią współpracę — dobieramy zakres
          i częstotliwość do specyfiki każdej nieruchomości.
        </p>
      </div>

      <div className='mt-14 grid gap-5 md:grid-cols-3'>
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
            className='group relative flex flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-8 shadow-[0_20px_40px_-20px_rgba(17,17,17,0.12),0_4px_12px_-4px_rgba(17,17,17,0.06)] transition-transform duration-300 hover:-translate-y-1'
          >
            <div className='absolute -right-12 -top-12 h-44 w-44 rounded-full bg-brand-yellow/0 blur-2xl transition-[background-color] duration-500 group-hover:bg-brand-yellow/35' />

            <div className='relative flex items-start justify-between'>
              <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-dark text-brand-yellow shadow-[inset_0_0_0_1px_rgba(255,215,0,0.2)]'>
                <svg width='26' height='26' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
                  {s.icon}
                </svg>
              </div>
              <span className='rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-brand-dark/60'>
                {s.tag}
              </span>
            </div>

            <h3 className='relative mt-8 text-2xl font-bold tracking-tightest'>{s.title}</h3>
            <p className='relative mt-3 text-[15px] text-brand-dark/65'>{s.desc}</p>

            <ul className='relative mt-6 flex flex-wrap gap-2'>
              {s.bullets.map((b) => (
                <li key={b} className='rounded-full bg-brand-dark/5 px-3 py-1 text-xs font-medium text-brand-dark/70'>
                  {b}
                </li>
              ))}
            </ul>

            <a
              href='#kontakt'
              className='relative mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-dark outline-none transition-transform duration-200 hover:translate-x-0.5 focus-visible:translate-x-0.5 focus-visible:ring-2 focus-visible:ring-brand-yellow'
            >
              Zapytaj o wycenę
              <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M5 12h14' />
                <path d='M13 5l7 7-7 7' />
              </svg>
            </a>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Services
