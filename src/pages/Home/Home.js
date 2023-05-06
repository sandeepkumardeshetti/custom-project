import { heroHomeData } from '../../constants/data'; 
import { AboutUsHome,Accordion,Footer,Hero,Practices,Services, Testimonial } from '../../components/AllComponents';
import { motion } from 'framer-motion';

export const Home = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
    <Hero heroData={heroHomeData}  />
    <Practices />
    <Services />
    <Testimonial />    
    <Accordion /> 
    <AboutUsHome />
    <Footer />
    </motion.div>
  )
}
