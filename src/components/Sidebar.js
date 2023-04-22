import Link from 'next/link'
import { navigationByCategory } from '@/constants/navigation'

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-[222px] mr-14 fixed top-16 bg-black">
      <ul>
        {navigationByCategory.map(({ title, href }) => {
          return (
            <li key={title}>
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
                  <h4>{title}</h4>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
