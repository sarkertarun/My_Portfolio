import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectsList from '../../All_Lists/ProjectsList';
import { AiFillGithub } from 'react-icons/ai';

function Projects() {
  // For animation of the content in a component
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [1000]);

  return (
    <div
      id="Projects"
      className="bg-white text-black dark:bg-slate-900 dark:text-white p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-teal-500"
      >
        My Projects
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        {ProjectsList.slice()
          .reverse()
          .map((project) => (
            <div
              key={project.id}
              data-aos={project.id % 2 === 0 ? 'fade-down' : 'fade-up'}
              className="flex flex-col"
            >
              <a target="_blank" href={project.link}>
                <img
                  className="text-[26px] flex items-center justify-center rounded-3xl h-40 w-60 p-1 border-2 border-teal-800 border-glow transition-transform duration-300 hover:scale-105 hover:translate-y-[-5px]"
                  src={project.image}
                  alt="project"
                />
              </a>
              <p className="flex gap-2 h-full lg:mt-4 justify-center mt-4">
                {project.title}
                <a
                  target="_blank"
                  href={project.github}
                  className="hover:text-teal-300 transition-all duration-150 ease-in-out text-[20px] hover:scale-110"
                >
                  <AiFillGithub />
                </a>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Projects;
