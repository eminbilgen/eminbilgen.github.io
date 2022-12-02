import React from 'react'
import './main.css'

const ProjectBox = (props) => {
  return (
    <div className='bigbox flex justify-center items-center'>
      <a href={props.url} target='_blank' rel='noreferrer'  className='boxx h-52 w-40 tallph:h-48 tallph:w-40 tablet:h-60 tablet:w-48 bg-gri-150 flex flex-col justify-center items-center rounded-lg'>
        <div className='w-36 h-36 tallph:w-32 tallph:h-32 tablet:w-44 tablet:h-44  bg-gray-600 flex justify-center items-center'>
          <img src={props.img} alt={props.title} className='w-36 h-36 tallph:h-32 tallph:w-32 tablet:w-44 tablet:h-44' />
        </div>
        <h1 className='yazis w-36 h-8 tallph:w-32 tallph:h-12 tallph:text-[.8rem] tablet:w-44 tablet:h-12 flex justify-center items-center font-black'>
          {props.title}
        </h1>
      </a>
      <a href={props.url} className='gotext absolute hidden text-2xl font-bold text-white'>Go to project</a>
    </div>
    

  )
};

export default ProjectBox
