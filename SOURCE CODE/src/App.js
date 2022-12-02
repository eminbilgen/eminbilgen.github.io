import './App.css';
import React, { useState } from 'react';

//import router extension
import AppRouter from './components/AppRouter';

function App() {
  //state for menu
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive); 
  };
  return(
    //menu button and components
    <div className="App absolute w-screen h-screen flex flex-grow md:flex-grow-0">
      <div onClick={ToggleClass} id="menubutton" className={isActive ? "null" : "change"}>
          <div className="bar1 bg-black z-2"></div>
          <div className="bar2 bg-black z-2"></div>
          <div className="bar3 bg-black z-2"></div>
      </div>
      <div className={isActive ? "null" : "change"} id="app">
          <div className="menu w-full z-20 left-full h-full flex flex-col justify-center items-center absolute left-0 top-0 opacity-90 bg-black">
              <menu className='flex flex-col justify-around items-center h-5/6'>
                  <ul className="flex flex-col justify-center items-center">
                      <li className="flex flex-col justify-center items-center h-16">
                        <a href="/#/main" className="inline-block relative menu-text text-white text-2xl font-bold placeholder:text-center" onClick={ToggleClass}>Home</a>
                      </li>
                      <li className="flex flex-col justify-center items-center h-16">
                        <a href="/#/about" className="inline-block relative menu-text text-white text-2xl font-bold text-center" onClick={ToggleClass}>About</a>
                      </li>
                      <li className="flex flex-col justify-center items-center h-16">
                        <a href="/#/projects" className="inline-block relative menu-text text-white text-2xl font-bold text-center" onClick={ToggleClass}>Projects</a>
                      </li>
                      <li className="flex flex-col justify-center items-center h-16">
                        <a href="/#/contact" className="inline-block relative menu-text text-white text-2xl font-bold text-center" onClick={ToggleClass}>Contact</a>
                      </li>
                  </ul>
              </menu>
          </div>
      </div>
      <AppRouter />
    </div>
  );
}

export default App;
