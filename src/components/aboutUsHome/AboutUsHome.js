import './aboutUsHome.css'
import wLaptop from '../../images/w-laptop.jpg'

export const AboutUsHome = () => {
  return (
    <div className='about-us-home' >
        <div className='about-us-home-text-con' >
            <h2>A Little About Us</h2>
            <p>At Finlor Logistics we pride ourselves on making the transportation of your products and services as hassle-free as possible.
            Our experienced network delivers to the length and breadth of the UK. Whether you have a single site or multi-site national requirement, we can accommodate your needs.
            We constantly apply fresh initiatives, always seeking out ways to improve. Our quality is never compromised, so our clients always get the very best service.
            </p>
        </div>
        <img src={wLaptop} />
    </div>
  )
}


