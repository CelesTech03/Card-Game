import './Card.css';

export default function Card({ card, handleChoice, props }) {

  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <div className="Card">
      <div style={{height:'100px', width:'75px', backgroundColor:'black', borderStyle:'solid', borderColor:'red'}}
             onClick={handleClick}></div>
      <div style={{height:'100px', width:'75px', backgroundColor:'lightblue', borderStyle:'solid', borderColor:'red'}}
           onClick={handleClick}></div>
    </div>
  )
}