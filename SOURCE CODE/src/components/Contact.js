import React from 'react'

function Contact() {
  return (
    <div className='mekan w-full h-screen flex justify-center items-center flex flex-col hover:cursor-default'>
      <h1 className='about-baslik text-4xl font-bold text-underline mb-10 underline underline-offset-1 hover:translate-y-2 hover:scale-95		'>Contact me:</h1>
      <div className='bg-gri-100  w-10/12 h-2/4 rounded-md flex items-center justify-center hover:bg-gri-300'>
        <div className='text-2xl flex flex-col items-center justify-start font-bold text-gray-800 w-3/4  '>
          <a>Here you can contact me.</a>
          <div className='flex'>
            Click for <a className="text-teal-500 pl-2" href='mailto:emin@bil.gen.tr'> mail.</a>
          </div>
          or 
          <div className='flex'>
            Click for <a className="text-teal-500 pl-2" href='https://discordapp.com/users/938841828931829831'> discord.</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact