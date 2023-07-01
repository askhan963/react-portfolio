import React, { useState } from 'react'
import './NavbarStyles.css'
import { Link } from 'react-router-dom'
import {FaBars,FaTimes } from "react-icons/fa"

const Navbar = () => {
    const [click,isClick]= useState(false)
    const [color,setColor]= useState(false)
    const handleClick=()=>{
        isClick(!click)
    }

    const handleColor=()=>{
        if(window.scrollY >=10){
            setColor(true)
        }
        else{
            setColor(false)
        }
           
        
    }
    window.addEventListener('scroll',handleColor);


  return (
    <div className={color ? 'header' : 'header header-bg'}>
        <Link to='/' >
            <h1>Portfolio.</h1>
        </Link> 
        <ul className={click ? 'menu active' : "menu"}>
            <li>
                <Link to='/' >Home</Link>
            </li>
            <li>
                <Link to='/projects' >Projetcs</Link>
            </li>
            <li>
                <Link to='/education' >Education</Link>
            </li>
            <li>
                <Link to='/contact' >Contact</Link>
            </li>
            <li>
                <Link to='/about' >About</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {
                click ? (<FaTimes size={25} />) : ( <FaBars size={25} />)
            }
         
       
        </div>
    </div>
  )
}

export default Navbar