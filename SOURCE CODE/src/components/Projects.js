import React from 'react'

// project box component
import ProjectBox from './ProjectBox'

// import images from '../images/projects'
import nft from '../images/projects/nft.png'
import cash from '../images/projects/cash.png'
import rating from '../images/projects/rating.png'
import product from '../images/projects/product.png'
import cardpage from '../images/projects/cardpage.png'

function Projects() {
  return (
    <div className='mekan w-full h-screen flex justify-center items-center flex flex-col'>
      <h1 className='about-baslik text-4xl font-bold text-underline mb-10 underline underline-offset-1 hover:-translate-y-2 hover:scale-95'>Projects:</h1>
      <div className=' bg-gri-100  w-10/12 h-4/6 rounded-md flex items-center justify-center hover:bg-gri-300'>
        <div className='w-10/12 h-5/6 flex items-center justify-around flex-wrap'>
          <ProjectBox img={nft} url={"https://beautiful-entremet-7efdbe.netlify.app/"} title={"NFT Preview Card"} />
          <ProjectBox img={cash} url={"https://luxury-rolypoly-83a3b4.netlify.app/"} title={"Cash Register App"} />
          <ProjectBox img={rating} url={"https://thriving-youtiao-8bf084.netlify.app/"} title={"Interactive Rating App"} />
          <ProjectBox img={product} url={"https://aquamarine-dusk-e3e1c2.netlify.app/"} title={"Product Card"} />
          <ProjectBox img={cardpage} url={"https://radiant-boba-4b9d4f.netlify.app/"} title={"Payment Page"} />
        </div>
      </div>
    </div>
  )
}

export default Projects