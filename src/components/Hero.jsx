import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn } from '../Varients';

const Hero = () => {
  const { ref, inView } = useInView({
      threshold: 0.2,
      triggerOnce: true,
    });
  return (
    <section id='about'
      className='flex flex-col justify-center items-center p-10 mt-30'>
      <motion.div
       variants={fadeIn('left', 0.2)}
       initial='hidden'
       whileInView={'show'}
       viewport={{ once: false, amount: 0.7 }}
      className='text-center'>
        <h1 className='text-[45px] md:text-[90px] sm:text-[50px] font-medium' style={{ fontFamily: 'Michroma, sans-serif' }}>Mohammed Iqbal J </h1>
        <h2 className='text-gray-400 md:text-[20px] '>- WEB DEVELOPER</h2>
      </motion.div>
      <motion.div 
       variants={fadeIn('right', 0.2)}
       initial='hidden'
       whileInView={'show'}
       viewport={{ once: false, amount: 0.7 }}
      className='mt-5 max-w-3xl text-center text-base md:text-lg text-[#A3A3A3]'>
        <p>
          Aspiring web developer and user experience designer. I possess skills in modern technologies including HTML5, CSS3, JavaScript (ES6+), React.js , Python, and SQL. Skilled in building responsive UI’s, integrating RESTful APIs, and using Git for version control. Familiar with Vite and state management using Redux. Passionate about writing clean, maintainable code, implementing innovative solutions and continuously improving my technical expertise.
        </p>
      </motion.div>
      
      <div className='flex justify-center gap-5 mt-10'>
        <button className='bg-[#262626] text-white p-3 border rounded mt-5 font-medium cursor-pointer'style={{ fontFamily: 'Michroma, sans-serif' }}>View Resume</button>
        <button
          onClick={() => {
            const section = document.getElementById("contact");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-[#262626] border mt-5 p-3 rounded cursor-pointer"
          style={{ fontFamily: "Michroma, sans-serif" }}
        >
          Contact Me
        </button>
    
      </div>
    </section>
  )
}

export default Hero;