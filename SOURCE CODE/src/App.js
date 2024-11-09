import './App.css';
import React, { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';


//import router extension
import AppRouter from './components/AppRouter';

function App() {
  //state for menu
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive); 
  };

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  var checked = false;
  if (theme === 'dark') {
    checked = true;
  } else {
    checked = false;
  }

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      document.getElementById('htmll').style.backgroundColor = 'white';
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      document.getElementById('htmll').style.backgroundColor = '#191919';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return(
    //menu button and components
    <div className="App absolute w-screen min-h-screen flex flex-grow md:flex-grow-0 bg-white dark:bg-[#191919]">
      <div className='theme-brd dark:border-white'>
      <DarkModeSwitch
        checked={checked}
        onChange={toggleTheme}
        moonColor="#FFF"
        sunColor="#000"
        size={30}
      />
      </div>
      <div onClick={ToggleClass} id="menubutton" className={isActive ? "null" : "change"}>
          <div className="bar1 bg-black z-2 dark:bg-white"></div>
          <div className="bar2 bg-black z-2 dark:bg-white"></div>
          <div className="bar3 bg-black z-2 dark:bg-white"></div>
      </div>
      <div className={isActive ? "null" : "change"} id="app">
          <div className="menu w-full z-20 left-full h-full flex flex-col justify-center items-center absolute left-0 top-0 opacity-90 bg-black dark:bg-white ">
              <menu className='flex flex-col justify-around items-center h-5/6'>
                  <ul className="flex flex-col justify-center items-center">
                      <li className="flex flex-col justify-center items-center h-16">
                        <a href="/#/main" className="inline-block relative menu-text text-white dark:text-black text-2xl font-bold placeholder:text-center" onClick={ToggleClass}>Home</a>
                      </li>
                      <li className="flex flex-col justify-center items-center h-16">
                        <a href="/#/about" className="inline-block relative menu-text text-white dark:text-black text-2xl font-bold text-center" onClick={ToggleClass}>About</a>
                      </li>
                      <li className="flex flex-col justify-center items-center h-16">
                        <a href="/#/projects" className="inline-block relative menu-text text-white dark:text-black text-2xl font-bold text-center" onClick={ToggleClass}>Projects</a>
                      </li>
                      <li className="flex flex-col justify-center items-center h-16">
                        <a href="/#/contact" className="inline-block relative menu-text text-white dark:text-black text-2xl font-bold text-center" onClick={ToggleClass}>Contact</a>
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
