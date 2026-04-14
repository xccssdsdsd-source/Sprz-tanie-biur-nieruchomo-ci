'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const photos = [
  { src: '/images/gallery/photo-1.webp', label: 'Biuro korporacyjne · Śródmieście' },
  { src: '/images/gallery/photo-2.webp', label: 'Sprzątanie po remoncie · Wola' },
  { src: '/images/gallery/photo-3.webp', label: 'Szkoła podstawowa · Praga Południe' },
  { src: '/images/gallery/photo-4.webp', label: 'Wspólnota mieszkaniowa · Ursynów' }
]

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowLeft') setCurrentIndex((i) => (i - 1 + photos.length) % photos.length)
      if (e.key === 'ArrowRight') setCurrentIndex((i) => (i + 1) % photos.length)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen])

  return (
    <section id='realizacje' className='relative bg-[#F5F3EF] py-24 sm:py-32'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.12),transparent_55%)]' />

      <div className='relative mx-auto max-w-7xl px-5 sm:px-8'>
        <div className='mb-16 max-w-2xl'>
          <span className='inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark shadow-[0_1px_0_rgba(0,0,0,0.04)]'>
            <span className='h-1.5 w-1.5 rounded-full bg-brand-yellow' />
            Realizacje
          </span>
          <h2 className='mt-5 text-4xl font-bold tracking-tightest sm:text-5xl lg:text-6xl'>
            Nasze realizacje.
          </h2>
          <p className='mt-4 text-base text-brand-dark/65'>
            Zdjęcia z prawdziwych obiektów które obsługujemy lub obsługiwaliśmy.
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
              onClick={() => { setCurrentIndex(i); setLightboxOpen(true) }}
              className='group relative aspect-[4/5] overflow-hidden rounded-3xl bg-brand-dark/5 shadow-[0_20px_45px_-25px_rgba(20,20,20,0.35)] cursor-pointer'
            >
              <Image
                src={p.src}
                alt={p.label}
                fill
                sizes='(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
                priority={i === 0}
                className='object-cover transition-transform duration-500 ease-out group-hover:scale-105'
              />
              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent' />
              <p className='pointer-events-none absolute bottom-4 left-4 right-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/90'>{p.label}</p>
            </motion.figure>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightboxOpen(false)}
            className='fixed inset-0 z-[70] flex items-center justify-center bg-black/90'
          >
            <div className='relative w-full h-full flex items-center justify-center' onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setLightboxOpen(false)}
                className='absolute top-6 right-6 z-[80] flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white outline-none transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-brand-yellow'
              >
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                  <path d='M18 6l-12 12' />
                  <path d='M6 6l12 12' />
                </svg>
              </button>

              <motion.img
                key={currentIndex}
                src={photos[currentIndex].src}
                alt={photos[currentIndex].label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }}
                className='rounded-xl'
              />

              <button
                onClick={() => setCurrentIndex((i) => (i - 1 + photos.length) % photos.length)}
                className='absolute left-6 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white outline-none transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-brand-yellow'
              >
                <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
                  <path d='M15 19l-7-7 7-7' />
                </svg>
              </button>

              <button
                onClick={() => setCurrentIndex((i) => (i + 1) % photos.length)}
                className='absolute right-6 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white outline-none transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-brand-yellow'
              >
                <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
                  <path d='M9 19l7-7-7-7' />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
