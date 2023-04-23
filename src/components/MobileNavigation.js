import { navigationByCategory } from '@/constants/navigation'
import Link from 'next/link'
export default function MobileNavigation({ open, onClose }) {
  return (
    <>
      <nav className={`mobileMenu-wrapper ${open ? 'mobileMenu-open' : ''}`}>
        <ul>
          {navigationByCategory.map(({ href, title, icon }) => (
            <Link key={title} href={href} onClick={onClose}>
              <li className='flex space-x-4'>
                <img className='mobileMenu-icon' src={icon} alt={`iconno de ${title}`} />
                <span>{title}
                </span>
                </li>
            </Link>
          ))}
        </ul>
      </nav>
      <style jsx>
        {`
          .mobileMenu-wrapper {
            --gap: 24px;
            display: none;
            visibility: hidden;
            width: 100%;
            max-width: 100vw;
            padding: 0 var(--gap) var(--gap) var(--gap);
            background: #000;
            z-index: 2000;
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            overflow-y: scroll;
            transition: all 0.3s ease;
          }

          .mobileMenu-open {
            display: block;
            visibility: visible;
            top: calc(64px - 1px);
          }
          .mobileMenu-wrapper ul li {
            cursor: pointer;
            -webkit-user-select: none;
            user-select: none;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            color: #999;
            font-size: 1rem;
            height: calc(3 * 24px);
            border-bottom: 1px solid #333;
            transition: background-color 0.2s ease-in-out;
          }

          .mobileMenu-wrapper ul li:hover {
            background-color: #111;
          }

          .mobileMenu-icon {
            max-width: 50px;
            filter:  invert(1);

          }
        `}
      </style>
    </>
  )
}
