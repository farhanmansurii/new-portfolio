import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Navbar() {
  const router = useRouter()

  return (
    <div className="fixed text-lg  text-blend-difference gap-2 mx-3 flex flex-row lg:flex-col  p-4 font-neue">
      <Link href='/'>
        <div className={`nav-link ${router.asPath === '/' ? 'text-red-500 mix-blend-difference' : ''}`}>farhan</div>
      </Link>
      <Link href='/about'>
        <div className={`nav-link ${router.asPath === '/about' ? 'text-red-500 mix-blend-difference' : ''}`}>about-me</div>
      </Link>
      <Link href='/works'>
        <div className={`nav-link ${router.asPath === '/works' ? 'text-red-500 mix-blend-difference' : ''}`}>my-works</div>
      </Link>
      <Link href='/resume'>
        <div className={`nav-link ${router.asPath === '/resume' ? 'text-red-500 mix-blend-difference' : ''}`}>my-résumé</div>
      </Link>
    </div>
  )
}
