import React, { useEffect } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Footer() {
    //for animation of the content in a component
    useEffect(() => {
      AOS.init({ duration: 1000 })
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

      ]
      
    return (
        <footer >
          <div className='md:flex md:px-10 lg:flex bg-white dark:bg-slate-800 text-black dark:text-white lg:px-48 px-4 justify-center border-t border-slate-800'>
                <div  className='md:flex lg:flex gap-10 '>
                    <div>
                        <h2 className='text-[22px] font-semibold text-teal-500 py-2  uppercase'>Contact</h2>
                        <a href="mailto:tarun.reactdev@gmail.com" className='text-[16px]  hover:text-teal-500 transition-all duration-150 ease-in-out cursor-pointer'>Email: tarun.reactdev@gmail.com</a>
                        <p className='text-[16px] hover:text-teal-500 transition-all duration-150 ease-in-out'>Phone: +8801673-089909</p>
                    </div>
                    <div>
                        <h2 className='text-[22px] font-semibold text-teal-500 py-2 uppercase'>Follow Me</h2>
                        <div className='flex space-x-4'>
                            {social.map((social, index) => (
                                <a key={index} target="_blank" href={social.link} className=' hover:text-teal-500 transition-all duration-150 ease-in-out'>
                                <div  className='text-[28px]'>
                                    {social.icon}
                                </div>                    
                            </a>
                            ))}
                        </div>
                    </div>
                </div>

          </div>
          <div className='bg-white dark:bg-slate-800 text-black dark:text-white lg:px-48 px-4 py-2  border-slate-800'>
            <h2 className='text-bass text-center font-semibold text-teal-500'>Copyright © 2024. All rights are reserved by Tarun.</h2>
          </div>
        </footer>
    )
}

export default Footer
