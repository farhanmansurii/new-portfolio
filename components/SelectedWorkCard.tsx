import React from 'react'

export default function SelectedWorkCard() {
  return (
    <div className='w-full gap-4 flex flex-col lg:flex-row '>
      <img className='w-1/2 aspect-video' src='https://images.unsplash.com/photo-1681927685891-ad219186eb17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
      <div className='w-full text-xl'> Work</div>
    </div>
  )
}
