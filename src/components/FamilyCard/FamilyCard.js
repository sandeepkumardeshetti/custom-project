import './familyCard.css'

export const FamilyCard = (props) => { 
  const {practice} = props
  const {image, title, description, designation} = practice
  return (
    <li className='family-card-con' >
        <img alt="img" className='family-image' src={image} />
        <h2>{title}</h2>
        <h3>{designation}</h3>
        <p>{description}</p>
    </li>
  )
}
