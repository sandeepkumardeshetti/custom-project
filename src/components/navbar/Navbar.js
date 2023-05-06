
import {  useRef, useState } from 'react'
import { NavLink } from "react-router-dom"
// import withRouter from '../withRouter'
import {FaTimes, FaBars} from 'react-icons/fa'
import quantumLogo from '../../images/quantumLogo.jpg'
import './navbar.css'


const Navbar = () => {
  const navRef = useRef(null)

const showNavbar = (e) => {

  navRef.current.classList.toggle("responsive_nav")
}

  return (
    <header className='header' >
      {/* <h1>SandY<span>.</span></h1> */}
      <img className='quantum-logo' src={quantumLogo} />
      <nav ref={navRef}>
        
        <button   onClick={showNavbar} ><NavLink to="/" >Home</NavLink></button>
        <button onClick={showNavbar} ><NavLink to="/services" >Services</NavLink></button>
        <button  onClick={showNavbar} ><NavLink to="/about" >About Us </NavLink></button>
        <button  onClick={showNavbar} ><NavLink to="/contact" >Contact Us </NavLink></button>
        <button className='nav-btn nav-close-btn' onClick={showNavbar} >
        <FaTimes size="25px" />
        </button> 
      </nav>
       <button className='nav-btn nav-menu-btn' onClick={showNavbar} >
        <FaBars size="25px" />
      </button>    
       </header>
  )
}

export default Navbar