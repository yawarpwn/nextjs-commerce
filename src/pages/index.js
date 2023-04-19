import Image from 'next/image'
import { Inter } from 'next/font/google'
import  HeroSlider  from '@/components/HeroSlider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <HeroSlider />
    </div>
  )
}
