import Link from 'next/link'
import { navigationByCategory } from '@/constants/navigation'

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-[200px] mr-14 fixed top-16 bg-black">
      <ul>
        {navigationByCategory.map(({ title, href, icon }) => {
          return (
            <li key={title}>
              <Link href={href} legacyBehavior>
                <a className="flex items-cener  border-t-white/10 border-t h-16">
                  <div className='flex gap-4 items-center'>
                    <img className='w-8 h-8 invert' src={icon} alt={`icon de ${title}`} />
                  <span>{title}</span>
                  </div>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
