import React from 'react'

function About() {
  return (
    <div className='mekan w-full h-screen flex justify-center items-center flex flex-col hover:cursor-default'>
      <h1 className='about-baslik text-4xl font-bold text-underline mb-10 underline underline-offset-1 hover:translate-y-2 hover:scale-95 dark:text-white'>Who am I?</h1>
      <div className=' bg-gri-100 dark:bg-[#292929]  w-10/12 h-4/6 rounded-md flex items-center justify-center hover:bg-gri-300 dark:hover:bg-[#242424] md:h-2/4'>
        <p className='text-xl text-left  font-bold text-gray-800 dark:text-white w-3/4 text-base sm:text-xl md:text-2xl'>
        In this sector, which I started with the love of software from my childhood, I have been practicing and adding my knowledge since 2019. I am currently designing responsive websites integrated with Rest APIs using HTML, CSS, JS, ReactJS and Tailwind CSS. In addition, I write Rest APIs using PHP and SQL, and I take care of the security in these APIs thanks to my small cyber security background.
        I graduated from high school and I am preparing for the ACT exam. I am actively working on a web project.        </p>
      </div>
    </div>
  )
}

export default About