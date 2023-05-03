import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Navbar() {
  const router = useRouter()

  return (
<<<<<<< HEAD
    <div className="fixed text-lg  text-blend-difference gap-2 mx-3 flex flex-row lg:flex-col  p-4 font-neue">
=======
    <div className="fixed text-lg gap-2 mx-3 flex flex-row lg:flex-col p-4 font-neue">
>>>>>>> 77e830f5cec556491abbe3b83423f75ec162da59
      <Link href='/'>
        <div className={`nav-link ${router.asPath === '/' ? 'text-red-500 mix-blend-difference' : 'text-black'}`}>farhan</div>
      </Link>
      <Link href='/about'>
        <div className={`nav-link ${router.asPath === '/about' ? 'text-red-500 mix-blend-difference' : 'text-black'}`}>about-me</div>
      </Link>
      <Link href='/works'>
        <div className={`nav-link ${router.asPath === '/works' ? 'text-red-500 mix-blend-difference' : 'text-black'}`}>my-works</div>
      </Link>
      <Link href='/resume'>
        <div className={`nav-link ${router.asPath === '/resume' ? 'text-red-500 mix-blend-difference' : 'text-black'}`}>my-résumé</div>
      </Link>
    </div>
  )
}
