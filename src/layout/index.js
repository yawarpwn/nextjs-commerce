import Header from './Header'
import Footer from './Footer'
import WhatsappBtnPopup from '@/components/WhatspAppBtn'
import Sidebar from '@/components/Sidebar'
import { useRouter } from 'next/router'
import HeroSlider from '@/components/HeroSlider'
import MobileNavigation from '@/components/MobileNavigation'
import { useState } from 'react'

export default function Layout({ children }) {
  const router = useRouter()
  const { pathname } = router
  const isHome = pathname === '/'

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  const onClose =() => {
    setOpen(false)
  }
  return (
    <>
      <Header handleOpen={handleOpen} open={open} />
      {isHome ? (
        <>
        <HeroSlider />
        <main>{children}</main>
        </>
      ) : (
        <div className="max-w-7xl mx-auto w-full px-4">
          <Sidebar />
          <main className="lg:ml-[200px]">{children}</main>
        </div>
      )}
      <MobileNavigation open={open} onClose={onClose} />
      <WhatsappBtnPopup />
      <Footer />
    </>
  )
}
