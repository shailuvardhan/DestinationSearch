import './index.css'

const DestinationItem = props => {
  const {cardDetails} = props
  const {name, imgUrl} = cardDetails
  console.log(cardDetails)
  return (
    <li className="card">
      <img className="img" alt={name} src={`${imgUrl}`} />
      <p className="title">{name}</p>
    </li>
  )
}
export default DestinationItem
