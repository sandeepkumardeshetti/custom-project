import './servicesList.css'
import { servicesArr } from '../../constants/data'

export const ServicesList = () => {
  return (
    <ul className='services-list-home' >
        {
            servicesArr.map(arr => {
                return (
                    <li>
                    {arr.icon}
                    <h2>{arr.title}</h2>
                    <p>{arr.description}</p>
                    </li>
                )
            })
        }
    </ul>
  )
}


