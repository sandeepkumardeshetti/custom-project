import './servicesList.css'
import {BsTruck} from 'react-icons/bs'
import {FaRegHandshake} from 'react-icons/fa'
import {BsBoxSeam} from 'react-icons/bs'
import {GiRadioTower} from 'react-icons/gi'

export const ServicesList = () => {
  return (
    <ul className='services-list-home' >
        <li>
            <BsTruck size="85px" color="rgb(12, 219, 109)" />
            <h2>Last-Mile Delivery</h2>
            <p>We provide high-quality, time-focused and expertly coordinated last-mile and multi-drop delivery. We have a solid reputation for customer satisfaction.</p>
        </li>
        <li>
            <FaRegHandshake size="85px" color="rgb(12, 219, 109)" />
            <h2>White-Glove Services</h2>
            <p>Perfect for delicate, high-value or heavy goods, our white-glove service is reliable and trusted, with a noticeable difference in quality.</p>
        </li>
        <li>
            <BsBoxSeam size="85px" color="rgb(12, 219, 109)" />
            <h2>Delicate Products</h2>
            <p>We can deliver your high value, delicate or sensitive products. You can rely on us to ensure the safest and most stable delivery of your fragile goods.</p>
        </li>
        <li>
            <GiRadioTower size="85px" color="rgb(12, 219, 109)" />
            <h2>Telecoms Infrastructure</h2>
            <p>We understand the technical precision required during the transportation of this high-value equipment and handle items with the utmost care.</p>
        </li>
    </ul>
  )
}


