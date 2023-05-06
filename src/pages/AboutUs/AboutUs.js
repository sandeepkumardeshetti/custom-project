import React from 'react'
// import Navbar from '../../components/navbar/Navbar'
import Hero  from '../../components/hero/Hero'
import { heroAboutUsData } from '../../constants/data'
import { TextImage } from '../../components/textImage/TextImage'
import {FaQuoteLeft} from 'react-icons/fa'
import { Footer } from '../../components/footer/Footer'
import {FaRegSmile} from 'react-icons/fa'
import { FamilyCard } from '../../components/FamilyCard/FamilyCard'
import { familyData } from '../../constants/data'
import { motion } from 'framer-motion'
import './aboutUs.css'

export const AboutUs = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
    <Hero heroData={heroAboutUsData} />
    <h2 className='history-main-heading' >Our History</h2>
    <TextImage orderRight={false} />
    <TextImage orderRight={true} />
    <TextImage orderRight={false} />
    <TextImage orderRight={true} />
    <div className='company-values' >
        <h2 className='title' >
          Company Values
        </h2>
        <FaQuoteLeft color="rgb(12, 219, 109)" size={55} />
        <h2 className='quote' >“Nil satis nisi optimum” – nothing but the best is good enough.</h2>
        <p>Our mission is to satisfy our customers with superior quality, value and service.</p>
    </div>
    <div className='family' >
        <FaRegSmile color="rgb(12, 219, 109)" size={55} />
        <div className='family-title-descrption' >
          <h1 className='family-title' >The Finlor Family - Meet the Team</h1>
          <p className='family-description' >With their absolute commitment to quality, we’re proud to introduce our Finlor team.</p>
        </div>
        <ul className='family-cards-con' >
            {
                familyData.map(eachPractice => (
                    <FamilyCard key={eachPractice.id} practice={eachPractice} />
                ))
            }
          </ul>
          
    </div>
    <Footer />

    </motion.div>
  )
}
