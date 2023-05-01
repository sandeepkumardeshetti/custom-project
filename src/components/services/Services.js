import { ServicesList } from '../servicesList/ServicesList'
import './services.css'

export const Services = () => {
  return (
    <div className='services-home' >
        <div className='title-desc'>
        <h1 >First Class Service</h1>
        <p>Efficiency is key for your business, so we’ll create a solution that’s bespoke to you. Delivering exactly what you need will be vital to keep your products moving. Whether you are after a bespoke end-to-end solution designed to your specific requirements or point to point last-mile delivery capabilities, we have the answer for you.</p>
        </div>
        <ServicesList />
    </div>
  )
}


