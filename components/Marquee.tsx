import React from 'react'

export default function Marquee({ text }: { text: string }) {
  return (
    <div
      className="font-migra lg:w-[30rem] text-7xl font-semibold text-red-500 rounded-full  overflow-hidden    "
    >
      <div className="group flex h-full  cursor-pointer items-center ">
        <span className="whitespace-nowrap group-hover:pause animate-loopL">
          {text} • {text} •
        </span>
        <span className="whitespace-nowrap group-hover:pause animate-loopL">
          {text} • {text} •
        </span>
      </div>
    </div>
  )
}
