import './App.css';
import './Card.css';
import { useState } from 'react';
import Card from './Card'

const cardValues = ["A", "B", "C", "D"];

function App() {
  // Sets state
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const shuffleCards = () => {
    // Doubles cardValues array and then sorts and maps them randomly
    const shuffledCards = [...cardValues, ...cardValues]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    // Shuffles cards and resets turns
    setCards(shuffledCards)
    setTurns(0)
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <div className="card" key={card.id}>
            <div>
            {cardValues.map((item,idx)=>(<Card key={idx} cardText={item}/>))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;