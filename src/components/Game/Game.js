import { useState } from 'react';
import Cards from '../Cards/Cards';
import './styles.css';
import { cards } from '../../cards.js';
import Deck from '../../deck.js';


export default function Game() {
  const deck = new Deck(cards);
  deck.shuffle();
  const [currCards, setCurrCards] = useState(deck.draw(5));
  const [heldCards, setHeldCards] = useState([]);

  function flipCards() {
    console.log(currCards);
    setCurrCards(currCards.map(function(card) {
      if (card.flipped) {
        card.flipped = !card.flipped;
      } else {
        card.flipped = true;
      }
      return card;
    }));
    console.log(currCards);
  }

  return (
    <div>
      <Cards cards={currCards} />
      <button style={{backgroundColor: 'red', width: '100px', height: '100px'}} onClick={() => flipCards()}>Draw</button>
    </div>
  );
}