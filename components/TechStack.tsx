import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react'
import { FaReact, FaReacteurope } from 'react-icons/fa'
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from 'react-icons/io'
import { SiExpress, SiFramer, SiGithub, SiGraphql, SiGreensock, SiJenkins, SiMongodb, SiNextdotjs, SiPrisma, SiReactquery, SiRedux, SiTailwindcss, SiTrpc, SiTypescript } from 'react-icons/si'
import { motion } from 'framer-motion';
import GSAPLines from './GSAPLines';

const techVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 }, staggerChildren: 0.05 },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};
export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {

      gsap.fromTo(ref.current
        ,
        {
          y: 40,
          opacity: 0,
          ease: 'power4.out'
        },
        {
          y: 0,
          opacity: 1,
          stagger: {
            amount: 0.15,
          },
          duration: 0.5,
          ease: 'power4.out'
        }
      )
    }

  }, []);
  return (
    <div className='my-10 w-full border-neutral-500  ' >
      <div className='text-2xl lg:text-5xl lg:w-10/12 p-4'>
        <GSAPLines text=' My development stack is focused on performance & accessibility with delightful interactions.' />

      </div>
      <div ref={ref} className='p-4 w-[99%] text-sm lg:text-lg  flex flex-wrap gap-3'>
        <div className='rounded-full flex shadow-2xl shadow-red-500
         border-2 hover:text-white hover:bg-red-500 hover:border-red-500 duration-150  border-black  px-3 py-2 items-center gap-1
        '><IoLogoHtml5 /> HTML</div>
        <div className='rounded-full flex border-2 shadow-2xl shadow-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 duration-150  border-black  px-3 py-2 items-center gap-1
        '><IoLogoCss3 /> CSS</div>
        <div className='rounded-full flex border-2 shadow-2xl shadow-yellow-500 hover:text-white hover:bg-yellow-500 hover:border-yellow-500 duration-150  border-black  px-3 py-2 items-center gap-1
        '><IoLogoJavascript /> Javascript </div>
        <div className='rounded-full flex border-2 shadow-2xl shadow-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 duration-150  border-black  px-3 py-2 items-center gap-1
        '><SiTypescript />Typescript</div>
        <div className='rounded-full flex border-2 shadow-2xl shadow-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 duration-150  border-black  px-3 py-2 items-center gap-1
        '><FaReact />React</div>
        <div className='rounded-full flex border-2 shadow-2xl  hover:text-white hover:bg-black hover:border-black duration-150  border-black  px-3 py-2 items-center gap-1
        '><SiNextdotjs />Next.js</div>
        <div className='rounded-full flex border-2 shadow-2xl shadow-green-500 hover:text-white hover:bg-green-500 hover:border-green-500 duration-150  border-black  px-3 py-2 items-center gap-1
        '><SiExpress />Express.js</div>
        <div className='rounded-full flex border-2 shadow-2xl shadow-green-700 hover:text-white hover:bg-green-700 hover:border-green-700 duration-150  border-black  px-3 py-2 items-center gap-1
        '><SiMongodb />Mongodb</div>

        <div className='rounded-full flex border-2 shadow-2xl shadow-purple-500 hover:text-white hover:bg-purple-500 hover:border-purple-500 duration-150  border-black  px-3 py-2 items-center gap-1
        '><SiRedux />Redux </div>
        <div className='rounded-full flex border-2 shadow-2xl shadow-purple-800 hover:text-white hover:bg-purple-800 hover:border-purple-800 duration-150  border-black  px-3 py-2 items-center gap-1
        '><SiGraphql />GraphQL</div>
        <div className='rounded-full flex border-2 shadow-2xl shadow-red-500 hover:text-white hover:bg-red-500 hover:border-red-500 duration-150  border-black  px-3 py-2 items-center gap-1
        '><SiReactquery />Reactquery</div>
        <div className='rounded-full flex border-2 shadow-2xl shadow-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 duration-150  border-black  px-3 py-2 items-center gap-1
       '><SiPrisma />Prisma</div>
        <div className='rounded-full flex border-2 shadow-2xl shadow-black hover:text-white hover:bg-black duration-150  border-black  px-3 py-2 items-center gap-1
       '><SiFramer />Framer-Motion</div>
        <div className='rounded-full flex border-2 shadow-2xl shadow-green-500 hover:text-white hover:bg-green-500 duration-150 border-black hover:border-green-500  px-3 py-2 items-center gap-1
       '><SiGreensock />GSAP</div>
        <div className='rounded-full flex border-2 shadow-2xl  hover:text-white hover:bg-black hover:border-black duration-150  border-black  px-3 py-2 items-center gap-1
        '><SiGithub />Github</div>
        <div className='rounded-full flex border-2 shadow-2xl shadow-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 duration-150  border-black  px-3 py-2 items-center gap-1
        '><SiTailwindcss />Tailwindcss</div>
        <div className='rounded-full flex border-2 shadow-2xl shadow-blue-500 hover:text-white hover:bg-blue-800 hover:border-blue-800 duration-150  border-black  px-3 py-2 items-center gap-1
        '><SiTrpc />TRPC</div>

        <div className='rounded-full flex border-2 hover:text-white shadow-2xl shadow-red-700  hover:bg-red-700 hover:border-red-700 duration-150  border-black  px-3 py-2 items-center gap-1
        '><SiJenkins />Jenkins</div>


      </div>
    </div>
  )
}
