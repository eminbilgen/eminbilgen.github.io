import './App.css';
import Active from './components/Active';
import React, { useState, useEffect } from 'react';

function App() {
  /*its checks for the menu button animation*/
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive); 
  };
  /* its declaring first page as main page */
  var [page, setPage] = useState('main');
  /*its checks which button is clicked for changing page*/
  const changePage = (e) => {
    if(page === e){
        setActive(!isActive); 
    }else{
        setPage(e);
        setActive(!isActive); 
    }
  };
  
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
     var menu1 = "";
     var menu2 = "";
     var menu3 = "";
     var menu4 = "";
    var lang = country;     
    if(lang === 'en'){
        menu1 = "Home";
        menu2 = "About";
        menu3 = "Projects";
        menu4 = "Contact";
    }
    if(lang === 'tr'){
        menu1 = "Ana Sayfa";
        menu2 = "Hakkımda";
        menu3 = "Projelerim";
        menu4 = "İletişim";
    }
  return (
    <div className="App absolute w-screen h-screen">
      <div onClick={ToggleClass} id="menubutton" className={isActive ? "null" : "change"}>
          <div className="bar1 bg-black z-2"></div>
          <div className="bar2 bg-black z-2"></div>
          <div className="bar3 bg-black z-2"></div>
      </div>
      <div className={isActive ? "null" : "change"}>
          <div className="menu w-full z-20 left-full h-full flex flex-col justify-center items-center absolute opacity-90 bg-black">
              <menu className='flex flex-col justify-around items-center h-5/6'>
                  <ul className="flex flex-col justify-center items-center">
                      <li className="flex flex-col justify-center items-center h-16">
                          <a className="inline-block relative menu-text text-white text-2xl font-bold placeholder:text-center" onClick={() => changePage('main')}>{menu1}</a>
                      </li>
                      <li className="flex flex-col justify-center items-center h-16">
                          <a className="inline-block relative menu-text text-white text-2xl font-bold text-center" onClick={() => changePage('about')}>{menu2}</a>
                      </li>
                      <li className="flex flex-col justify-center items-center h-16">
                          <a className="inline-block relative menu-text text-white text-2xl font-bold text-center" onClick={() => changePage('projects')}>{menu3}</a>
                      </li>
                      <li className="flex flex-col justify-center items-center h-16">
                          <a className="inline-block relative menu-text text-white text-2xl font-bold text-center" onClick={() => changePage('contact')}>{menu4}</a>
                      </li>
                  </ul>
              </menu>
          </div>
      </div>
      <Active page={page}></Active>
    </div>
  );
}

export default App;
