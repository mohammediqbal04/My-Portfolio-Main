import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div 
      id='projects'
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='flex flex-col gap-5 border border-neutral-200 dark:border-neutral-700 rounded-2xl py-4 px-6 text-center md:max-w-5xl mx-auto mt-20'
    >
      <div className='grid justify-center items-center'>
        <h1 className='text-center text-[65px] font-bold mt-10' style={{ fontFamily: 'Michroma, sans-serif' }}>
          Projects
        </h1>
      </div>

      {/* Project Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-5 mt-5'>

        {/* Project Card 1 */}
        <div className='flex flex-col gap-5 border bg-[#262626] border-neutral-200 dark:border-neutral-700 rounded py-2 hover:-translate-y-1 transition-all'>
          <h1 className='text-xl font-semibold mt-5'>Prime Hydration India</h1>
          <p className='text-[#A3A3A3]'>
            Prime Hydration is one of the best-selling sports drinks by Logan Paul and KSI. This is a fully functional and responsive Indian version Prime website.
          </p>
          <div className='flex flex-wrap justify-center items-center gap-2 mt-4'>
            {["React", "Tailwind Css", "Framer Motion", "React Router"].map((tech, index) => (
              <span key={index} className='border border-neutral-200 dark:border-neutral-700 text-sm font-semibold rounded-2xl px-3 py-1 hover:bg-[#A3A3A3]'>
                {tech}
              </span>
            ))}
          </div>
          <div>
            <a href='#' target='_blank' rel='noopener noreferrer' className='mt-4 inline-block font-semibold hover:text-[#A3A3A3]'>
              View Project →
            </a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className='flex flex-col gap-5 border bg-[#262626] border-neutral-200 dark:border-neutral-700 rounded py-2 hover:-translate-y-1 transition-all'>
          <h1 className='text-xl font-semibold mt-5'>Generative Model For Honeypot System</h1>
          <p className='text-[#A3A3A3]'>
            Developed a generative AI model to simulate cyber-attack traffic for honeypot systems and enhance threat detection using machine learning.
          </p>
          <div className='flex flex-wrap justify-center items-center gap-2 mt-4'>
            {["HTML", "CSS", "JavaScript", "Python", "Tensorflow", "Flask"].map((tech, index) => (
              <span key={index} className='border border-neutral-200 dark:border-neutral-700 text-sm font-semibold rounded-2xl px-3 py-1 hover:bg-[#A3A3A3]'>
                {tech}
              </span>
            ))}
          </div>
          <div>
            <a href='#' target='_blank' rel='noopener noreferrer' className='mt-4 inline-block font-semibold hover:text-[#A3A3A3]'>
              View Project →
            </a>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className='flex flex-col gap-5 border bg-[#262626] border-neutral-200 dark:border-neutral-700 rounded py-2 hover:-translate-y-1 transition-all'>
          <h1 className='text-xl font-semibold mt-5'>Astro Fast Fashion Retailer</h1>
          <p className='text-[#A3A3A3]'>
            Developed a responsive, full-featured fashion retail website enabling users to browse and purchase fast fashion products.
          </p>
          <div className='flex flex-wrap justify-center items-center gap-2 mt-4'>
            {["React", "Tailwind Css"].map((tech, index) => (
              <span key={index} className='border border-neutral-200 dark:border-neutral-700 text-sm font-semibold rounded-2xl px-3 py-1 hover:bg-[#A3A3A3]'>
                {tech}
              </span>
            ))}
          </div>
          <div>
            <a href='https://github.com/mohammediqbal04/Astro-Fashion-Website' target='_blank' rel='noopener noreferrer' className='mt-4 inline-block font-semibold hover:text-[#A3A3A3]'>
              View Project →
            </a>
          </div>
        </div>

        {/* Project Card 4 */}
        <div className='flex flex-col gap-5 border bg-[#262626] border-neutral-200 dark:border-neutral-700 rounded py-2 hover:-translate-y-1 transition-all'>
          <h1 className='text-xl font-semibold mt-5'>AOS Animation VPN Landing Page</h1>
          <p className='text-[#A3A3A3]'>
           Created a modern and animated fully responsive VPN landing page using Tailwind CSS and AOS (Animate on Scroll).
          </p>
          <div className='flex flex-wrap justify-center items-center gap-2 mt-4'>
            {["HTML", "Css", "Tailwind CSS"].map((tech, index) => (
              <span key={index} className='border border-neutral-200 dark:border-neutral-700 text-sm font-semibold rounded-2xl px-3 py-1 hover:bg-[#A3A3A3]'>
                {tech}
              </span>
            ))}
          </div>
          <div>
            <a href='https://github.com/mohammediqbal04/VPN-TailwindCss' target='_blank' rel='noopener noreferrer' className='mt-4 inline-block font-semibold hover:text-[#A3A3A3]'>
              View Project →
            </a>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Projects;
