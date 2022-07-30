import { useState } from 'react';
import Cards from '../Cards/Cards';
import './styles.css';
import { cards } from '../../cards.js';
import Deck from '../../deck.js';


export default function Game() {
  const deck = new Deck(cards);
  deck.shuffle();
  const [currCards, setCurrCards] = useState(deck.draw(5));
  const [unheldCards, setUnheldCards] = useState([0, 1, 2, 3, 4]);
  const [draws, setDraws] = useState(0);



  function flipCards(flipcards) {
    setCurrCards(currCards.map(function(card, index) {
      if (!flipcards.includes(index)) {
        return card;
      }
      if (card.flipped) {
        card.flipped = !card.flipped;
      } else {
        card.flipped = true;
      }
      return card;
    }));
  }

  function updateHeld(index) {
    if (draws !== 1) {
      return;
    }
    let newHeld = Array.from(unheldCards);
    if (newHeld.includes(index)) {
      newHeld = newHeld.filter(card => card !== index);
    } else {
      newHeld.push(index);
    }
    setUnheldCards(newHeld);
  }

  function handleDraw() {
    if (draws === 0) {
      flipCards([0, 1, 2, 3, 4]);
      setDraws(draws + 1);
      //  TODO: enable cards
    } else if (draws === 1) {
      setDraws(draws + 1);
      flipCards(unheldCards);
      // TODO: FIX THIS FIRST
      setTimeout(function() {
        console.log("before draw:", currCards);

        let newCards = deck.draw(unheldCards.length);
        console.log("newCards: ", newCards, unheldCards.length);
        console.log("deck: ", deck);
        setCurrCards(currCards.map((card, index) => {
          if (!unheldCards.includes(index)) {
            console.log(`card ${index} was not updated`);
            return card
          } else {
            return newCards.shift();
          }

        }));

        console.log("after draw:", currCards);

        flipCards(unheldCards);
      }, 1000);
      // TODO: Check for win
      // TODO: disable cards
    }
  }

  return (
    <div>
      <Cards cards={currCards} handleClick={updateHeld} unheld={unheldCards} />
      <button style={{ backgroundColor: 'red', width: '100px', height: '100px' }} onClick={handleDraw}>Draw</button>
    </div>
  );
}