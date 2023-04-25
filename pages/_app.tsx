import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { useFollowPointer } from '@/components/use-follow-pointer'
import '@/styles/globals.css'
import { motion } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useState, useRef } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);


  return (<>
    <div>
      {/* <motion.div
        ref={ref}
        className="box"
        animate={{ x, y }}

      /> */}
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </div>
  </>
  )
}
