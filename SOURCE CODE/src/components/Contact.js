import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import '../App.css'

function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ki2ltgm', 'template_5cj1zp1', form.current, 'MNzG_ITx0Sm7ub0dr')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };
  return (
    <div className='mekan w-full h-screen flex justify-center items-center flex flex-col hover:cursor-default'>
      <h1 className='about-baslik text-4xl font-bold text-underline mb-10 underline underline-offset-1 hover:translate-y-2 hover:scale-95'>Contact me:</h1>
      <div className='bg-gri-100  w-10/12 h-2/4 rounded-md flex items-center justify-center hover:bg-gri-300'>
        <div className='text-2xl flex flex-col items-center justify-center font-bold text-gray-800 w-5/6 md:h-4/6 h-5/6'>
        <form ref={form} onSubmit={handleSubmit} className='h-full w-full flex flex-col justify-around items-center'>
          <label className="block flex flex-col items-start">
            <span className="block text-sm font-medium text-slate-700">Email Address:</span>
            <input type="text" placeholder="example@domain.com"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-black focus:ring-1 focus:ring-black
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            " name="email"/>
          </label>
          <label className="block flex flex-col items-start">
            <span className="block text-sm font-medium text-slate-700">Name:</span>
            <input type="text" name='name' placeholder="Emin Bilgen"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-black focus:ring-1 focus:ring-black
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
          </label>
          <label className="block flex flex-col items-start">
            <span className="block text-sm font-medium text-slate-700">Message:</span>
            <input type="textarea" name='message' placeholder="Bla bla bla..."  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-black focus:ring-1 focus:ring-black
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
          </label>
          <input type='submit' value="Send" className='bg-gri-300 hover:bg-gri-200 border-2 border-black text-black font-bold rounded w-[11.5rem] h-12 flex justify-center items-center' />
        </form>
        </div>
      </div>
    </div>
  )
}

export default Contact