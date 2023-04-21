import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
export default function Workdetail({ data }: { data: any }) {
  const router = useRouter()
  return (
    <div className="w-full font-neue  ">
      <div
      >
        <div className="mx-auto font-neue ">
          <Head>
            <title>{data.title} | Farhan Mansuri</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <main className="flex font-neue ">
            <div className="w-4/12 hidden text-center items-center text-4xl capitalize  lg:border border-neutral-500/20 lg:flex h-8/12   ">

            </div>

            <div className="flex w-full h-full  gap-4  font-neue flex-col   justify-center">
              <div className="flex flex-col my-20 p-4  ">
                <div>
                  <div className=" space-y-3 mt-10 lg:mt-16">
                    <button onClick={() => router.back()} className=" border-b w-fit border-black" >Back to all works</button>
                    <div className="text-5xl text-red-500 font-semibold lg:text-8xl font-migra  capitalize">
                      {data.title}
                    </div>
                  </div>
                </div>

                <div className="text-inherit text-xl lg:text-3xl   lg:w-8/12">

                  <div className="text-xl   ">

                    A new foundation for a design agency
                  </div>


                </div>
                <div className="my-7 justify-between w-full p-4 flex-col gap-10 lg:flex-row flex border-t">
                  <div className="flex flex-col ">
                    <div className="text-lg text-neutral-500 ">Tech Stack</div>
                    <div className="text-md">{data.techStack.join(' , ')}</div>

                  </div>

                  <div className="flex flex-col">
                    <div className="text-lg text-neutral-500 ">Links</div>
                    <a className="w-fit border-b border-black hover:text-gray-500 " href={data.liveLinks}>Live Link</a>
                    <a className="w-fit border-b border-black hover:text-gray-500 " href={data.github}>Github</a>
                  </div>
                </div>
                <img src={data.image} />
              </div>
            </div>

          </main>

        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }: { params: any }) => {
  const res = await fetch(
    `https://productapi.vercel.app/api/project/${params.id}`
  );
  const data = await res.json();
  return {
    props: { data },
  };
};
