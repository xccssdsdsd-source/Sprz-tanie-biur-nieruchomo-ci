'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const links = [
  { href: '#uslugi', label: 'Usługi' },
  { href: '#realizacje', label: 'Realizacje' },
  { href: '#kontakt', label: 'Kontakt' }
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color,box-shadow] duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-[0_10px_30px_-15px_rgba(17,17,17,0.15)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className='mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8'>
        <Link href='#top' aria-label='DL Komfort — strona główna' className='group outline-none'>
          <Logo className='transition-transform duration-300 group-hover:-translate-y-0.5 group-focus-visible:-translate-y-0.5' />
        </Link>

        <ul className='hidden items-center gap-1 md:flex'>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className='relative rounded-full px-4 py-2 text-sm font-medium text-brand-dark/75 outline-none transition-colors hover:text-brand-dark focus-visible:text-brand-dark focus-visible:ring-2 focus-visible:ring-brand-yellow/80'
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='hidden md:block'>
          <a
            href='tel:660373327'
            className='group relative inline-flex items-center gap-2 rounded-full bg-brand-dark px-5 py-2.5 text-sm font-semibold text-white shadow-soft-lg outline-none transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-soft-yellow focus-visible:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 active:translate-y-0'
          >
            <span className='relative flex h-2 w-2'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-yellow opacity-75' />
              <span className='relative inline-flex h-2 w-2 rounded-full bg-brand-yellow' />
            </span>
            Zadzwoń teraz
          </a>
        </div>

        <button
          type='button'
          aria-label='Menu'
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-brand-dark outline-none transition-transform duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-brand-yellow md:hidden'
        >
          <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round'>
            {open ? (
              <>
                <path d='M6 6l12 12' />
                <path d='M18 6L6 18' />
              </>
            ) : (
              <>
                <path d='M4 7h16' />
                <path d='M4 12h16' />
                <path d='M4 17h16' />
              </>
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className='md:hidden'
          >
            <div className='mx-4 mb-3 rounded-2xl border border-black/5 bg-white/95 p-3 shadow-soft-lg backdrop-blur-xl'>
              <ul className='flex flex-col'>
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className='block rounded-xl px-4 py-3 text-base font-medium text-brand-dark/85 outline-none transition-colors hover:bg-brand-yellow/15 focus-visible:bg-brand-yellow/15'
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className='mt-2'>
                  <a
                    href='tel:660373327'
                    onClick={() => setOpen(false)}
                    className='flex items-center justify-center gap-2 rounded-xl bg-brand-dark px-4 py-3 text-base font-semibold text-white'
                  >
                    Zadzwoń: 660 373 327
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
