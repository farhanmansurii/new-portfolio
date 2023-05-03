import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react'
import AnimatedWords2 from './AnimatedWords2';
import AnimatedWords from './AnimatedWords2';
import SplitType from 'split-type';

export default function Name() {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    if (ref.current) {
      const myText = new SplitType(ref.current, {
        types: 'words'
      })

      gsap.to(myText.words, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power4.out",
        // onComplete: () => split.revert(),
      });
      console.log(myText.words)
    }

  }, []);
  return (
    <div className=' h-[80vh] justify-center font-neue p-6 flex  flex-col'>
      <div className='text-7xl h-fit font-migra lg:text-8xl italic capitalize  ' >
        <span >

          Farhan <span className='text-red-500'> mansuri</span>
        </span>
      </div>
      <AnimatedWords2
        title={"Frontend/FullStack developer"}
        style={`inline-flex flex-wrap items-start text-left text-2xl lg:text-4xl font-neue  `}
      />
      <AnimatedWords2
        title={"specialised in Websites & Webapps"}
        style={`inline-flex flex-wrap items-start text-left  text-2xl w-10/12 lg:text-4xl font-neue  `}
      />
      {/* <div ref={ref} className='text-3xl text-black -z-50  lg:text-4xl'> Frontend/FullStack developer
        <br /> specialised in <span className='font-migra'>

          Websites &
        </span >
        <span className='font-migra'> Webapps</span>
      </div> */}
      <div className='flex gap-4 mt-4'>
        <a href="mailto:mansurifarhafm@gmail.com" className='rounded-full border p-4 hover:scale-105 duration-150 hover:bg-black hover:text-white'>
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            className='w-7 h-7'
          >
            <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
          </svg>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/farhanmansurii" className='rounded-full border p-4 hover:scale-105 duration-150 hover:bg-black hover:text-white'>
          <svg
            viewBox="0 0 448 512"
            fill="currentColor"

            className='w-7 h-7'
          >
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
          </svg>
        </a>
        <a target="_blank" href="https://www.github.com/farhanmansurii" className=' rounded-full border p-4 hover:scale-105 duration-150 hover:bg-black hover:text-white'>
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            className='w-7 h-7 '
          >
            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
          </svg>
        </a>
      </div>
    </div>
  )
}
