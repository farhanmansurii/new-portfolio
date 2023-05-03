import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

const TechStack = dynamic(() => import('../components/TechStack'), {
  loading: () => <p></p>, ssr: false,
})
const Name = dynamic(() => import('../components/Name'), {
  loading: () => <p></p>, ssr: false,
})
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const textRef = useRef(null);
  // useEffect(() => {
  //   const text = textRef.current;

  //   gsap.set(text, { xPercent: 100 }); // Start the text off screen to the right

  //   const animation = gsap.to(text, {
  //     duration: 10, // The duration of the animation
  //     xPercent: -100, // Move the text to the left side of the screen
  //     ease: "none", // Use linear easing for a constant speed
  //     repeat: -1, // Repeat the animation indefinitely
  //   });

  //   return () => {
  //     animation.kill(); // Stop the animation when the component unmounts
  //   };
  // }, []);

  return (<>
    <main className="flex ">

      <div className=" w-full justify-around mx-auto  flex items-center">
        <div className="w-4/12 hidden lg:flex h-full border-r border-neutral-500 "></div>
        <div className="w-full h-full">
          <div className="h-full flex flex-col justify-center">
            <Name />
            <div className="border-t border-black text-right capitalize text-lg mt-4 p-4">portfolio &copy; 2023</div>
            <TechStack />
          </div>
        </div>
      </div>
    </main>
    {/* <main className="flex ">
      <div className="w-4/12 hidden lg:flex h-full border-r mr-3"></div>

      <div className="w-full h-full"><SelectedWorkCard /></div>
    </main> */}

  </>
  )
}
