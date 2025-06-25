// Navbar.jsx
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaBars } from 'react-icons/fa'
import { MobileMenu } from './MobileMenu' // adjust path if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ fontFamily: 'Michroma, sans-serif' }}
        className='fixed top-0 w-full z-50 bg-opacity-60 backdrop-blur-md text-white flex justify-between items-center p-6 px-10 border-b border-neutral-200 dark:border-neutral-700'
      >
        <h1 className='text-2xl font-bold'>Portfolio.</h1>

        {/* Desktop Menu */}
        <nav className='hidden md:flex gap-6'>
          <a 
            onClick={() => {
              const section = document.getElementById("about");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }} 
            className='text-gray-300 text-sm hover:text-white transition cursor-pointer'
          >
            About
          </a>
          <a 
            onClick={() => {
              const section = document.getElementById("skills");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }} 
            className='text-gray-300 text-sm hover:text-white transition cursor-pointer'
          >
            Skills
          </a>
          <a 
            onClick={() => {
              const section = document.getElementById("projects");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }} 
            className='text-gray-300 text-sm hover:text-white transition cursor-pointer'
          >
            Projects
          </a>
          <a 
            onClick={() => {
              const section = document.getElementById("education");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }} 
            className='text-gray-300 text-sm hover:text-white transition cursor-pointer'
          >
            Education
          </a>
        </nav>

        {/* Desktop Icons */}
        <nav className='hidden md:flex gap-4 text-lg'>
          <motion.a 
            href='https://www.linkedin.com/in/mohammed-iqbal-535bba252'
            target='_blank' rel='noopener noreferrer'
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaLinkedin />
          </motion.a>

          <motion.a 
            href='https://github.com/mohammediqbal04'
            target='_blank' rel='noopener noreferrer'
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaGithub />
          </motion.a>

          <motion.a 
            href='#'
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaInstagram />
          </motion.a>

          <motion.a 
            href='mailto:mohammediqbal1420@gmail.com'
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaEnvelope />
          </motion.a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className='md:hidden text-white text-2xl cursor-pointer' 
        >
          <FaBars />
        </button>
      </motion.div>

      {/* Mobile Sidebar Menu */}
      <MobileMenu menuOpen={isOpen} setMenuOpen={setIsOpen} />
    </>
  );
}

export default Navbar;
