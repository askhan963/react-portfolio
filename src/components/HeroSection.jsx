import './HeroSectionStyles.css'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';


const HeroSection = (props) => {
  return (
    <div className='hero-f'>
        <div className="heading">
        <h1>
        <TypeAnimation
  sequence={[props.heading, 500]}
  repeat={1}
/>
        </h1>
        <p className="text">{props.text}</p>
        </div>
           
    </div>
  )
}

export default HeroSection