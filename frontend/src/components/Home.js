import React from 'react'
import Intro from './Intro/Intro'
import Services from './Services/Services'
import Experience from './Experience/Experience'
import Works from './Works/Works'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'

function Home() {
  return (
    <>
      <Intro />
        <Services />
        <Experience />
        <Works />
        <Portfolio />
        {/* <Testimonial /> */}
        <Contact />
    </>
  )
}

export default Home
