import { generateWhatsappLink } from '@/constants/links'
import ProductSlide from './ProductSlide'
import SEO from './SEO'
import { useRouter } from 'next/router'
import { config } from '@/config'
import RichText from './RichText'
import { getDiscount } from '@/utils'

export default function ProductPage({ product }) {
  const { offert, name, description, price, brand, images, dataSheet, details } = product

  const discount = getDiscount({price, offert})


  const router = useRouter()
  const link = new URL(router.asPath, config.URL)
  const generateLink = generateWhatsappLink({ name, link: link.href })
  return (
    <>
      <SEO description={description} title={name} image={images[0].url} />
      <div className="flex flex-col lg:flex-row flex-wrap my-8 px-4 md:px-0">
        <div className="w-full md:w-[60%] mb-8">
          <ProductSlide images={images} />
        </div>
        <div className="w-full md:w-[calc(40%-3rem)] flex flex-col space-y-4 mb-8 ml-auto">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="mb-2">
            <span className="text-base font-semibold">{brand}</span>
          </p>
          <div className="min-h-[100px]">
            <p className="mb-4">{description}</p>
          </div>
          {offert ? (
            <>
              <div>
                <span className="line-through">
                  S/. {price}.00
                </span>
                <span className="ml-2">
                  - {discount}%
                </span>
              </div>
              <p className="text-3xl font-bold text-red-500">S/. {offert}.00</p>
            </>
          ) : (
            <p className="text-3xl font-bold text-red-500">S/. {price}.00</p>
          )}

          <div className="flex gap-4">
            <a
              className="bg-green-500 hover:bg-green-600 transition-all p-4 text-white rounded-lg w-[50%] flex items-center gap-2 text-sm cursor-pointer"
              href={generateLink}
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="h-8 w-8"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fillRule="nonzero"
                    d="M7.253 18.494l.724.423A7.953 7.953 0 0 0 12 20a8 8 0 1 0-8-8c0 1.436.377 2.813 1.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 0 1-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 0 0 .367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 0 1 .378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 0 1-.21.302 2.378 2.378 0 0 1-.33.288 3.71 3.71 0 0 1-.125.09 5.024 5.024 0 0 1-.383.22 1.99 1.99 0 0 1-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 0 1-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 0 1 6.9 9.62a2.729 2.729 0 0 1 .564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 0 1 .371-.1z"
                  ></path>
                </g>
              </svg>
              Cotiza vía Whatsapp
            </a>
            <a
              className="bg-primary hover:bg-primary-dark transition-all p-4 text-white rounded-lg w-[50%] flex items-center gap-2 text-sm"
              href={dataSheet ? dataSheet : '#'}
              target="_blank"
            >
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                height="2rem"
                width="2rem"
                viewBox="0 0 24 24"
                className="h-8 w-8"
              >
                <g>
                  <path d="M12.9,0.8c0.4,0.1,0.7,0.4,0.6,0.8c-0.2,0.9-1.3,0.5-2,0.6c-2.2,0-4.5,0-6.7,0c-0.5,0-0.9,0.4-0.9,0.9c0,6,0,12,0,18 c0,0.6,0.4,0.9,0.9,0.9c4.8,0,9.7,0,14.5,0c0.5,0,0.9-0.4,0.9-0.9c0-3.9-0.1-7.8,0-11.7c0.2-0.8,1.4-0.6,1.3,0.3c0,4,0,8,0,11.9 c0,1-0.7,1.7-1.6,1.8c-5.3,0-10.7,0-16,0c-0.8-0.1-1.4-0.7-1.5-1.5c0-6.5,0-13,0-19.5C2.5,1.5,3.2,0.9,4,0.8 C6.9,0.8,9.9,0.8,12.9,0.8z"></path>
                  <path d="M21.6,7.8c-0.1,0.2-0.2,0.4-0.5,0.4c-2.2,0-4.3,0-6.5,0c-0.3-0.1-0.4-0.3-0.4-0.6c0-2,0-4.1,0-6.1c0-0.3,0.1-0.5,0.4-0.6 c0.1,0,0.2,0,0.2,0c2.3,2.2,4.6,4.4,6.8,6.8C21.6,7.6,21.6,7.7,21.6,7.8z M15.7,3.8c0,0.9,0,1.9,0,2.8c0,0.1,0,0.1,0.1,0.1 c0.9,0,1.9,0,2.8,0C17.6,5.7,16.7,4.7,15.7,3.8z"></path>
                  <path d="M12.2,10.1c0,0.9-0.2,1.9-0.3,2.8c0.3,0.9,0.8,1.7,1.5,2.3c0.3,0.2,0.6,0.4,0.9,0.6c0.7,0,1.4-0.2,2.1-0.1 c0.8,0,1.8,0.2,1.5,1.2c-0.1,0.4-0.3,0.6-0.7,0.6c-1.2,0.1-2.3-0.6-3.4-1c-1.4,0.2-2.7,0.5-4,0.9C9.2,18.1,9,19,8.4,19.6 c-0.5,0.6-1.4,1.3-2.1,0.7c-0.2-0.1-0.2-0.3-0.1-0.5c0.4-1.2,1.7-1.8,2.7-2.4c0.9-1.3,1.5-2.8,2.2-4.2c0.1-1-1.4-4,0.3-4.3 C11.9,8.8,12.3,9.5,12.2,10.1z M13.1,16.1c-0.7-0.6-1.3-1.2-1.7-2c-0.4,1-0.9,1.9-1.4,2.9C11.1,16.6,12.1,16.3,13.1,16.1z M11.5,11.7C11.5,11.7,11.5,11.7,11.5,11.7c0.4-0.7,0.4-1.5,0.1-2.2c0,0-0.1-0.1-0.2-0.1C11.2,10.1,11.4,10.9,11.5,11.7z M15.4,16.4C15.4,16.4,15.4,16.5,15.4,16.4C18.1,17.7,18.3,16.1,15.4,16.4z M6.8,20c0.7-0.5,1.2-1.2,1.6-1.9 C7.8,18.6,7.2,19.2,6.8,20z"></path>
                </g>
              </svg>
              Ficha Técnica
            </a>
            <div></div>
          </div>
        </div>
        <div className="mt-4 md:mt-0 md:w-[60%]">
          <div className="p-5 border-b border-white/10 flex items-center justify-between cursor-pointer">
            <h2 className="text-xl">Detalles de Producto</h2>
            {/* <ChevronDown fill="currentColor" /> */}
          </div>
          <div className="py-6 px-4 richText">
            {details && <RichText details={details} />}
          </div>
        </div>
        <div className="w-ful md:w-[calc(40%-3rem)] ml-auto">
          <div className="text-center border p-3 rounded-md">
            <p>
              ANTES DE REALIZAR TU COMPRA, REALIZAR TU CONSULTAS DIRECTAMENTE AL
              WHATSAPP
            </p>
          </div>
          <div className="flex items-center border-b p-2 space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div>
              <p className="uppercase">Disponibilidad</p>
              <p>Disponible</p>
            </div>
          </div>
          <div className="flex items-center border-b p-2 space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
              ></path>
            </svg>
            <div>
              <p className="uppercase">Pago contra entrega</p>
              <p>Disponible</p>
            </div>
          </div>
          <div className="flex items-center p-2 space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              ></path>
            </svg>
            <div>
              <p className="uppercase">Envío a provincia por agencia</p>
              <p>Disponible</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
