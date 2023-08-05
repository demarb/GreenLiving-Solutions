import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <section className='bg-black font-mono'>
        <Nav />
        <Hero />
        <About />
        <Contact />
        <Footer />
      </section>
    </>
  )
}

export default App
