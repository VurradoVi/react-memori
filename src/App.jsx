import { useState } from "react";
import "./App.css";
import initialCards from "./data/initialCard";

function App() {
  const [cards, setCards] = useState(initialCards);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleCardClick = (index) => {
    if (
      isDisabled ||
      flippedCards.includes(index) ||
      matchedCards.includes(index)
    )
      return;
    const newCards = cards.map((card, i) => {
      if (i === index) {
        card.isFlipped = true;
      }
      return card;
    });
    setCards(newCards);
    setFlippedCards([...flippedCards, index]);
  };

  const resetGame = () => {
    setCards(shuffleCards(initialCards));
    setFlippedCards([]);
    setMatchedCards([]);
    setIsDisabled(false);
  };

  const shuffleCards = (cards) => {
    return cards.sort(()=> Math.random() - 0.5)
  }

  return <></>;
}

export default App;
