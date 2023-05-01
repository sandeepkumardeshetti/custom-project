import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsYoutube} from 'react-icons/bs'

export const Footer = () => {
  return (
    <div className='footer' >
        <div className='logo-text' >
            <h1>SandY<span>.</span></h1>
            <p>Whether you are after a bespoke end-to-end solution designed to your specific requirements or point to point last-mile delivery capabilities, we have the answer for you.</p>
        </div>
        <div className='footer-links-con' >
            <h2>Quick Links</h2>
            <p>About Us</p>
            <p>Services</p>
            <p>Work with Us</p>
            <p>Sustainability</p>
            <p>Blog</p>
            <p>Contact</p>

        </div>
        <div className='footer-links-con' >
            <h2>Legals</h2>
            <p>Privacy</p>
            <p>Policy</p>
            <p>ECO</p>
        </div>
        <div className='footer-links-con ' >
            <h2>Socials</h2>
            <div className='social-links' >
            <FaFacebookSquare size={30} />
            <FiInstagram size={30} />
            <BsYoutube size={30} />
            </div>
            
            
        </div>

    </div>
  )
}
