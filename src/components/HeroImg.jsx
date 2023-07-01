import React from 'react'
import './HeroImgStyles.css'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';
import introImg from '../images/intro.jpg'
const HeroImg = () => {
  return (
    <div className='hero'>
    <div className="mask">
        <img className='hero-img' src={introImg} alt="introImag" />
    </div>
    <div className="content">
      
        <p>Hi! I'm Awais Khan</p>
        <h1> 
        <TypeAnimation
  sequence={['React Developer', 1000, 'I Love to code', 1000, 'Making world Awesome', 1000]}
  repeat={Infinity}
/>
        </h1>
        <Link to='/projects' className='btn' >Projects</Link>
        <Link to='/contact' className='btn btn-light' >Contact</Link>
    </div>
    </div>
  )
}

export default HeroImg