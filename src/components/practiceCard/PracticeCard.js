import './practiceCard.css'

export const PracticeCard = (props) => {
  const {practice} = props
  const {image, title, description} = practice
  return (
    <li className='practice-card-con' >
        <img className='practice-image' src={image} />
        <h2>{title}</h2>
        <p>{description}</p>
    </li>
  )
}
