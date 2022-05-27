import React, {useState} from 'react'
import './main.css'
import github from './github.svg'
import twitter from './twitter.svg'
import perfil from './perfil.jpg'
import insta from './insta.svg'



function Main(lang) {

    var job = "";
    var lang = lang.lang;
    if(lang === 'en'){
        job = "WEB DEVELOPER";
    }
    if(lang === 'tr'){
        job = "WEB GELİŞTİRİCİ";
    }
    return (
    <div className="main w-screen h-screen flex flex-col justify-center items-center">
        
        <div className='normal w-full h-screen flex flex-col justify-center items-center'>
            
            <div className='person w-96 h-96 flex flex-col justify-center items-center'>
                <h1 className='flex text-4xl font-bold h-20'>EMİN BİLGEN</h1>
                <h1 className='flex ha text-xl font-semibold h-20 '>{job}</h1>

                <img className='perfil rounded-full w-60 h-60 outline outline-offset-4 outline-8 hover:rotate-6' src={perfil}></img>
            </div>
            <div className='links w-60 flex justify-around pt-14'>
                <a className="rounded-full hover:translate-y-2" href="https://github.com/eminbilgen/">
                    <img src={github} className="rounded-full w-10 h-10"></img>
                </a>
                <a className="rounded-full hover:-translate-y-2" href="https://twitter.com/eminbilgen00/">
                    <img src={twitter} className="rounded-full w-10 h-10"></img>
                </a>
                <a className="rounded-full hover:translate-y-2" href="https://instagram.com/eminbilgen/">
                    <img src={insta} className="rounded-full w-10 h-10"></img>
                </a>
            </div>
        </div>
        
    </div>
  )
}

export default Main;
