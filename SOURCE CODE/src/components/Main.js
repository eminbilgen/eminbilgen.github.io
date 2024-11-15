import React from 'react'

//import stylesheets for animation
import './main.css'

//import images
import perfil from '../images/perfil.jpg'
import Github from '../images/Github.js'
import Twitter from '../images/Twitter.js'
import Insta from '../images/Insta.js'
import Linkedin from '../images/Linkedin.js'

function Main() {
    return (
    <div className="main w-screen h-screen flex flex-col justify-center items-center">
        <div className='normal w-screen h-full flex flex-col justify-center items-center'>
            <div className='person w-96 h-96 flex flex-col justify-center items-center'>
                <h1 className='flex text-4xl font-bold h-20 dark:text-white'>EMİN BİLGEN</h1>
                <h1 className='flex ha text-xl font-semibold h-20 dark:text-white'>FULLSTACK WEB DEVELOPER</h1>
                <img alt='mypicture' className='perfil rounded-full w-60 h-60 outline outline-offset-4 outline-8 hover:rotate-6 dark:outline-white' src={perfil}></img>
            </div>
            <div className='links w-60 h-10 flex justify-around pt-14'>
                <a className="rounded-full hover:translate-y-2 h-10" href="https://github.com/eminbilgen/">
                    <Github alt='githublogo' className="rounded-full w-10 h-10"></Github>
                </a>
                <a className="rounded-full hover:-translate-y-2 h-10" href="https://www.linkedin.com/in/emin-bilgen/">
                    <Linkedin alt='linkedinlogo' className="rounded-full w-10 h-10"></Linkedin>
                </a>
                <a className="rounded-full hover:translate-y-2 h-10" href="https://twitter.com/eminbilgen00/">
                    <Twitter alt='twitterlogo' className="rounded-full w-10 h-10"></Twitter>
                </a>
                <a className="rounded-full hover:-translate-y-2 h-10" href="https://instagram.com/eminbilgen/">
                    <Insta alt='instalogo' className="rounded-full w-10 h-10"></Insta>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Main;
