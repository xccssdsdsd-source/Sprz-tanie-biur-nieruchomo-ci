import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import ContactForm from '@/components/ContactForm'
import ContactStrip from '@/components/ContactStrip'
import Footer from '@/components/Footer'

const HomePage = () => (
  <main className='min-h-screen bg-white'>
    <Navbar />
    <Hero />
    <Services />
    <Gallery />
    <ContactForm />
    <ContactStrip />
    <Footer />
  </main>
)

export default HomePage
