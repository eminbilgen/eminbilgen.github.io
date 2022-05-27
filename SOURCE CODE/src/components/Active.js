import React from 'react'
import Main from './Main.js'
import About from './About.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import { useEffect, useState } from 'react';

 
function Active(page) {
    
    const [country, setCountry] = useState("en");
    useEffect(() => {
        fetch('https://api.ipregistry.co/?key=hsk4a3vbgob9d5lr')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        if (json['location']['country']['name'] == "Turkey") {
            setCountry("tr");
        }else{
            setCountry("en");
        }
    });
     },[])
    var pageID = page.page;
    if(pageID === 'main'){
        return <Main lang={country}></Main>
    }
    if(pageID === 'about'){
        return <About lang={country}></About>
    }
    if(pageID === 'projects'){
        return <Projects lang={country}></Projects>
    }
    if(pageID === 'contact'){
        return <Contact lang={country}></Contact>
    }   
    else{
        return (<div className='flex w-full h-screen justify-center items-center text-4xl'>Error, please contact me from  <a className='pl-4 font-bold' href='https://instagram.com/eminbilgen/'> Instagram</a>.</div>)
    }
}

export default Active