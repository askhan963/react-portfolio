import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import ProjectShow from '../components/ProjectShow'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <ProjectShow/>
      <Footer/>
    </div>
  )
}

export default Home