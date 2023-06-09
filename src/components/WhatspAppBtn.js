import { WHATSAPP_LINK } from '../constants/links'
import { useState } from 'react'

export default function WhatsappBtnPopup() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="fixed bottom-[8px] right-[8px] z-[45] animate-bounce ">
        <div
          className={`
          duration-400 transition ease-in-out
          ${
            isOpen
              ? 'invisible translate-y-10 opacity-0 '
              : 'visible translate-y-0 opacity-100'
          }
          absolute right-full top-[10px] mr-1  hidden w-[155px] 
          rounded-md bg-[#f5f7f9] py-[6px] px-3 text-xs tracking-wide text-[#43474e] shadow-md md:block `}
        >
          <strong>Chatea con nostros</strong>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="whatsapp contacto"
          className={`
          flex h-[42px] w-[42px] cursor-pointer
          items-center justify-center rounded-full bg-green-500 text-white outline-none`}
        >
          {isOpen ? (
            <svg
              baseProfile="tiny"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              overflow="visible"
              xmlSpace="preserve"
              width={24}
              height={24}
            >
              <path
                fill="none"
                stroke="#fff"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 22 22 2M2 2l20 20"
              />
            </svg>
          ) : (
            <svg
              baseProfile="tiny"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              overflow="visible"
              xmlSpace="preserve"
              width={26}
              height={26}
              fill="#fff"
            >
              <path d="m6.3 19.9.9.5c1.5.9 3.1 1.3 4.8 1.3 5.3 0 9.6-4.3 9.6-9.6S17.3 2.5 12 2.5s-9.6 4.3-9.6 9.6c0 1.7.4 3.4 1.3 4.8l.5.9-.8 2.9 2.9-.8zM0 24.1l1.6-6C.5 16.3 0 14.2 0 12.1 0 5.5 5.4.1 12 .1s12 5.4 12 12-5.4 12-12 12c-2.1 0-4.2-.6-6-1.6l-6 1.6zM7.6 6.4h.7c.2 0 .4.1.5.3.4.8.7 1.6 1 2.4.1.2 0 .4-.1.6-.1.2-.2.3-.3.4-.1.4-.4.7-.4.7s-.1.1-.1.3c0 .1.1.2.1.2l.1.1c.3.5.7 1 1.2 1.5l.4.4c.6.5 1.2.9 1.9 1.2.1 0 .2.1.3.1.1 0 .2.1.2.1.2 0 .3 0 .4-.2.9-1.1.9-1.1 1-1.1.1-.1.3-.2.5-.2h.2c.6.3 1.7.7 1.7.7l.7.3c.1.1.2.2.2.3v.4c0 .3-.1.7-.2.9-.1.1-.1.3-.3.4-.1.1-.3.2-.4.3l-.1.1c-.1.1-.3.2-.5.3-.3.2-.7.3-1 .3h-.7l-.7-.1c-1.7-.4-3.3-1.3-4.6-2.5-.3-.2-.5-.5-.8-.8-1.1-1.1-1.9-2.2-2.4-3.3-.1-.1-.3-.7-.3-1.3 0-.7.2-1.4.7-2 .1-.1.2-.2.3-.4.2-.1.3-.2.4-.2.1-.1.3-.1.4-.2z" />
            </svg>
          )}
        </button>
      </div>

      {/* Colaboradores */}
      <div
        className={`
            transition duration-300 bg-black/90
            ${
              !isOpen
                ? 'invisible translate-x-12 opacity-0'
                : 'visible translate-x-0 opacity-100'
            }

        max-w-[calc(100% - 50px)] fixed right-[25px] bottom-[73px] z-50 mx-auto max-w-xs`}
      >
        <div>
          <div className="WhatsappBtnPopup-Wrapper rounded-lg p-4 shadow-lg">
            <div className="text-center text-sm ">
              El equipo suele responder en unos minutos
            </div>
            <div className=" mt-[14px] bg-slate-50/5 rounded">
              <a
                href={`${WHATSAPP_LINK}`}
                target="_blank"
                className="relative flex items-center space-x-4  rounded-r-md border-l-2 border-green-500  py-4 px-3 shadow-sm   "
              >
                <div className="w-10 h-10">
                  <img src="/assets/foto.jpg" alt="Jesus Saavedra Maldonado" />
                </div>
                <div className="">
                  <div className="text-sm">Jesus Maldonado</div>
                  <div className="text-[11px]">Gerente Comercial</div>
                  <div className="text-green-500 text-sm flex items-center gap-2">
                    {' '}
                    <span className="inline-block w-3 h-3 rounded-3xl bg-green-500" />
                    online
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <svg
                    className="h-10 w-10 text-green-500"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
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
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
