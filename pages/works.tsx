import AnimatedTitle from '@/components/AnimatedTitle';
import Marquee from '@/components/Marquee';
import { AnimatePresence, motion, useAnimate, useInView, usePresence } from 'framer-motion';
import { gsap } from 'gsap';
import Head from 'next/head';
import Link from 'next/link';
import React, { useRef, useEffect } from 'react';

export default function Works(props: any) {
  const { data } = props;
  const sorteddata = data.sort((a: any, b: any) => b.__v - a.__v);


  return (
    <main className="flex font-neue ">
      <Head>
        <title>Works | Farhan Mansuri</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-4/12 hidden text-center items-center text-4xl capitalize  lg:border border-neutral-500/20 lg:flex h-8/12   ">

      </div>

      <div className="flex w-full h-full  gap-4  font-neue flex-col   justify-center">
        <div className="w-full lg:border border-neutral-500/20  justify-center p-4 flex flex-col gap-4">
          <div className=' font-migra mt-24 text-7xl text-red-500' >

            <Marquee text='My Works' />
          </div>
          <div
            className="text-lg w-full mb-24 h-full  flex  flex-col"
          >
            {sorteddata.map((e: any, i: number) => (
              <Link href={`/${e._id}`} key={e._id}>
                <div
                  className="bhosdika flex border-b hover:bg-black  hover:text-white duration-200 hover:pl-9 border-gray-500 p-4">
                  <AnimatePresence>
                    <motion.div
                      transition={{
                        delay: 0.009 * i, ease: 'easeIn'
                      }}
                      initial={{ opacity: 0, y: 5, }}
                      whileInView={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5, }} className="w">{i + 1} . {e.title}</motion.div>
                  </AnimatePresence>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://productapi.vercel.app/api/project`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
