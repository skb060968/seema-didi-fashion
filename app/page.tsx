import Hero from '@/components/Hero'
import FeaturedWork from '@/components/FeaturedWork'
import About from '@/components/About'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </>
  )
}