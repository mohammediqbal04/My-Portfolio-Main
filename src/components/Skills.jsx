import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
  FaFigma
} from 'react-icons/fa';
import { BsPalette } from 'react-icons/bs';
import { SiTailwindcss, SiRedux, SiFramer, SiMysql } from 'react-icons/si';


const Skills = () => {
  const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
      });
      

  return (
    <section id='skills'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
         className=' gap-5 border border-neutral-200 dark:border-neutral-700 rounded-2xl py-4 px-6 text-center md:max-w-5xl mx-auto'>
        <div className='flex justify-center items-center'>
          <h1 className='text-center text-[65px] font-bold mt-10'style={{ fontFamily: 'Michroma, sans-serif' }}>
          Skills
          </h1>
        </div> 

        {/* Marquee Section */}

        <div className="overflow-hidden mt-6">
          <motion.div
            className="flex gap-10 w-max px-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: 'linear',
            }}
          >
            {[...Array(2)].flatMap((_, i) => (
              [
                <FaHtml5 key={`html-${i}`} size={40} className="text-orange-500" />,
                <FaCss3Alt key={`css-${i}`} size={40} className="text-blue-500" />,
                <FaJs key={`js-${i}`} size={40} className="text-yellow-400" />,
                <FaReact key={`react-${i}`} size={40} className="text-cyan-400" />,
                <SiTailwindcss key={`tailwind-${i}`} size={40} className="text-sky-400" />,
                <SiRedux key={`redux-${i}`} size={40} className="text-purple-500" />,
                <SiMysql key={`mysql-${i}`} size={40} className="text-blue-700" />,
                <FaNodeJs key={`node-${i}`} size={40} className="text-green-500" />,
                <SiFramer key={`framer-${i}`} size={40} className="text-white" />,
                <FaFigma key={`figma-${i}`} size={40} className="text-pink-500" />,
              ]
            ))}
          </motion.div>
        </div>


        {/* Frontend Card */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 '>
          <div className='bg-[#262626] border border-neutral-200 dark:border-neutral-700 rounded-lg flex flex-col items-center p-4 max-w-[330px] mx-auto hover:-translate-y-1 transition-all'>
          <div className='border border-neutral-200 dark:border-neutral-700 rounded py-2 hover:-translate-y-1 transition-all w-40'>
            <p>&lt;!DOCTYPE html&gt;</p>
          </div>
          <h2 className='mt-6'>
            <span className='text-[#A3A3A3] pr-2 font-bold'>FRONTEND</span>DEVELOPMENT
          </h2>
          <p className='mt-3 text-[#A3A3A3] hover:-translate-y-1 transition-all'>
            Design and develop interactive front-end components, ensure mobile responsiveness, and enhance user experience using modern web technologies.
          </p>
        </div>

        {/* Backend Card */}

        <div className='bg-[#262626] border border-neutral-200 dark:border-neutral-700 rounded-lg flex flex-col items-center p-4 max-w-[330px] mx-auto hover:-translate-y-1 transition-all'>
          <div className='border border-neutral-200 dark:border-neutral-700 rounded py-2 hover:-translate-y-1 transition-all w-30'>
            <p>GET /api/users</p>
          </div>
          <h2 className='mt-6'> <span className='text-[#A3A3A3] pr-2 font-bold'> BACKEND </span>DEVELOPMENT</h2>
          <p className='mt-3 text-[#A3A3A3] hover:-translate-y-1 transition-all'>Build server-side logic, manage databases, and ensure efficient communication between front-end and back-end systems.</p>
        </div>

        {/* UI/UX Card */}

        <div className='bg-[#262626] border border-neutral-200 dark:border-neutral-700 rounded-lg flex flex-col items-center p-4 max-w-[330px] mx-auto md:mt-7 hover:-translate-y-1 transition-all'>
          <div className='flex justify-center border border-neutral-200 dark:border-neutral-700 rounded py-2 hover:-translate-y-1 transition-all w-20 text-center'>
            <BsPalette size={30} />
          </div>
          <h2 className='mt-6'> <span className='text-[#A3A3A3] pr-2 font-bold '> UI/UX </span> DESIGN </h2>
          <p className='mt-3 text-[#A3A3A3]  hover:-translate-y-1 transition-all'>Research user needs to create intuitive and user-friendly interfaces. Design wireframes and interactive prototypes that focus on clarity, accessibility and engagement.</p>
        </div>

        </div>
        
      </motion.div>
    </section>
  )
}

export default Skills