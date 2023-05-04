import AnimatedBody from '@/components/AnimatedText';
import AnimatedTitle from '@/components/AnimatedTitle';
import { MenuButton } from '@/components/MenuButton';
import { gsap } from 'gsap';
import dynamic from 'next/dynamic';
import React, { useEffect, useRef } from 'react'
import Marquee from '../components/Marquee';
import AboutText from '../components/AboutText';

const TechStack = dynamic(() => import('../components/TechStack'), {
  ssr: true,
})
export default function About() {

  return (

    <main className="flex font-neue ">
      <div className="w-4/12 hidden text-center items-center text-4xl capitalize  lg:border border-neutral-500/20 lg:flex h-8/12   ">

      </div>

      <div className="flex w-full h-full  gap-4  font-neue flex-col   justify-center">
        <div className='w-full lg:border border-neutral-500/20  justify-center p-4 flex flex-col gap-4'>
          <div className=' font-migra mt-24 text-7xl text-red-500' >

            <Marquee text='About me' />
          </div>
          <AboutText />
        </div>
        <TechStack />
      </div>


    </main>
  )
}
