import React, { useEffect } from 'react'
import AnimatedBody from './AnimatedText'
import SplitType from 'split-type'
import { gsap } from 'gsap'
import GSAPLines from './GSAPLines'

export default function AboutText() {
  // useEffect(() => {
  //   const tl = gsap.timeline()
  //   const ourText = new SplitType('p.our-text', { types: 'lines' })
  //   const chars = ourText.lines
  //   tl.from(
  //     chars,

  //     {
  //       y: 200,
  //       skewY: 10,
  //       delay: 1,
  //       opacity: 1,
  //       stagger: {
  //         amount: 0.4
  //       },
  //       duration: 1,
  //       ease: 'power4.out',
  //     }
  //   )

  //   return () => {
  //     chars
  //   }

  // }, [])

  return (
    <div className=' flex flex-col'>
      <div className='text-3xl lg:text-5xl lg:w-10/12  '>
        <GSAPLines
          text='Im an Indian front-end/full-stack and creative
          web developer keen eye for design and a knack for solving complex problems through simple and interactive interfaces.'
        />
      </div>
      <div className='lg:text-xl text-lg lg:w-9/12'>
        <GSAPLines text='  I am a Computer Science post-graduate, and curiosity dragged me to learn HTML &
              CSS. Then, I learned Reactjs and TypeScript, among many other javascript frameworks then working on the MERN Stack.
            '/>
      </div>
      <div className='lg:text-xl text-lg lg:w-9/12'>
        <GSAPLines text=' My expertise in HTML, CSS, JavaScript, and React allows me to create dynamic and responsive web pages that engage users and deliver a seamless experience. Whether its crafting beautiful user interfaces, optimizing website performance, or developing complex web applications, I am always committed to delivering high-quality work that exceeds expectations.
            '/>
      </div>

      <div className='lg:text-xl text-lg lg:w-9/12'>
        <GSAPLines text=' In addition to my technical skills, I have a strong sense of creativity and an eye for detail that allows me to create visually stunning designs that are both functional and aesthetically pleasing. I believe that good design is the key to creating great user experiences, and I strive to incorporate this philosophy into everything I do.
             '/>

      </div>
    </div>
  )
}
