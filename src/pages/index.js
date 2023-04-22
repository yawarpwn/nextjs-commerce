import { Inter } from 'next/font/google'
import  HeroSlider  from '@/components/HeroSlider'
import SEO from '@/components/SEO'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <SEO />
    </>
  )
}
