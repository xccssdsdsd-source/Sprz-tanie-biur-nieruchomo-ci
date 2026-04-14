import Link from 'next/link'
import Logo from './Logo'

const Footer = () => (
  <footer className='bg-brand-dark text-white'>
    <div className='mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20'>
      <div className='grid gap-10 md:grid-cols-3'>
        <div>
          <Logo className='[&_span]:text-white' />
          <p className='mt-5 max-w-sm text-sm text-white/60'>
            Profesjonalne sprzątanie biur, szkół i wspólnot mieszkaniowych
            w Warszawie. Jakość, terminowość, zaufanie.
          </p>
        </div>
        <div>
          <div className='text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow'>Nawigacja</div>
          <ul className='mt-4 space-y-2 text-sm'>
            <li><a href='#dlaczego-my' className='text-white/80 outline-none transition-colors hover:text-brand-yellow focus-visible:text-brand-yellow'>Dlaczego my</a></li>
            <li><a href='#uslugi' className='text-white/80 outline-none transition-colors hover:text-brand-yellow focus-visible:text-brand-yellow'>Usługi</a></li>
            <li><a href='#realizacje' className='text-white/80 outline-none transition-colors hover:text-brand-yellow focus-visible:text-brand-yellow'>Realizacje</a></li>
            <li><a href='#kontakt' className='text-white/80 outline-none transition-colors hover:text-brand-yellow focus-visible:text-brand-yellow'>Kontakt</a></li>
            <li><Link href='/polityka-prywatnosci' className='text-white/80 outline-none transition-colors hover:text-brand-yellow focus-visible:text-brand-yellow'>Polityka prywatności</Link></li>
          </ul>
        </div>
        <div>
          <div className='text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow'>Kontakt</div>
          <ul className='mt-4 space-y-2 text-sm text-white/80'>
            <li><a href='tel:660373327' className='outline-none hover:text-brand-yellow focus-visible:text-brand-yellow'>660 373 327</a></li>
            <li><a href='tel:784604220' className='outline-none hover:text-brand-yellow focus-visible:text-brand-yellow'>784 604 220</a></li>
            <li><a href='mailto:dlkomfort@gmail.com' className='outline-none hover:text-brand-yellow focus-visible:text-brand-yellow'>dlkomfort@gmail.com</a></li>
            <li><a href='https://dlkomfort.pl' className='outline-none hover:text-brand-yellow focus-visible:text-brand-yellow'>dlkomfort.pl</a></li>
          </ul>
        </div>
      </div>

      <div className='mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center'>
        <div>© 2026 DL Komfort. Wszelkie prawa zastrzeżone.</div>
        <div>Warszawa, Polska</div>
      </div>
    </div>
  </footer>
)

export default Footer
