import {  Route, Routes, useLocation } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { AllServices } from './pages/AllServices/AllServices';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { Contact } from './pages/Contact/Contact';


import { AnimatePresence } from 'framer-motion';

export const AnimatedRoutes = () => {
    const location = useLocation()
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<AllServices />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        </AnimatePresence>
  )
}
