import React from 'react'
import { NavLink } from 'react-router-dom'
const Card = (props) => {
  return (
    <div className="proj-card">
    <img src={props.src} alt="Alt Tesxt" />
    <h1>{props.title}</h1>
    <p className="proj-text">{props.text}</p>
    <div className="proj-btn">
        <NavLink target="_blank" className='btn' to={props.link}>Source </NavLink>
        <NavLink target="_blank" className='btn btn-light' to={props.source}>View </NavLink>
    </div>
    </div>
  )
}

export default Card