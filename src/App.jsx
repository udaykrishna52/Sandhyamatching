import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedCollections from './components/FeaturedCollections'
import BestSellers from './components/BestSellers'
import About from './components/About'
import BridalBanner from './components/BridalBanner'
import WhyChooseUs from './components/WhyChooseUs'
import InstagramGallery from './components/InstagramGallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Navbar />
      <main>
        <Hero />
        <FeaturedCollections />
        <BestSellers />
        <About />
        <BridalBanner />
        <WhyChooseUs />
        <InstagramGallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
