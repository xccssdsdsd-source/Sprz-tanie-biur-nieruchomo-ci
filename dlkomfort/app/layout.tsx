import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'DL Komfort — Profesjonalne sprzątanie biur w Warszawie',
  description:
    'Kompleksowe sprzątanie biur, szkół, wspólnot mieszkaniowych oraz sprzątanie po remoncie w Warszawie. Zamów wycenę online lub zadzwoń: 660 373 327.',
  keywords: [
    'sprzątanie biur Warszawa',
    'sprzątanie po remoncie',
    'sprzątanie wspólnot',
    'DL Komfort'
  ],
  openGraph: {
    title: 'DL Komfort — Profesjonalne sprzątanie biur w Warszawie',
    description:
      'Kompleksowe sprzątanie biur, szkół, wspólnot mieszkaniowych oraz sprzątanie po remoncie w Warszawie.',
    locale: 'pl_PL',
    type: 'website'
  }
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='pl' className={inter.variable}>
    <body className='font-sans antialiased text-brand-dark'>{children}</body>
  </html>
)

export default RootLayout
