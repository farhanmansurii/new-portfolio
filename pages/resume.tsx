import Head from 'next/head';
import React from 'react'

export default function Resume() {
  const [loading, setLoading] = React.useState(true);
  return (
    <main className="flex min-h-screen font-neue ">
      <Head>
        <title>CV | Farhan Mansuri</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-4/12 hidden text-center items-center text-4xl capitalize  lg:border border-neutral-500/20 lg:flex h-8/12   ">

      </div>

      <div className="flex w-full h-full  gap-4  font-neue flex-col   justify-center">
        <div className='w-full lg:border border-neutral-500/20  justify-center p-4 flex flex-col gap-4'>
          <div className=' mt-24 text-7xl text-red-500'>my <span className='italic'>resume</span></div>
          {loading && (
            <div className="flex justify-center items-center h-[400px]">
              Loading
            </div>
          )}
          <iframe
            onLoad={() => setLoading(false)}
            src="https://drive.google.com/file/d/1T9-njWLhxgTl3jqmRg0aJZJf_ioasPal/preview"
            className=" h-[500px] w-full top-0 lg:w-[700px]"
          />

        </div>
      </div>


    </main>
  )
}
