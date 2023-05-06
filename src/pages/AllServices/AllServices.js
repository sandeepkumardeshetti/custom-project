import React from 'react'
// import Navbar from '../../components/navbar/Navbar'
import Hero  from '../../components/hero/Hero'
import { heroServicesData } from '../../constants/data'
import { motion } from 'framer-motion'

export const AllServices = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <Hero heroData={heroServicesData} />
    </motion.div>
  )
}

