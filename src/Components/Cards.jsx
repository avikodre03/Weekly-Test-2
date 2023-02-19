import './Cards.css'

export default function Cards(props) {
  return (
    <div className="cards">

        <div className="cardsimg">
         <img src={props.image} alt="" />
        </div>
        <div className="cardsname">
          <h2>{props.name}</h2>
        </div>
    </div>
  )
}