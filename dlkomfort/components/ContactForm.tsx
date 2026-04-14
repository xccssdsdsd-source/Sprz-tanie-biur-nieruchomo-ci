'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { AnimatePresence, motion } from 'framer-motion'

const services = [
  { id: 'biuro', label: 'Sprzątanie biura' },
  { id: 'po-remoncie', label: 'Sprzątanie po remoncie' },
  { id: 'szkola', label: 'Sprzątanie szkoły / instytucji' },
  { id: 'wspolnota', label: 'Wspólnota mieszkaniowa' },
  { id: 'jednorazowe', label: 'Sprzątanie jednorazowe' }
] as const

const frequencies = [
  { id: 'jednorazowo', label: 'Jednorazowo' },
  { id: 'tydzien', label: 'Co tydzień' },
  { id: 'dwa-tygodnie', label: 'Co dwa tygodnie' },
  { id: 'miesiac', label: 'Co miesiąc' }
] as const

const areas = ['do 50m²', '50–100m²', '100–300m²', 'powyżej 300m²'] as const

const schema = z.object({
  name: z.string().min(2, 'Imię musi mieć co najmniej 2 znaki'),
  phone: z
    .string()
    .min(9, 'Podaj poprawny numer telefonu')
    .regex(/^[+\d\s-]+$/, 'Numer może zawierać tylko cyfry, spacje i myślniki'),
  email: z.string().email('Podaj poprawny adres e-mail'),
  services: z.array(z.string()).min(1, 'Wybierz co najmniej jedną usługę'),
  frequency: z.enum(['jednorazowo', 'tydzien', 'dwa-tygodnie', 'miesiac'], {
    errorMap: () => ({ message: 'Wybierz częstotliwość' })
  }),
  area: z.enum(areas, { errorMap: () => ({ message: 'Wybierz powierzchnię' }) }),
  message: z.string().max(1000).optional()
})

type FormValues = z.infer<typeof schema>

const ContactForm = () => {
  const [toast, setToast] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { services: [], message: '' }
  })

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 600))
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-console
      console.log('DL Komfort — zapytanie:', data)
    }
    setToast('Dziękujemy! Oddzwonimy w ciągu 24 godzin.')
    reset({ services: [], message: '', name: '', phone: '', email: '' })
    setTimeout(() => setToast(null), 5000)
  }

  const inputBase =
    'w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-[15px] text-brand-dark placeholder:text-brand-dark/40 outline-none transition-[border-color,box-shadow,transform] duration-200 focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/25'

  return (
    <section id='kontakt' className='relative overflow-hidden bg-brand-dark py-24 text-white sm:py-32'>
      <div className='pointer-events-none absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand-yellow/10 blur-3xl' />
      <div className='pointer-events-none absolute bottom-[-30%] left-[-10%] h-[600px] w-[600px] rounded-full bg-brand-yellow/5 blur-3xl' />

      <div className='relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-5'>
        <div className='lg:col-span-2'>
          <span className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow'>
            <span className='h-1.5 w-1.5 rounded-full bg-brand-yellow' />
            Kontakt
          </span>
          <h2 className='mt-5 text-4xl font-bold tracking-tightest sm:text-5xl lg:text-6xl'>
            Ile kosztuje sprzątanie mojego biura?
          </h2>
          <p className='mt-5 max-w-md text-white/70'>
            Wypełnij formularz — oddzwaniamy w ciągu 24 godzin z wyceną. Bez zobowiązań, bez sprzedawania na siłę.
          </p>

          <div className='mt-10 space-y-4'>
            <a href='tel:660373327' className='group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-200 hover:bg-white/[0.07] focus-visible:bg-white/[0.07] outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow'>
              <span className='flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow text-brand-dark'>
                <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                  <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
                </svg>
              </span>
              <div>
                <div className='text-xs uppercase tracking-[0.18em] text-white/50'>Telefon</div>
                <div className='text-lg font-semibold'>660 373 327</div>
              </div>
            </a>
            <a href='mailto:dlkomfort@gmail.com' className='group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-200 hover:bg-white/[0.07] focus-visible:bg-white/[0.07] outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow'>
              <span className='flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow text-brand-dark'>
                <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                  <rect x='2' y='4' width='20' height='16' rx='2' />
                  <path d='m22 7-10 6L2 7' />
                </svg>
              </span>
              <div>
                <div className='text-xs uppercase tracking-[0.18em] text-white/50'>E-mail</div>
                <div className='text-lg font-semibold'>dlkomfort@gmail.com</div>
              </div>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className='relative lg:col-span-3 rounded-3xl border border-white/10 bg-white p-6 text-brand-dark shadow-soft-lg sm:p-10'
        >
          <div className='grid gap-5 sm:grid-cols-2'>
            <label className='block'>
              <span className='mb-2 block text-sm font-semibold'>Imię i nazwisko</span>
              <input type='text' autoComplete='name' placeholder='Jan Kowalski' {...register('name')} className={inputBase} />
              {errors.name && <span className='mt-1.5 block text-xs font-medium text-red-600'>{errors.name.message}</span>}
            </label>
            <label className='block'>
              <span className='mb-2 block text-sm font-semibold'>Telefon</span>
              <input type='tel' autoComplete='tel' placeholder='+48 600 000 000' {...register('phone')} className={inputBase} />
              {errors.phone && <span className='mt-1.5 block text-xs font-medium text-red-600'>{errors.phone.message}</span>}
            </label>
            <label className='block sm:col-span-2'>
              <span className='mb-2 block text-sm font-semibold'>E-mail</span>
              <input type='email' autoComplete='email' placeholder='jan@firma.pl' {...register('email')} className={inputBase} />
              {errors.email && <span className='mt-1.5 block text-xs font-medium text-red-600'>{errors.email.message}</span>}
            </label>
          </div>

          <fieldset className='mt-7'>
            <legend className='mb-3 text-sm font-semibold'>Zakres usług</legend>
            <div className='grid gap-2 sm:grid-cols-2'>
              {services.map((s) => (
                <label
                  key={s.id}
                  className='group flex cursor-pointer items-center gap-3 rounded-xl border border-black/10 bg-[#FAFAFA] px-4 py-3 transition-colors duration-200 hover:border-brand-yellow/60 hover:bg-brand-yellow/5 has-[:checked]:border-brand-yellow has-[:checked]:bg-brand-yellow/10'
                >
                  <input
                    type='checkbox'
                    value={s.id}
                    {...register('services')}
                    className='peer sr-only'
                  />
                  <span className='flex h-5 w-5 flex-none items-center justify-center rounded-md border border-black/20 bg-white transition-colors peer-checked:border-brand-yellow peer-checked:bg-brand-yellow'>
                    <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' className='text-brand-dark opacity-0 peer-checked:opacity-100'>
                      <path d='M20 6L9 17l-5-5' />
                    </svg>
                  </span>
                  <span className='text-sm font-medium'>{s.label}</span>
                </label>
              ))}
            </div>
            {errors.services && <span className='mt-2 block text-xs font-medium text-red-600'>{errors.services.message as string}</span>}
          </fieldset>

          <fieldset className='mt-7'>
            <legend className='mb-3 text-sm font-semibold'>Częstotliwość</legend>
            <div className='grid grid-cols-2 gap-2 sm:grid-cols-4'>
              {frequencies.map((f) => (
                <label
                  key={f.id}
                  className='group flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-black/10 bg-[#FAFAFA] px-3 py-3 text-sm font-medium transition-colors duration-200 hover:border-brand-yellow/60 hover:bg-brand-yellow/5 has-[:checked]:border-brand-yellow has-[:checked]:bg-brand-yellow/10'
                >
                  <input type='radio' value={f.id} {...register('frequency')} className='peer sr-only' />
                  <span className='flex h-4 w-4 flex-none items-center justify-center rounded-full border border-black/25 peer-checked:border-brand-yellow peer-checked:bg-white'>
                    <span className='h-2 w-2 scale-0 rounded-full bg-brand-yellow transition-transform duration-150 peer-checked:scale-100' />
                  </span>
                  {f.label}
                </label>
              ))}
            </div>
            {errors.frequency && <span className='mt-2 block text-xs font-medium text-red-600'>{errors.frequency.message}</span>}
          </fieldset>

          <div className='mt-7 grid gap-5 sm:grid-cols-2'>
            <label className='block'>
              <span className='mb-2 block text-sm font-semibold'>Powierzchnia</span>
              <div className='relative'>
                <select {...register('area')} defaultValue='' className={`${inputBase} appearance-none pr-10`}>
                  <option value='' disabled>Wybierz powierzchnię</option>
                  {areas.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
                <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brand-dark/50'>
                  <path d='m6 9 6 6 6-6' />
                </svg>
              </div>
              {errors.area && <span className='mt-1.5 block text-xs font-medium text-red-600'>{errors.area.message}</span>}
            </label>
            <label className='block sm:col-span-2'>
              <span className='mb-2 block text-sm font-semibold'>Wiadomość <span className='font-normal text-brand-dark/50'>(opcjonalnie)</span></span>
              <textarea rows={4} placeholder='Opisz krótko obiekt — lokalizacja, specyfika, oczekiwania…' {...register('message')} className={`${inputBase} resize-none`} />
            </label>
          </div>

          <button
            type='submit'
            disabled={isSubmitting}
            className='group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-yellow px-7 py-4 text-base font-semibold text-brand-dark shadow-[0_8px_24px_-8px_rgba(255,215,0,0.5)] outline-none transition-[transform,box-shadow,opacity] duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-8px_rgba(255,215,0,0.6)] focus-visible:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark active:translate-y-0 disabled:opacity-60'
          >
            {isSubmitting ? 'Wysyłanie…' : 'Wyślij zapytanie'}
            <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' className='transition-transform duration-200 group-hover:translate-x-1'>
              <path d='M5 12h14' />
              <path d='M13 5l7 7-7 7' />
            </svg>
          </button>

          <p className='mt-4 text-xs text-brand-dark/50'>
            Oddzwaniamy zazwyczaj w ciągu kilku godzin. Nie wysyłamy spamu.
          </p>
        </form>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role='status'
            className='fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-brand-yellow px-5 py-3 text-sm font-semibold text-brand-dark shadow-soft-yellow'
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ContactForm
