import React from 'react'
import AnimatedBody from './AnimatedText'

export default function AboutText() {
  return (
    <div className='gap-5 flex flex-col'>
      <div className='text-3xl lg:text-5xl lg:w-10/12  '>

        <AnimatedBody delay={2} text=' Im an Indian front-end/full-stack and creative
              web developer keen eye for design and a knack for solving complex problems through simple and interactive interfaces.
           '/>  </div>
      <div className='lg:text-xl text-lg lg:w-9/12'>
        <AnimatedBody delay={2.3} text='  I am a Computer Science post-graduate, and curiosity dragged me to learn HTML &
              CSS. Then, I learned Reactjs and TypeScript, among many other javascript frameworks then working on the MERN Stack.
            '/>
      </div>
      <div className='lg:text-xl text-lg lg:w-9/12'>
        <AnimatedBody delay={2.6} text=' My expertise in HTML, CSS, JavaScript, and React allows me to create dynamic and responsive web pages that engage users and deliver a seamless experience. Whether its crafting beautiful user interfaces, optimizing website performance, or developing complex web applications, I am always committed to delivering high-quality work that exceeds expectations.
            '/>
      </div>

      <div className='lg:text-xl text-lg lg:w-9/12'>
        <AnimatedBody delay={2.9} text=' In addition to my technical skills, I have a strong sense of creativity and an eye for detail that allows me to create visually stunning designs that are both functional and aesthetically pleasing. I believe that good design is the key to creating great user experiences, and I strive to incorporate this philosophy into everything I do.
             '/>

      </div>
    </div>
  )
}
