import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { MobileMenu } from './components/MobileMenu'


const App = () => {
  const[menuOpen, setMenuOpen] = useState(false);

  return (
      <div>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
  )
}

export default App