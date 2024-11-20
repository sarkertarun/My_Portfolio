import React, { useEffect } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { TfiEmail } from "react-icons/tfi";
import img from '../../assets/p.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'


function Home() {
  
  //for animation of the content in a component
  useEffect(() => {
    AOS.init({duration: 1000})
  }, [1000])

  const social = [
    {
      link: 'https://www.linkedin.com/in/tarun-kumar-sarker-133271220/',
      icon: <FaLinkedinIn/>,
    },
    {
      link: 'https://github.com/sarkertarun',
      icon: <AiFillGithub/>,
    },
    {
      link: 'http://wa.me/+8801673089909',
      icon: <FaWhatsapp/>,
    },
    {
      link: 'mailto:tarun.reactdev@gmail.com',
      icon: <TfiEmail/>,
    },

  ]

  return (
    <div id='Home' className=' bg-white text-black dark:bg-slate-900 dark:text-white lg:px-56 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center '>
        <h1 data-aos='fade-right' className='text-[50px] font-semibold mb-8 leading-normal uppercase'>
          Welcome To <span className='text-teal-500'>My Portfolio Website</span>
        </h1>
        <p data-aos='fade-left'>Hi, I'm a dedicated frontend developer based in Dhaka, Bangladesh. I am constantly expanding my expertise in web development. With a diverse skill set, I aim to contribute innovatively to every project.</p>
        <div data-aos='fade-up' className='flex mt-8 gap-2'>
          <div className='flex items-center justify-center'>
            
            <div className='flex space-x-2'>
              {social.map((social, index) => (
                <a key={index} target="_blank" href={social.link} className='text-teal-300 hover:text-teal-500 rounded-full glow p-2'>
                <div className='text-[28px]'>
                {social.icon}
                </div>
              </a>
              ))}

            </div>
          </div>
        </div>
      </div>
      <img data-aos='fade-up' src={img} width={290}  alt="" className='mt-10 rounded border-2 p-1 border-teal-500 shadow' />
    </div>
  )
}

export default Home
