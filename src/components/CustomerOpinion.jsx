import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Scrollbar } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
const customersOpinions = [
  {
    text: ' Muchísimos Gracias por tus desvelos para conseguir que estuvieran a tiempo. Eso se llama ser un Profesional. Un saludo. ',
    name: 'Julián',
  },

  {
    text: 'Valee gracias estoy contento con su atencion teneis un cliente fijo.',
    name: 'Moises',
  },

  {
    text: ' Sólo agradecer la atención y trato recibido excelente al igual que cuando algo no nos gusta nos quejamos.',
    name: 'Herminio',
  },

  {
    text: ' Perfecto. Muchas gracias y felicidades por el servicio. Ya tenéis otro cliente mas. ',
    name: 'Raul',
  },

  {
    text: 'Valee gracias estoy contento con su atencion teneis un cliente fijo.',
    name: 'Moises',
  },

  {
    text: 'sois unos máquinas y da gusto comprar en vuestra tienda.. seguir así.  un abrazo.',
    name: 'Carlos',
  },
]

export default function CustomerOpinion() {
  return (
    <section className="customerOpinion max-w-7xl mx-auto px-4 w-full pb-12">
      <h2 className="text-2xl font-bold text-center mb-8 uppercase">
        Lo que nuestros clientes opinan
      </h2>
      <div className="max-w-3xl mx-auto border-t border-b rounded p-4">
        <Swiper
          style={{
            '--swiper-theme-color': 'orange',
            '--swiper-pagination-bullet-inactive-color': 'orange',
          }}
          tag="ul"
          loop
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {customersOpinions.map(({ text, name }, index) => (
            <SwiperSlide tag="li" key={index}>
              <div className="flex flex-row items-center mb-20">
                <div className="flex flex-col   w-full">
                  <p className="text-center mb-4">&quot; {text} &quot;</p>
                  <h4 className="text-center font-bold"> {name} </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
