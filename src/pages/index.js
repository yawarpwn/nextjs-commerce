import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <img src='/assets/banner-motos-1.webp' alt='banner de motos' />
      Start
    </div>
  )
}
