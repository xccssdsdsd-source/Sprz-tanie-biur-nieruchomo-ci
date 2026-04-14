'use client'

import { useEffect, useState } from 'react'

const MobileContactBar = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const kontaktSection = entries.find((e) => e.target.id === 'kontakt')
      if (kontaktSection) {
        setVisible(!kontaktSection.isIntersecting)
      }
    }, { threshold: 0.1 })

    const kontakt = document.getElementById('kontakt')
    if (kontakt) observer.observe(kontakt)

    return () => {
      if (kontakt) observer.unobserve(kontakt)
    }
  }, [])

  if (!visible) return null

  return (
    <div className='fixed bottom-0 left-0 right-0 z-40 flex gap-3 bg-brand-yellow p-3 md:hidden'>
      <a href='tel:660373327' className='flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand-dark px-4 py-3 text-sm font-semibold text-white outline-none transition-transform active:scale-95'>
        <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
          <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
        </svg>
        Zadzwoń
      </a>
      <a href='#kontakt' className='flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-brand-dark bg-white px-4 py-3 text-sm font-semibold text-brand-dark outline-none transition-transform active:scale-95'>
        <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
          <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
        </svg>
        Zapytanie
      </a>
    </div>
  )
}

export default MobileContactBar
