import Header from './Header'
import Footer from './Footer'
import WhatsappBtnPopup from '@/components/WhatspAppBtn'
import Sidebar from '@/components/Sidebar'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()
  const { pathname } = router
  const isHome = pathname === '/'

  if (isHome) {
    return (
      <>
        <Header />
        <main className="max-w-7xl mx-auto w-full px-4">{children}</main>
        <WhatsappBtnPopup />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto w-full px-4">
        <Sidebar />
        <main className="lg:ml-[300px]">{children}</main>
      </div>
      <WhatsappBtnPopup />
      <Footer />
    </>
  )
}
