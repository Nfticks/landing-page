import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-7xl mx-auto sm:px-10">
        <div className="flex items-center justify-around h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image src="/images/logo_white.png" alt="Logo" width={186} height={46} unoptimized />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className='mr-8'>
                <Link
                  href="/"
                  className="tracking-wide font-roboto font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li className='mr-8'>
                <Link
                  href="/"
                  className="tracking-wide font-roboto font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Menu
                </Link>
              </li>
              <li className='mr-8'>
                <Link
                  href="/"
                  className="tracking-wide font-roboto font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Services
                </Link>
              </li>
              <li className='mr-8'>
                <Link
                  href="/"
                  className="tracking-wide font-roboto font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Promo
                </Link>
              </li>
              <li className='mr-8'>
                <Link href="/services" className="btn bg-indigo-500 rounded-[45px]
                text-white
                text-sm
                font-semibold
                font-openSans
                tracking-wide " 
                >
                  Connect Wallet
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}