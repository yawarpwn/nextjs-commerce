import Link from 'next/link'
export default function Logo() {
  return (
    <>
      <Link href="/" className="uppercase font-extrabold text-2xl">
        <img
          className="logo"
          src="https://www.revzilla.com/images/sites/revzilla/support/header/logo-c416dd1a00f74c1039a20b951088ad92.svg?vsn=d"
          alt='Logotipo de motos'
        />
        {/* <span className="">MOTO</span> */}
        {/* <span className="text-orange-500 font-light">Center</span> */}
      </Link>
      <style jsx>{`
        .logo {
          width: 136px;
          height: 64px;
        }
      `}</style>
    </>
  )
}
