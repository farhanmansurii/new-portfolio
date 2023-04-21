import AnimatedTitle from '@/components/AnimatedTitle';
import Link from 'next/link';
import React from 'react'

export default function Works(props: any) {
  const { data } = props
  const sorteddata = data.sort((a: any, b: any) => b.__v - a.__v);
  return (
    <main className="flex font-neue ">
      <div className="w-4/12 hidden text-center items-center text-4xl capitalize  lg:border border-neutral-500/20 lg:flex h-8/12   ">

      </div>

      <div className="flex w-full h-full  gap-4  font-neue flex-col   justify-center">
        <div className='w-full lg:border border-neutral-500/20  justify-center p-4 flex flex-col gap-4'>
          <AnimatedTitle text=' my works' wordSpace={"mr-[14px]"}
            charSpace={"mr-[0.001em]"} className=' font-migra mt-24 text-7xl text-red-500' /> <div className='text-lg w-full mb-24 h-full  flex  flex-col  '>
            {
              sorteddata.map((e: any, i: number) =>
                <Link href={`/${e._id}`} key={e._id}>
                  <div className='flex border-y hover:bg-black  hover:text-white duration-200 hover:pl-9 border-gray-500 p-4'>
                    <div>{i + 1} . </div>
                    <div className='w-1/2'>{e.title}</div>
                  </div>
                </Link>
              )
            }
          </div>

        </div>
      </div>

    </main>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://productapi.vercel.app/api/project`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
