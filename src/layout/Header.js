import ToggleMenu from '@/components/ToggleMenu'
import Logo from '@/components/Logo'

import { useState } from 'react'
export default function Header() {
  const navigation = [
    {
      title: 'Inicio',
      href: '/',
    },
    {
      title: 'Productos',
      href: '/productos',
    },
    {
      title: 'Nosotros',
      href: '/nosotros',
    },
    {
      title: 'Contacto',
      href: '/contacto',
    },
  ]

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  return (
    <>
      <header className="w-full max-w-7xl mx-auto px-4">
        <div className="min-h-[64px] flex items-center justify-center">
          {/* first nav */}
          <div className="flex justify-between items-center w-full flex-1">
            <Logo />
            <ToggleMenu open={open} handleOpen={handleOpen} />
          </div>

          {/* second nav */}
          <div className="hidden lg:flex items-center justify-center m-0 w-full flex-1">
            <nav>
              <div>
                <ul className="flex gap-2 justify-center ">
                  {navigation.map(({ title, href }) => (
                    <li
                      className="flex justify-center items-center"
                      key={title}
                    >
                      <a className="navigationMenu-link" href={href}>
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          {/* third nav */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="ml-auto">
              <span className='flex items-center gap-2'>
              <span className='navigationMenu-link'>Login</span>
              <a className='btn' href="#">Sign Up</a>
              </span>
            </div>
          </div>
        </div>
      </header>
      <style jsx>
        {`
          .navigationMenu-link {
            outline: none;
            -webkit-user-select: none;
            user-select: none;
            color: #a0a0a0;
            border-radius: 9999px;
            background: transparent;
            border: 0;
            /* font-family: var(--font-sans); */
            padding: 8px 12px;
            font-size: 14px;
            line-height: 1;
            cursor: pointer;
            transition-property: background, color;
            transition-duration: 0.2s;
            transition-timing-function: ease;
          }

          .navigationMenu-link:hover {
            color: #ededed;
          }

          .btn {
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            border-radius: 5px;
            color: #000;
            padding: 0 0.75rem;
            font-weight: 500;
            height: 32px;
            font-size: 0.876rem;
            /* font-family: var(--font-sans,var(--font-sans-fallback)); */
            transition-property: background, color;
            transition-duration: 0.15s;
            transition-timing-function: ease;
            border: 1px solid #fff;
          }

        .btn:hover {

            background-color: #000;
            color: #fff;
      }
        `}

      </style>
    </>
  )
}
