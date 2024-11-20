import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img from '../../assets/profile1.jpg'
import Resume from '../../assets/Resume.pdf'


function About() {

  //for animation of the content in a component
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])

  return (
    <div id='About' className='bg-white text-black dark:bg-slate-900 dark:text-white lg:px-56 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center'>
      <img data-aos='fade-down' src={img} width={290} height={290} alt="" className='rounded border-2 p-1 border-teal-500 ' />
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center'>
        <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal text-teal-500 uppercase'>
          About Me
        </h1>
        <p data-aos='fade-left'>
          Hello, I'm <span className='font-bold text-green-600'>Tarun Kumar Sarker,</span> a Frontend React Developer passionate about crafting dynamic and responsive user interfaces. With a sharp eye for detail and a dedication to delivering exceptional user experiences, I specialize in transforming Figma designs into pixel-perfect, responsive web templates and bringing them to life using React.js.
          </p>
          <p data-aos='fade-right' className='mt-2'>
          I thrive on writing clean, maintainable code and staying updated with the latest industry trends. My expertise spans HTML, CSS, Tailwind CSS, JavaScript, React, Redux, and Git, and I'm always eager to expand my skill set and tackle new challenges. Let’s collaborate to build engaging and innovative web solutions!
          </p>
          <p data-aos='fade-left' className='mt-2'>
          When I’m not coding, I enjoy exploring new places, hiking, or experimenting with recipes in my kitchen. I believe in the importance of work-life balance and strive to maintain a healthy, fulfilling lifestyle.
          </p>
          
      
        <div data-aos='fade-down' className='flex mt-8 gap-2 space-x-2 items-center justify-center'>
          <a href={Resume} target="_blank" download>
            <div className='nano-button hover:text-white shadow-xl hover:shadow-teal-800/50 border-2 hover:bg-teal-800 border-teal-800 rounded-lg py-4 px-8 uppercase overflow-hidden'>
              Resume
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About