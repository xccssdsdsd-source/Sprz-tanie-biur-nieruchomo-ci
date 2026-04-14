'use client'

import { motion } from 'framer-motion'
import BeforeAfter from './BeforeAfter'

const pairs = [
  { before: '/images/gallery/before1.jpg', after: '/images/gallery/after1.jpg', label: 'Korytarz biurowy — podłoga' },
  { before: '/images/gallery/before2.jpg', after: '/images/gallery/after2.jpg', label: 'Sprzątanie po remoncie — posadzka' },
  { before: '/images/gallery/before3.jpg', after: '/images/gallery/after3.jpg', label: 'Kuchnia socjalna w biurze' },
  { before: '/images/gallery/before4.jpg', after: '/images/gallery/after4.jpg', label: 'Łazienka po remoncie' }
]

const Gallery = () => (
  <section id='realizacje' className='relative bg-[#F5F3EF] py-24 sm:py-32'>
    <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.12),transparent_55%)]' />

    <div className='relative mx-auto max-w-7xl px-5 sm:px-8'>
      <div className='flex flex-col items-start justify-between gap-6 md:flex-row md:items-end'>
        <div className='max-w-2xl'>
          <span className='inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark shadow-[0_1px_0_rgba(0,0,0,0.04)]'>
            <span className='h-1.5 w-1.5 rounded-full bg-brand-yellow' />
            Realizacje
          </span>
          <h2 className='mt-5 text-4xl font-bold tracking-tightest sm:text-5xl lg:text-6xl'>
            Zobacz różnicę — <br />
            <span className='text-brand-dark/50'>przed</span> i{' '}
            <span className='relative'>
              <span className='relative z-10'>po</span>
              <span className='absolute bottom-1.5 left-0 -z-0 h-3 w-full rounded bg-brand-yellow' />
            </span>
            .
          </h2>
        </div>
        <p className='max-w-md text-base text-brand-dark/65'>
          Prawdziwe realizacje naszego zespołu. Przeciągnij suwak, aby porównać
          stan przed i po naszej interwencji.
        </p>
      </div>

      <div className='mt-14 grid gap-6 md:grid-cols-2'>
        {pairs.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
          >
            <BeforeAfter {...p} priority={i === 0} />
          </motion.div>
        ))}
      </div>

      <p className='mt-8 text-center text-xs text-brand-dark/40'>
        Zastąp ścieżki placeholderów rzeczywistymi zdjęciami klienta (dostarczonymi osobno).
      </p>
    </div>
  </section>
)

export default Gallery
