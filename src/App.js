import './App.css';
import { useEffect, useState } from 'react';
import Card from './Card'

const cardValues = [{ "src": "A", matched: false },
{ "src": "B", matched: false },
{ "src": "C", matched: false },
{ "src": "D", matched: false }
];

function App() {
  // Sets card and turns state
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  // Sets users choices state
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  const shuffleCards = () => {
    // Doubles cardValues array and randomizes cards
    const shuffledCards = [...cardValues, ...cardValues]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    // Shuffles cards and resets turns
    setCards(shuffledCards)
    setTurns(0)
  }

  // Users card choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // Compares two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {

      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
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
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
    </div>
  );
}

export default App;