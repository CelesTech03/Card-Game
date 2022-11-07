import './App.css';
import { useEffect, useState } from 'react';
import Card from './Card'


const cardValues = ["A", "B", "C", "D"];

function App() {
  // Sets card and turns state
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  // Sets users choices state
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  const shuffleCards = () => {
    // Doubles cardValues array and then sorts and maps them randomly
    const shuffledCards = [...cardValues, ...cardValues]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    // Shuffles cards and resets turns
    setCards(shuffledCards)
    setTurns(0)
  }

  // User card choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // Compares two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {

      if (choiceOne.src === choiceTwo.src) {
        console.log('Matching cards')
        resetTurn()
      } else {
        console.log("Not a match")
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo])

  // Resets choices and increases number of turns
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <Card key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;