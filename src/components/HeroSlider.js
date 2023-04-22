import { SwiperSlide, Swiper } from 'swiper/react'
import { Pagination, Scrollbar } from 'swiper'
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function HeroSlider() {
  const banners = [
    {
      src: '/assets/banner-cascos-1.webp',
      alt: 'banner de casco para motos 1 ',
    },
    {
      src: '/assets/banner-cascos-2.webp',
      alt: 'banner de casco para motos 2 ',
    },
    {
      src: '/assets/banner-cascos-3.webp',
      alt: 'banner de casco para motos 3 ',
    },
    {
      src: '/assets/banner-cascos-4.webp',
      alt: 'banner de casco para motos 4 ',
    },
  ]
  return (
    <Swiper
      id="hero-slider"
      style={{
        '--swiper-theme-color': 'orange',
        '--swiper-pagination-bullet-inactive-color': 'orange',
      }}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
    >
      {banners.map(({ src, alt }, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
            <img src={src} alt={alt} className="object-cover h-full w-full" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
