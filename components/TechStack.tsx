import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react'
import { FaReact, FaReacteurope } from 'react-icons/fa'
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from 'react-icons/io'
import { SiExpress, SiFramer, SiGithub, SiGraphql, SiJenkins, SiMongodb, SiNextdotjs, SiPrisma, SiReactquery, SiRedux, SiTailwindcss, SiTrpc, SiTypescript } from 'react-icons/si'
export default function TechStack() {

  return (
    <div className='my-10 w-full border-neutral-500  ' >
      <div className=' text-3xl lg:text-5xl w-10/12 p-4 '>
        My development stack is focused on
        performance & accessibility with delightful
        interactions.
      </div>
      <div className='p-4 flex flex-wrap gap-3'>
        <div className='rounded-full flex border-2 hover:text-white hover:bg-red-500 hover:border-red-500 duration-150  border-black  px-3 py-2 items-center gap-1
        '><IoLogoHtml5 /> HTML</div>
        <div className='rounded-full flex border-2 hover:text-white hover:bg-blue-500 hover:border-blue-500 duration-150  border-black  px-3 py-2 items-center gap-1
        '><IoLogoCss3 /> CSS</div>
        <div className='rounded-full flex border-2 hover:text-white hover:bg-yellow-500 hover:border-yellow-500 duration-150  border-black  px-3 py-2 items-center gap-1
        '><IoLogoJavascript /> Javascript </div>
        <div className='rounded-full flex border-2 hover:text-white hover:bg-blue-500 hover:border-blue-500 duration-150  border-black  px-3 py-2 items-center gap-1
        '><SiTypescript />Typescript</div>
        <div className='rounded-full flex border-2 hover:text-white hover:bg-blue-500 hover:border-blue-500 duration-150  border-black  px-3 py-2 items-center gap-1
        '><FaReact />React</div>
        <div className='rounded-full flex border-2 hover:text-white hover:bg-black hover:border-black duration-150  border-black  px-3 py-2 items-center gap-1
        '><SiNextdotjs />Next.js</div>
        <div className='rounded-full flex border-2 hover:text-white hover:bg-green-500 hover:border-green-500 duration-150  border-black  px-3 py-2 items-center gap-1
        '><SiExpress />Express.js</div>
        <div className='rounded-full flex border-2 hover:text-white hover:bg-green-700 hover:border-green-700 duration-150  border-black  px-3 py-2 items-center gap-1
        '><SiMongodb />Mongodb</div>

        <div className='rounded-full flex border-2 hover:text-white hover:bg-purple-500 hover:border-purple-500 duration-150  border-black  px-3 py-2 items-center gap-1
        '><SiRedux />Redux </div>
        <div className='rounded-full flex border-2 hover:text-white hover:bg-purple-800 hover:border-purple-800 duration-150  border-black  px-3 py-2 items-center gap-1
        '><SiGraphql />GraphQL</div>
        <div className='rounded-full flex border-2 hover:text-white hover:bg-red-500 hover:border-red-500 duration-150  border-black  px-3 py-2 items-center gap-1
        '><SiReactquery />Reactquery</div>
        <div className='rounded-full flex border-2 hover:text-white hover:bg-blue-500 hover:border-blue-500 duration-150  border-black  px-3 py-2 items-center gap-1
       '><SiPrisma />Prisma</div>
        <div className='rounded-full flex border-2 hover:text-white hover:bg-black hover:border-black duration-150  border-black  px-3 py-2 items-center gap-1
        '><SiGithub />Github</div>
        <div className='rounded-full flex border-2 hover:text-white hover:bg-blue-500 hover:border-blue-500 duration-150  border-black  px-3 py-2 items-center gap-1
        '><SiTailwindcss />Tailwindcss</div>
        <div className='rounded-full flex border-2 hover:text-white hover:bg-blue-800 hover:border-blue-800 duration-150  border-black  px-3 py-2 items-center gap-1
        '><SiTrpc />TRPC</div>

        <div className='rounded-full flex border-2 hover:text-white hover:bg-red-700 hover:border-red-700 duration-150  border-black  px-3 py-2 items-center gap-1
        '><SiJenkins />Jenkins</div>


      </div>
    </div>
  )
}
