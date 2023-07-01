import React from 'react'
import Navbar from './components/Navbar'
import DarkMode from './components/DarkMode'
import ContatCard from './components/ContactCard'
import ToTop from './components/ToTop'
import Skills from './components/Skills'
import Bio from './components/Bio'
import Slider from './components/Slider'

const App = () => {

  return (
    <>
      <DarkMode />
      <Navbar />
      <Slider />
      <ToTop />
      <div className="main-container">
        <Bio />
        <Skills />
        <ContatCard />
      </div>
    </>
  )
}

export default App