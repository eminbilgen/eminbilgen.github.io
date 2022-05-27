import React from 'react'

function Contact(lang) {
  var mail = "";
  var yazi = "";
  var discord = "";
  var baslik = "" ;
  var veya = "";
    var lang = lang.lang;
    if(lang === 'en'){
      veya = "or";
      baslik = "Contact me:";
      yazi = "Here you can find my contact information";
      discord = <div className="flex">Click for <a className="text-teal-500 pl-2" href="https://discordapp.com/users/938841828931829831"> discord.</a></div>  
      mail = <div className="flex">Click for <a className="text-teal-500 pl-2" href="mailto:emin@bil.gen.tr"> mail.</a></div>
    }
    if(lang === 'tr'){
      veya = "veya";
      baslik = "Bana ulaşın:";
      yazi = "Burada iletişim bilgilerimizi bulabilirsiniz";
      discord = <div className="flex">Discord için <a className="text-teal-500 pl-2" href="https://discordapp.com/users/938841828931829831"> tıklayın.</a></div>
      mail = <div className="flex">E-Posta için <a className="text-teal-500 pl-2" href="mailto:emin@bil.gen.tr"> tıklayın.</a></div>
    }
  return (
    <div className='mekan w-full h-screen flex justify-center items-center flex flex-col hover:cursor-default'>
      <h1 className='about-baslik text-4xl font-bold text-underline mb-10 underline underline-offset-1 hover:translate-y-2 hover:scale-95'>{baslik}</h1>
      <div className='bg-gri-100  w-10/12 h-2/4 rounded-md flex items-center justify-center hover:bg-gri-300'>
        <div className='text-2xl flex flex-col items-center justify-start font-bold text-gray-800 w-3/4  '>
          <a>{yazi}</a>
          {mail}
          {veya}
          {discord}
        </div>
      </div>
    </div>
  )
}

export default Contact