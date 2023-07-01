import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Form from '../components/Form'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection heading="Contact" text="let's chat..!"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact