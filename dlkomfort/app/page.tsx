import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyUs from '@/components/WhyUs'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import MobileContactBar from '@/components/MobileContactBar'
import ContactStrip from '@/components/ContactStrip'
import Footer from '@/components/Footer'

const HomePage = () => (
  <main className='min-h-screen bg-white'>
    <Navbar />
    <Hero />
    <WhyUs />
    <Services />
    <Testimonials />
    <Gallery />
    <ContactForm />
    <FAQ />
    <MobileContactBar />
    <ContactStrip />
    <Footer />
  </main>
)

export default HomePage
