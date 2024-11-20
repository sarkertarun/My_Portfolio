import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Contact() {
  
  //for animation of the content in a component
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])
  
  return (
    <div id='Contact' className='bg-white text-black dark:bg-slate-900 dark:text-white p-4 lg:p-20 flex flex-col items-center justify-center'>
      <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-10 leading-normal uppercase text-teal-500'>Contact With Me</h1>
      <form action="https://api.web3forms.com/submit" method="POST" className='flex flex-col gap-2 lg:w-1/2'>
        <div className=' dark:text-slate-500 lg:flex gap-6'>
        <input type="hidden" name="access_key" value="a3acc553-464c-4fc0-ab60-2ba7b134788f" />
        <input type="hidden" name="email" value="tarun.reactdev@gmail.com" />
          <input data-aos='fade-right' type="text" name="name" className='w-full my-3 rounded-lg p-4 border-2 border-teal-800  text-xl bg-white dark:bg-slate-800' placeholder='Enter Your Name' required />
          <input data-aos='fade-left' type="email" name="email" className='w-full my-3 rounded-lg p-4 border-2 border-teal-800  text-xl bg-white dark:bg-slate-800' placeholder='Enter Your Email' required />
        </div>
        <textarea data-aos='fade-down' name="message" className='w-full h-[200px] my-2 rounded-lg bg-white dark:bg-slate-800 p-4 border-2 border-teal-800  text-xl resize-none' placeholder='Enter Your Message...' cols="20" rows="10" required ></textarea>
        <a
          href="mailto:tarun.reactdev@gmail.com?subject=Contact Inquiry&body=Hi Tarun,"
          className="nano-button my-3 text-center shadow-xl hover:shadow-teal-800/50 text-black dark:text-white hover:text-white border-2 hover:bg-teal-800 border-teal-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden"
        >
          Submit
        </a>
      </form>
    </div>
  )
}

export default Contact