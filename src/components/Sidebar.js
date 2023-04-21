import Link from 'next/link'
const navigationByCategory = [
  {
    name: 'Cascos',
    href: '/category/cascos',
  },

  {
    name: 'Ropa',
    href: '/category/cascos',
  },

  {
    name: 'Guantes',
    href: '/category/cascos',
  },

  {
    name: 'Otros',
    href: '/category/cascos',
  },
]

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-[222px] mr-14 fixed top-16 bg-black">
      <ul>
        {navigationByCategory.map(({ name, href }) => {
          return (
            <li key={name}>
              <Link href={href} legacyBehavior>
                <a className="flex items-center gap-4 border-t-white/10 border-t h-16">
                  <svg
                    fill="none"
                    height="20"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <path d="M9 18l6-6-6-6"></path>
                  </svg>
                  <h4>{name}</h4>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
