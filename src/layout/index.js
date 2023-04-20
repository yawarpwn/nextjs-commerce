import Header from './Header'
import Footer from './Footer'
import WhatsappBtnPopup from '@/components/WhatspAppBtn'

export default function Layout ({children}) {
  return (
  <>
      <Header/>
      {children}
      <WhatsappBtnPopup />
      <Footer />
  </>
  )
}
