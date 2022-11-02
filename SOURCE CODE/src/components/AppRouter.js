import React from 'react'
import {
    HashRouter,
    Routes,
    Route,
} from 'react-router-dom';

// page components
import Main from './Main.js'
import About from './About.js'
import Projects from './Projects.js'
import Contact from './Contact.js'

const AppRouter = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/projects' element={<Projects />}/>
        </Routes>
    </HashRouter>
  )
}

export default AppRouter