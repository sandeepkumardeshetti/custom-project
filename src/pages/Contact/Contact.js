import { heroContactData } from '../../constants/data'
import  Hero from '../../components/hero/Hero'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import {RiMapPin2Fill} from 'react-icons/ri'
import { Footer } from '../../components/footer/Footer'
import { motion } from 'framer-motion'

import './contact.css'

export const Contact = () => {

 const onSubmitForm = (e) => {
    e.preventDefault()
    console.log('Form Submitted')
 
 }

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    
    >
    <Hero heroData={heroContactData} />
    <div className='contact-cards' >
        <div className='contact-card' >
            <BsFillTelephoneFill color='black' size={45} />
            <h2>Give Us A Call</h2>
            <p>+91 999999999</p>
        </div>
        <div className='contact-card' >
            <GrMail color='black' size={45} />
            <h2>Send Us An Email</h2>
            <p>sandeep222@gmail.com</p>
        </div>
        <div className='contact-card' >
            <RiMapPin2Fill color='black' size={45} />
            <h2>Come Visit Us!</h2>
            <p>Unit 114, Milton Keynes Business Centre, Foxhunter Drive, Linford Wood, Milton Keynes, Buckinghamshire MK14 6GD</p>
        </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60876.37242365608!2d78.46707672664493!3d17.518333100787416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb852b7c9b0a8f%3A0xbcea20e47720ef90!2sBolarum%2C%20Secunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1683041297681!5m2!1sen!2sin" width="100%" height="450" style={{border : 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
<div className="contact-form-container">  
  <form id="contact" onSubmit={onSubmitForm}>
    <h3>Get in touch with us</h3>
    <h4>We work for you</h4>
    <fieldset>
      <input  placeholder="Your name" type="text" tabIndex="1" required  />
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabIndex="2" required />
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number " type="tel" tabIndex="3" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Web Site (optional)" type="url" tabIndex="4" />
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." tabIndex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
    
  </form>
</div>
    <Footer />
</motion.div>
  )
}
