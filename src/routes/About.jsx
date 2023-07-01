import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection heading="Who am I?" text="let's See than... :)"/>
      <AboutMe/>
      <Footer/>
    </div>
  )
}

export default About