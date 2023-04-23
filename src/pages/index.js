import { Inter } from 'next/font/google'
import HeroSlider from '@/components/HeroSlider'
import Reassurance from '@/components/Reassurance'
import LogosFooter from '@/components/LogosFooter'
import CustomerOpinion from '@/components/CustomerOpinion'
import SEO from '@/components/SEO'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <SEO />
      <Reassurance />
      <LogosFooter />
      <CustomerOpinion />
    </>
  )
}
