'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const fade = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 }
}

const Hero = () => (
  <section id='top' className='relative isolate overflow-hidden pt-[72px]'>
    <div className='absolute inset-0 -z-10'>
      <Image
        src='/images/hero.jpg'
        alt='Nowoczesne, czyste biuro po sprzątaniu przez DL Komfort'
        fill
        priority
        sizes='100vw'
        className='object-cover mix-blend-multiply'
      />
      <div className='absolute inset-0 bg-gradient-to-b from-brand-dark/75 via-brand-dark/60 to-brand-dark/75' />
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,215,0,0.18),transparent_55%)]' />
      <div className='grain absolute inset-0' />
    </div>

    <div className='mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl flex-col justify-center px-5 py-24 sm:px-8 lg:py-32'>
      <motion.div
        initial='initial'
        animate='animate'
        transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
        className='max-w-3xl'
      >
        <motion.span
          variants={fade}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-brand-yellow backdrop-blur'
        >
          <span className='h-1.5 w-1.5 rounded-full bg-brand-yellow' />
          Warszawa · od 2018
        </motion.span>

        <motion.h1
          variants={fade}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='mt-6 text-5xl font-bold leading-[1.02] tracking-tightest text-white sm:text-6xl lg:text-[84px]'
        >
          Czyste biuro,
          <br />
          o które <span className='text-brand-yellow'>nie musisz się martwić.</span>
        </motion.h1>

        <motion.p
          variants={fade}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='mt-7 max-w-xl text-lg text-white/95 sm:text-xl'
        >
          Przychodzimy o umówionej godzinie, przywozimy własny sprzęt i środki. Rano zastajesz gotowe biuro — nie musisz nic pilnować ani sprawdzać.
        </motion.p>

        <motion.div
          variants={fade}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='mt-10 flex flex-wrap gap-3'
        >
          <a
            href='#kontakt'
            className='group inline-flex items-center gap-2 rounded-full bg-brand-yellow px-7 py-4 text-base font-semibold text-brand-dark shadow-soft-yellow outline-none transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-18px_rgba(255,215,0,0.7)] focus-visible:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark active:translate-y-0'
          >
            Chcę bezpłatną wycenę
            <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' className='transition-transform duration-200 group-hover:translate-x-1'>
              <path d='M5 12h14' />
              <path d='M13 5l7 7-7 7' />
            </svg>
          </a>
          <a
            href='tel:660373327'
            className='inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur outline-none transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-yellow active:translate-y-0'
          >
            <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
              <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
            </svg>
            Zadzwoń: 660 373 327
          </a>
        </motion.div>

        <motion.dl
          variants={fade}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8'
        >
          {[
            { k: '7+', v: 'lat na rynku' },
            { k: '200+', v: 'obsługiwanych obiektów' },
            { k: '24h', v: 'czas odpowiedzi na zapytanie' }
          ].map((s) => (
            <div key={s.v}>
              <dt className='text-3xl font-bold text-white sm:text-4xl'>{s.k}</dt>
              <dd className='mt-1 text-sm text-white/60'>{s.v}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </div>

    <div className='pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60'>
      <div className='flex h-10 w-6 items-start justify-center rounded-full border border-white/30 pt-2'>
        <motion.span
          animate={{ y: [0, 8, 0], opacity: [0.9, 0.2, 0.9] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className='block h-1.5 w-1 rounded-full bg-brand-yellow'
        />
      </div>
    </div>
  </section>
)

export default Hero
