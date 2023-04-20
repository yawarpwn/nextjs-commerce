import Link from 'next/link'
export default function Logo() {
  return (
          <Link href='/' className="uppercase font-extrabold text-2xl">
            <span className="">MOTO</span>
            <span className="text-orange-500 font-light">Center</span>
          </Link>
  )
}
