
import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { Footer } from './components/footer/Footer';
import { Hero } from './components/hero/Hero';
import { Navbar } from './components/navbar/Navbar';
import Practices  from './components/practices/Practices'
import { Services } from './components/services/Services';
import Testimonial from './components/testimonials/Testimonials';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Hero />
    <Practices />
    <Services />
    <Testimonial />    
    <Accordion /> 
    <Footer />


    </div>
  );
}

export default App;
