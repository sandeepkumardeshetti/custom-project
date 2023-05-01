import { practicesData } from '../../constants/data'
import './practices.css'
import { PracticeCard } from '../practiceCard/PracticeCard'



const Practices = () => {
  return (
    <div className='practices' >
        <div className='practices-title-descrption' >
          <h1 className='practices-title' >Always Exceeding Expectations</h1>
          <p className='practices-description' >Professional, premium, personable. That’s us in a nutshell. We will go over and above to ensure we deliver only the very best service. We do this whilst still maintaining that family-friendly feel that our clients love about us.</p>
        </div>
         <ul className='practices-cards-con' >
            {
                practicesData.map(eachPractice => (
                    <PracticeCard key={eachPractice.title} practice={eachPractice} />
                ))
            }
          </ul>
          <button>
              GET TO KNOW US
          </button>
    </div>
  )
}

export default Practices
