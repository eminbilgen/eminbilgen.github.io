import React from 'react'

function Projects() {
  return (
    <div className='mekan w-full h-screen flex justify-center items-center flex flex-col hover:cursor-default'>
      <h1 className='about-baslik text-4xl font-bold text-underline mb-10 underline underline-offset-1 hover:-translate-y-2 hover:scale-95		'>Projects:</h1>
      <div className=' bg-gri-100  w-10/12 h-2/4 rounded-md flex items-center justify-center hover:bg-gri-300'>
        <p className='text-2xl text-center font-bold text-gray-800 w-3/4  '>
          This page is currently under maintence.
        </p>
      </div>
    </div>
  )
}

export default Projects