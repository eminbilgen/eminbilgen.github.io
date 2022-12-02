import React from 'react'

//import stylesheets for animation
import './main.css'

//import images
import github from '../images/github.svg'
import twitter from '../images/twitter.svg'
import perfil from '../images/perfil.jpg'
import insta from '../images/insta.svg'
import linkedin from '../images/linkedin.svg'

function Main() {
    return (
    <div className="main w-screen h-screen flex flex-col justify-center items-center">
        <div className='normal w-screen h-full flex flex-col justify-center items-center'>
            <div className='person w-96 h-96 flex flex-col justify-center items-center'>
                <h1 className='flex text-4xl font-bold h-20'>EMİN BİLGEN</h1>
                <h1 className='flex ha text-xl font-semibold h-20 '>WEB DEVELOPER</h1>
                <img alt='mypicture' className='perfil rounded-full w-60 h-60 outline outline-offset-4 outline-8 hover:rotate-6' src={perfil}></img>
            </div>
            <div className='links w-60 flex justify-around pt-14'>
                <a className="rounded-full hover:translate-y-2" href="https://github.com/eminbilgen/">
                    <img alt='githublogo' src={github} className="rounded-full w-10 h-10"></img>
                </a>
                <a className="rounded-full hover:-translate-y-2" href="https://www.linkedin.com/in/mustafa-emin-bilgen-aa4a24234/">
                    <img alt='linkedinlogo' src={linkedin} className="rounded-full w-10 h-10"></img>
                </a>
                <a className="rounded-full hover:translate-y-2" href="https://twitter.com/eminbilgen00/">
                    <img alt='twlogo' src={twitter} className="rounded-full w-10 h-10"></img>
                </a>
                <a className="rounded-full hover:-translate-y-2" href="https://instagram.com/eminbilgen/">
                    <img alt='instalogo' src={insta} className="rounded-full w-10 h-10"></img>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Main;
