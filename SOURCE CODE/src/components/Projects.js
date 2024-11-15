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
    <div className='mekan mt-12 md:mt-0 w-full min-h-[200vh] bigph:min-h-[150vh] tallph:min-h-[165vh] smph:min-h-[200vh] laptop:min-h-screen tablet:min-h-screen flex flex-grow justify-center items-center flex flex-col'>
      <h1 className='laptop:mt-0 about-baslik text-4xl flex h-14  font-bold text-underline justify-center underline underline-offset-1 hover:-translate-y-2 hover:scale-95 dark:text-white'>Projects:</h1>
      <div className='p-4 rounded-xl bg-gri-100 dark:bg-[#292929] w-5/6 md:w-auto   rounded-laptop flex items-center justify-center mb-4  hover:bg-gri-300 dark:hover:bg-[#242424]'>
        <div className='flex flex-col w-full justify-center md:grid md:grid-flow-col grid-cols-1 grid-rows-5 row-span-2 gap-6 tablet:grid-flow-col tablet:gap-10 laptop:gap-4 tablet:grid-rows-2 tablet:grid-cols-2  p-4'>
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