
import {  useRef } from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'
import './navbar.css'


export const Navbar = () => {
  const navRef = useRef(null)

const showNavbar = () => {
  navRef.current.classList.toggle("responsive_nav")
}

  return (
    <header className='header' >
      <h1>SandY<span>.</span></h1>
      <nav ref={navRef}>
        <a href='#'>Home</a>
        <a href='#'>My Work</a>
        <a href='#'>Blog</a>
        <a href='#'>About Me</a>
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
