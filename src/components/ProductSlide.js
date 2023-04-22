import { SwiperSlide, Swiper } from 'swiper/react'
import { Pagination, Scrollbar, Navigation, Thumbs } from 'swiper'
import { useState } from 'react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export default function ProductSlide({ images }) {
  const [thumbSwiper, setThumbSwiper] = useState(null)
  return (
    <div className="flex">
      <div className="hidden lg:flex justify-center w-[20%]">
        <Swiper
          id="thumb-swiper"
          className="thumb-swiper"
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbSwiper}
          spaceBetween={10}
          slidesPerView={4}
          direction="vertical"
        >
          {images.map(({ url, title }, index) => (
            <SwiperSlide key={index}>
              <div className=" w-[75px] h-[75px] p-2">
                <img
                  src={url}
                  alt={title}
                  className="object-contain h-full w-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full lg:w-[80%]">
        <Swiper
          style={{
            '--swiper-theme-color': 'orange',
            '--swiper-pagination-bullet-inactive-color': 'orange',
          }}
          id="main-swiper"
          className="main-swiper"
          modules={[Pagination, Navigation, Thumbs]}
          thumbs={{
            swiper: thumbSwiper && !thumbSwiper.destroyed ? thumbSwiper : null,
          }}
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          {images.map(({ url, title }, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[200px] md:h-[400px] lg:h-[500px]">
                <img src={url} alt={title} className="object-contain " />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
