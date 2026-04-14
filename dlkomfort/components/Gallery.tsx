'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const photos = [
  { src: '/images/gallery/photo-1.webp', label: 'Realizacja DL Komfort' },
  { src: '/images/gallery/photo-2.webp', label: 'Realizacja DL Komfort' },
  { src: '/images/gallery/photo-3.webp', label: 'Realizacja DL Komfort' },
  { src: '/images/gallery/photo-4.webp', label: 'Realizacja DL Komfort' }
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
            Nasze{' '}
            <span className='relative'>
              <span className='relative z-10'>realizacje</span>
              <span className='absolute bottom-1.5 left-0 -z-0 h-3 w-full rounded bg-brand-yellow' />
            </span>
            .
          </h2>
        </div>
        <p className='max-w-md text-base text-brand-dark/65'>
          Prawdziwe efekty pracy naszego zespołu w biurach i nieruchomościach
          na terenie Warszawy.
        </p>
      </div>

      <div className='mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {photos.map((p, i) => (
          <motion.figure
            key={p.src}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
            className='group relative aspect-[4/5] overflow-hidden rounded-3xl bg-brand-dark/5 shadow-[0_20px_45px_-25px_rgba(20,20,20,0.35)]'
          >
            <Image
              src={p.src}
              alt={p.label}
              fill
              sizes='(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
              priority={i === 0}
              className='object-cover transition-transform duration-500 ease-out group-hover:scale-105'
            />
            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent' />
            <figcaption className='absolute bottom-4 left-4 right-4 text-sm font-medium text-white/90'>
              {p.label}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
)

export default Gallery
