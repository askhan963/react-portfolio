import './FooterStyles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import {FaHome,FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
            <div className="location">
                <FaHome size={25} style={{color:"#fff",marginRight:'20px'}} />
                <p>CUI, Abbottabad, KPK , </p>
                <p>Pakistan</p>
            </div>

            <div className="phone">
                <h4>
                <FaPhone size={25} style={{color:"#fff",marginRight:'20px'}} />
                    +92-301-0168302
                </h4>
                
            </div>

            <div className="email">
                <h4>
                <FaMailBulk size={25} style={{color:"#fff",marginRight:'20px'}} />
                awaiskhanniazi963@gmail.com
                </h4> 
            </div>
            </div>
            <div className="right">
                <h3>About Me. </h3>
                <p>I'm Awais Khan. I am a student of Computer Science at CUI,Atd.</p>
                <div className="social">
                <Link   target='_blank' to='https://www.facebook.com/awaisknas963?mibextid=ZbWKwL'> <FaFacebook size={25} style={{color:"#fff",marginRight:'20px'}} /> </Link>
                <Link  target='_blank' to='https://twitter.com/as_khan963?s=09' > <FaTwitter size={25} style={{color:"#fff",marginRight:'20px'}} /> </Link>
                <Link target='_blank' to='https://www.instagram.com/as_khan963/' > <FaInstagram size={25} style={{color:"#fff",marginRight:'20px'}} /> </Link>
                <Link target='_blank' to='https://www.linkedin.com/in/askhan963/' > <FaLinkedin size={25} style={{color:"#fff",marginRight:'20px'}} /> </Link>
                </div>

            </div>
        </div>


    </div>
  )
}

export default Footer