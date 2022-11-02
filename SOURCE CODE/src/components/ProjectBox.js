import React from 'react'
import './main.css'

const ProjectBox = (props) => {
  return (
    <div className='bigbox flex justify-center items-center'>
      <a href={props.url} target='_blank' rel='noreferrer'  className='boxx w-48 h-60 bg-gri-150 flex flex-col justify-center items-center rounded-lg'>
        <div className='w-44 h-44 bg-gray-600 flex justify-center items-center'>
          <img src={props.img} alt={props.title} className='w-44 h-44' />
        </div>
        <h1 className='yazis w-44 h-12 flex justify-center items-center font-black'>
          {props.title}
        </h1>
      </a>
      <a href={props.url} className='gotext absolute hidden text-2xl font-bold text-white'>Go to project</a>
    </div>
    

  )
};

export default ProjectBox
