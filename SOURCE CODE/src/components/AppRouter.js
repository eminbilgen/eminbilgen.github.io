import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import Main from './Main.js'
import About from './About.js'
import Projects from './Projects.js'
import Contact from './Contact.js'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/projects' element={<Projects />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter