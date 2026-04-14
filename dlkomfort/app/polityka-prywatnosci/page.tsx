import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Polityka prywatności — DL Komfort',
  description: 'Polityka prywatności serwisu DL Komfort.'
}

const PrivacyPage = () => (
  <main className='min-h-screen bg-white'>
    <Navbar />
    <section className='mx-auto max-w-3xl px-5 pb-24 pt-40 sm:px-8'>
      <Link href='/' className='inline-flex items-center gap-1.5 text-sm font-medium text-brand-dark/70 outline-none transition-colors hover:text-brand-dark focus-visible:text-brand-dark'>
        <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
          <path d='M19 12H5' />
          <path d='M12 19l-7-7 7-7' />
        </svg>
        Wróć do strony głównej
      </Link>
      <h1 className='mt-6 text-4xl font-bold tracking-tightest sm:text-5xl'>Polityka prywatności</h1>
      <p className='mt-6 text-brand-dark/70'>[TEKST] — treść polityki prywatności zostanie uzupełniona.</p>
    </section>
    <Footer />
  </main>
)

export default PrivacyPage
