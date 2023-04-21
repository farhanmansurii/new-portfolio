import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Navbar() {
  const router = useRouter()

  return (
    <div className="fixed text-lg gap-2 mx-3 flex flex-row lg:flex-col  p-4 font-neue">
      <Link href='/'>
        <div className={router.asPath === '/' ? 'text-red-500' : ''}>farhan</div>
      </Link>
      <Link href='/about'>
        <div className={router.asPath === '/about' ? 'text-red-500' : ''}>about-me</div>
      </Link>
      <Link href='/works'>
        <div className={router.asPath === '/works' ? 'text-red-500' : ''}>my-works </div>
      </Link>
      <Link href='/resume'>
        <div className={router.asPath === '/resume' ? 'text-red-500' : ''}>my-résumé</div>
      </Link>
    </div>
  )
}
