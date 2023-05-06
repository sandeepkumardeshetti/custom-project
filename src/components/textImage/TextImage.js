import wLaptop from '../../images/w-laptop.jpg'
import './textImage.css'

export const TextImage = (props) => {
    const {orderRight} = props
    const orderRightClassName = orderRight && 'order-right' 

  return (
    <div className='text-image'>
        <div className={`text-container ${orderRightClassName}`}  >
            <h2>Logistics with a Difference</h2>
            <p>
            What began as a two-person team has rapidly grown into a business of over 120 people, engaged across multiple contracts and geographical locations. Our Managing Director, Paul Taylor, has a wealth of expertise in the logistics sector. His consultancy background gave him immense insight into the flaws of the industry. He identified how unreliable and costly services could be and even more significantly, the gaps in quality. Paul was determined to make a change.
            </p>
            <h2 className='m-top-2' >Logistical Experts</h2>
            <p>Paul took all his logistical expertise and set up a business that offered tailored end-to-end supply chain solutions. His dedicated team offers that personal touch that was so evidently missing from the field. And so Finlor Logistics was established. Paul’s ultimate goal was that Finlor would offer a differentiated service; one that was of the highest quality.

            As the company has grown, we have held on to our personal service; always putting the customer at the heart of everything we do. We pride ourselves on our young and dynamic approach. We constantly apply fresh initiatives so our clients can get the very best service.
            </p>
        </div>
        <img src={wLaptop} />
    </div>
  )
}

