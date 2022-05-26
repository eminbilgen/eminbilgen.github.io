import React from 'react'
import Main from './Main.js'
import About from './About.js'
import Projects from './Projects.js'
import Contact from './Contact.js'


function Active(page) {
    var pageID = page.page;
    if(pageID === 'main'){
        return <Main></Main>
    }
    if(pageID === 'about'){
        return <About></About>
    }
    if(pageID === 'projects'){
        return <Projects></Projects>
    }
    if(pageID === 'contact'){
        return <Contact></Contact>
    }   
    else{
        return (<div className='flex w-full h-screen justify-center items-center text-4xl'>Error, please contact me from  <a className='pl-4 font-bold' href='https://instagram.com/eminbilgen/'> Instagram</a>.</div>)
    }
}

export default Active