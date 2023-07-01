import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import ProjectShow from '../components/ProjectShow'
const Projects = () => {
  return (
    <div>
       <Navbar/>
       <HeroSection heading="Projects" text="some of Projects are here..."/>
       <ProjectShow />
      <Footer/>
    </div>
  )
}

export default Projects