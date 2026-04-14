'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Jak szybko możemy zacząć?',
    a: 'Zazwyczaj wystarczą 2 dni robocze od wyceny. Jeśli sytuacja jest pilna, zadzwoń bezpośrednio pod 660 373 327. W miarę możliwości reagujemy nawet tego samego dnia.'
  },
  {
    q: 'Czy środki czystości i sprzęt są wliczone w cenę?',
    a: 'Tak, w cenie jest wszystko. Przyjeżdżamy z własnym sprzętem i profesjonalnymi preparatami. Nie muszą Państwo nic przygotowywać ani dokupować.'
  },
  {
    q: 'Czy pracujecie poza godzinami biurowymi?',
    a: 'Tak i to jest nasz standard. Większość klientów woli żebyśmy przychodzili po 18 lub przed 7 rano. Grafik ustalamy indywidualnie tak żeby ekipa nie kolidowała z Państwa pracą.'
  },
  {
    q: 'Czy podpisujecie umowę?',
    a: 'Przy stałej współpracy zawsze podpisujemy umowę serwisową z określonym zakresem prac, częstotliwością i odpowiedzialnością obu stron. To Państwa gwarancja że usługa będzie wykonana dokładnie tak jak ustalono.'
  },
  {
    q: 'Co jeśli ekipa coś uszkodzi lub nie oczyści jak trzeba?',
    a: 'Reklamacje rozpatrujemy w ciągu 24 godzin. Pracujemy z pełnym ubezpieczeniem OC więc w razie szkody materialnej mają Państwo pełną ochronę. W praktyce reklamacje zdarzają się bardzo rzadko — ale jeśli się pojawi, nie trzeba się o nic martwić.'
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id='faq' className='relative bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-3xl px-5 sm:px-8'>
        <div className='mb-16'>
          <span className='inline-flex items-center gap-2 rounded-full bg-brand-yellow/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark'>
            <span className='h-1.5 w-1.5 rounded-full bg-brand-yellow' />
            FAQ
          </span>
          <h2 className='mt-5 text-4xl font-bold tracking-tightest sm:text-5xl'>
            Najczęstsze pytania przed pierwszym zleceniem.
          </h2>
        </div>

        <div className='space-y-2.5'>
          {faqs.map((faq, i) => (
            <div key={i} className='overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_4px_12px_-4px_rgba(17,17,17,0.06)]'>
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className='w-full flex items-center justify-between gap-4 px-8 py-5 text-left outline-none transition-colors hover:bg-brand-yellow/5 focus-visible:bg-brand-yellow/5'
              >
                <span className='text-base font-semibold text-brand-dark'>{faq.q}</span>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className={`flex-none transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                >
                  <path d='m6 9 6 6 6-6' />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className='overflow-hidden'
                  >
                    <div className='border-t border-black/5 px-8 py-5 text-[15px] text-brand-dark/75 leading-relaxed'>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
