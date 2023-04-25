import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { MenuButton } from './MenuButton'

export default function Navbar() {
  const router = useRouter()

  return (
    <div className="fixed text-lg gap-2 mx-3 flex flex-row lg:flex-col  p-4 font-neue">
      <Link href='/'>
        <MenuButton className={router.asPath === '/' ? 'text-red-500' : ''}>farhan</MenuButton>
      </Link>
      <Link href='/about'>
        <MenuButton className={router.asPath === '/about' ? 'text-red-500' : ''}>about-me</MenuButton>
      </Link>
      <Link href='/works'>
        <MenuButton className={router.asPath === '/works' ? 'text-red-500' : ''}>my-works </MenuButton>
      </Link>
      <Link href='/resume'>
        <MenuButton className={router.asPath === '/resume' ? 'text-red-500' : ''}>my-résumé</MenuButton>
      </Link>
    </div>
  )
}
