import React, { useEffect } from 'react'
import {
    HashRouter,
    Routes,
    Route,
    Router,
} from 'react-router-dom';

// page components
import Main from './Main.js'
import About from './About.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import NotFound from './NotFound.js'
const AppRouter = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path='/error' element={<NotFound />} />
            <Route exact path='*' element={<NotFound />} />
            <Route path='/' element={<Main />}/>
            <Route path='/main' element={<Main />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/projects' element={<Projects />} />
        </Routes>
    </HashRouter>
  )
}

export default AppRouter