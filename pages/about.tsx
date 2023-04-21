import TechStack from '@/components/TechStack'

import React from 'react'


export default function About() {


  return (

    <main className="flex font-neue ">
      <div className="w-4/12 hidden text-center items-center text-4xl capitalize  lg:border border-neutral-500/20 lg:flex h-8/12   ">

      </div>

      <div className="flex w-full h-full  gap-4  font-neue flex-col   justify-center">
        <div className='w-full lg:border border-neutral-500/20  justify-center p-4 flex flex-col gap-4'>

          <div className='text-lg w-full my-24 h-full  flex gap-5 flex-col  '>
            <h1 className='text-header font-migra mt-24 text-7xl  text-red-500'>about <span className='italic'>me</span></h1>

            <div className='text-3xl lg:text-5xl lg:w-10/12  '>
              Im an Indian front-end/full-stack and creative
              web developer keen eye for design and a knack for solving complex problems through simple and interactive interfaces.
            </div>
            <div className='lg:text-xl text-lg lg:w-9/12'>
              I am a Computer Science post-graduate, and curiosity dragged me to learn HTML &
              CSS. Then, I learned Reactjs and TypeScript, among many other javascript frameworks then working on the MERN Stack.
            </div>
            <div className='lg:text-xl text-lg lg:w-9/12'>
              My expertise in HTML, CSS, JavaScript, and React allows me to create dynamic and responsive web pages that engage users and deliver a seamless experience. Whether its crafting beautiful user interfaces, optimizing website performance, or developing complex web applications, I am always committed to delivering high-quality work that exceeds expectations.

            </div>

            <div className='lg:text-xl text-lg lg:w-9/12'>
              In addition to my technical skills, I have a strong sense of creativity and an eye for detail that allows me to create visually stunning designs that are both functional and aesthetically pleasing. I believe that good design is the key to creating great user experiences, and I strive to incorporate this philosophy into everything I do.

            </div>
          </div>
        </div>
        <TechStack />
      </div>

    </main>
  )
}
