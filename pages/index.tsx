import Image from 'next/image'
import { Inter } from 'next/font/google'
import Name from '@/components/Name'
import SelectedWorks from '@/components/SelectedWorks'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SelectedWorkCard from '@/components/SelectedWorkCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<>
    <main className="flex h-[95vh]">

      <div className="border w-full justify-around mx-auto  flex items-center">
        <div className="w-4/12 hidden lg:flex h-full border-r border-neutral-500 "></div>
        <div className="w-full h-full">
          <div className="h-full flex flex-col justify-center">
            <Name />
            <div className="border-t border-black text-right capitalize text-lg mt-4 p-4">portfolio &copy; 2023</div>
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
