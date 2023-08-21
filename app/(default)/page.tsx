export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Comparison from '@/components/comparison'
import FAQ from '@/components/FAQ'
import Booking from '@/components/booking'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
      <Comparison />
      <FAQ/>
      <Booking/>
      
      
      <Newsletter />
    </>
  )
}