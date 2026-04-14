'use client'

import { motion } from 'framer-motion'
import { Shield, Leaf, UserCheck, CalendarCheck } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Pełne ubezpieczenie OC',
    description: 'Każda ekipa pracuje z aktywną polisą OC. Jeśli coś się stanie w Państwa biurze, reagujemy i bierzemy odpowiedzialność. Bez tłumaczeń.'
  },
  {
    icon: Leaf,
    title: 'Tylko atestowane środki',
    description: 'Żadnych tanich zamienników. Stosujemy wyłącznie biodegradowalne preparaty bezpieczne dla ludzi i zwierząt. Ważne szczególnie tam gdzie pracują dzieci.'
  },
  {
    icon: UserCheck,
    title: 'Jeden opiekun, jeden numer',
    description: 'Nie trafiają Państwo za każdym razem do innej osoby. Mają Państwo jednego opiekuna który zna Państwa obiekt i odpowiada bezpośrednio.'
  },
  {
    icon: CalendarCheck,
    title: 'Pracujemy kiedy Wam wygodnie',
    description: 'Rano przed pracownikami, wieczorem po zamknięciu, w weekendy. Grafik ustalamy tak żeby ekipa była niewidoczna dla Państwa zespołu.'
  }
]

const WhyUs = () => (
  <section id='dlaczego-my' className='relative bg-white py-24 sm:py-32'>
    <div className='mx-auto max-w-7xl px-5 sm:px-8'>
      <div className='mb-16 max-w-2xl'>
        <span className='inline-flex items-center gap-2 rounded-full bg-brand-yellow/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark'>
          <span className='h-1.5 w-1.5 rounded-full bg-brand-yellow' />
          Dlaczego my
        </span>
        <h2 className='mt-5 text-4xl font-bold tracking-tightest sm:text-5xl lg:text-6xl'>
          Dlaczego firmy w Warszawie wybierają właśnie nas.
        </h2>
      </div>

      <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
        {features.map((f, i) => {
          const Icon = f.icon
          return (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
              className='group relative flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-b from-white to-[#F6F6F4] p-8 shadow-soft-lg transition-transform duration-300 hover:-translate-y-1'
            >
              <div className='absolute -right-12 -top-12 h-44 w-44 rounded-full bg-brand-yellow/0 blur-2xl transition-[background-color] duration-500 group-hover:bg-brand-yellow/35' />
              <div className='relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-dark text-brand-yellow shadow-[inset_0_0_0_1px_rgba(255,215,0,0.2)]'>
                <Icon size={28} strokeWidth={1.8} />
              </div>
              <h3 className='relative mt-8 text-2xl font-bold tracking-tightest'>{f.title}</h3>
              <p className='relative mt-3 text-[15px] text-brand-dark/65'>{f.description}</p>
            </motion.article>
          )
        })}
      </div>
    </div>
  </section>
)

export default WhyUs
