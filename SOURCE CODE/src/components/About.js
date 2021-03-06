import React from 'react'

function About(lang) {
  var descr = "";
  var basliks = "";
  var lang = lang.lang;
  if(lang === 'en'){
      basliks = "Who am I?";
      descr = "I am a front-end developer with a passion for developing web applications. I'm currently working as a front-end developer at my own company, which might sound a bit self-employed. I have a passion for learning new things and I am always looking for new ways to improve my skills. I am now 16 years old and I am from a small city in Turkey called Kırıkkale. After two years of high school, my next focus will be to work abroad as a full-range developer.";
  }
  if(lang === 'tr'){
      basliks = "Ben kimim?";
      descr = "Web uygulamaları geliştirme tutkusu olan bir front-end geliştiriciyim. Şu anda kendi şirketimde front-end geliştirici olarak çalışıyorum, bu kulağa biraz serbest meslek gibi gelebilir. Yeni şeyler öğrenmek için bir tutkum var ve her zaman becerilerimi geliştirmek için yeni yollar arıyorum. Şu anda 16 yaşındayım ve Türkiye'nin Kırıkkale adlı küçük bir şehrinden geliyorum. İki yıllık liseden sonra, bir sonraki odak noktam tam kapsamlı bir geliştirici olarak yurtdışında çalışmak olacak.";
  }
  return (
    <div className='mekan w-full h-screen flex justify-center items-center flex flex-col hover:cursor-default'>
      <h1 className='about-baslik text-4xl font-bold text-underline mb-10 underline underline-offset-1 hover:translate-y-2 hover:scale-95'>{basliks}</h1>
      <div className=' bg-gri-100  w-10/12 h-4/6 rounded-md flex items-center justify-center hover:bg-gri-300 md:h-2/4'>
        <p className='text-xl text-left  font-bold text-gray-800 w-3/4 text-base sm:text-xl md:text-2xl'>
          {descr}
        </p>
      </div>
    </div>
  )
}

export default About