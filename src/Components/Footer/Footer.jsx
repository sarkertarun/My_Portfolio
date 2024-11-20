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
        icon: <FaLinkedinIn className='hover:text-teal-500'/>,
        
      },
      {
        link: 'https://github.com/sarkertarun',
        icon: <AiFillGithub className='hover:text-teal-500'/>,
      },
      {
        link: 'http://wa.me/+8801673089909',
        icon: <FaWhatsapp className='hover:text-teal-500'/>,
      },

      ]
      
    return (
        <footer className="bg-white dark:bg-slate-800 border-slate-800">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-teal-500 uppercase">Contact</h2>
                <div className="space-y-3">
                  <a 
                    href="mailto:tarun.reactdev@gmail.com" 
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-teal-500 transition duration-300"
                  >
                    <span className="text-lg hover:text-teal-500">Email: tarun.reactdev@gmail.com</span>
                  </a>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="text-lg hover:text-teal-500">Phone: +8801673-089909</span>
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-teal-500 uppercase">Follow Me</h2>
                <div className="flex space-x-6">
                  {social.map((social, index) => (
                    <a 
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-3xl text-gray-600 dark:text-gray-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-6xl mx-auto px-4 py-6">
              <p className="text-center text-gray-600 dark:text-gray-300">
                Copyright © {new Date().getFullYear()}. All rights are reserved by 
                <span className="text-teal-500 font-semibold"> Tarun</span>.
              </p>
            </div>
          </div>
        </footer>
    )
}

export default Footer
