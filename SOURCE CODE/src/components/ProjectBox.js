import React from 'react'
import './main.css'

const ProjectBox = (props) => {
  return (
    <div className='bigbox flex justify-center items-center w-full md:w-auto rounded-2xl md:rounded-lg'>
      <a href={props.url} target='_blank' rel='noreferrer'  className='boxx w-5/6 h-auto md:h-52 md:w-40 tablet:h-60 tablet:w-48 bg-gri-150 dark:bg-[#1f1f1f] flex flex-col justify-center items-center rounded-2xl md:rounded-lg'>
        <div className=' w-full rounded-t-2xl h-auto md:w-36 md:h-36 tablet:w-44 tablet:h-44  bg-gray-600 dark:bg-[#1f1f1f] flex justify-center items-center md:rounded-lg'>
          <img src={props.img} alt={props.title} className='rounded-t-2xl w-full h-auto md:w-36 md:h-36 tablet:w-44 tablet:h-44 md:rounded-lg' />
        </div>
        <h1 className='yazis rounded-b-2xl md:rounded-b-lg w-36 h-8 text-[1rem] tallph:w-full tallph:h-12 pt-4 pb-4 tablet:w-44 tablet:h-12 flex justify-center items-center font-black dark:text-white'>
          {props.title}
        </h1>
      </a>
      <a href={props.url} className='gotext absolute hidden text-2xl font-bold text-white'>Go to project</a>
    </div>
    

  )
};

export default ProjectBox
