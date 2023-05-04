import AnimatedWords2 from "@/components/AnimatedWords2";
import GSAPLines from "@/components/GSAPLines";
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
          <main className="flex font-neue " >
            <div className="w-4/12 hidden text-center items-center text-4xl capitalize  lg:border border-neutral-500/20 lg:flex h-8/12   ">

            </div>

            <div style={{ backgroundColor: `${data.color}` }} className="flex text-white w-full h-full  gap-4  font-neue flex-col   justify-center">
              <div className="flex flex-col my-7 p-4  ">
                <div>
                  <div className=" space-y-3 mt-10 lg:mt-16">
                    <button onClick={() => router.back()} className=" border-b w-fit border-black" >Back to all works</button>
                    <div className=" w-full  ">

                      <AnimatedWords2
                        title={data.title}
                        style={"text-5xl text-left flex flex-wrap font-semibold lg:text-8xl font-migra  "}
                      />
                    </div>


                  </div>
                </div>

                <div className="text-inherit text-xl lg:text-3xl   lg:w-8/12">

                  <div className="text-xl   ">

                    {data.shortDescription}
                  </div>


                </div>
                <div className="my-7 justify-between w-full p-4 flex-col gap-4 flex border-t border-black">
                  <div className="flex flex-col ">
                    <div className="text-lg  ">Tech Stack</div>
                    <div className="text-md">{data.techStack}</div>

                  </div>

                  <div className="flex flex-col">
                    <div className="text-lg  ">Links</div>
                    <div className="flex gap-4">

                    <a className="w-fit border-b border-black hover:text-gray-500 " href={data.liveLinks}>Live Link</a>
                      <a className="w-fit border-b border-black hover:text-gray-500 " href={data.github}>Github</a>
                    </div>
                  </div>
                </div>

                <div className="flex w-fit flex-row  overflow-scroll md:overflow-hidden">

                  <img src={data.image} className="h-48 md:h-64 lg:h-96" />
                  <img src={data.image2} className="h-48 md:h-64 lg:h-96 " />

                </div>

                <div>
                  {data.description}
                </div>
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
    `https://foliobackend.vercel.app/works/${params.id}`
  );
  const data = await res.json();
  return {
    props: { data },
  };
};
