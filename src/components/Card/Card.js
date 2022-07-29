import { cardBack } from '../../cards.js';
import './styles.css';
export default function Card({ card, index, handleClick, unheld }) {
  let flippedStyle = null;
  let held = false;
  if (card.flipped) {
    flippedStyle = card.flipped ? 'flipped' : null;
  }

  if (!unheld.includes(index)) {
    held = true;
  }

  function handleHeld() {
    handleClick(index);
  }
  return (
    <div className="flip-card" onClick={handleHeld}>
      <div className={"flip-card-inner" + " " + flippedStyle}>
        <div className="flip-card-front">
          <div className='card-div'>
            {cardBack}
          </div>
        </div>
        <div className="flip-card-back">
          <div className='card-div'>
            {card.unicode}
          </div>
          {card.flipped && held ? <div className={"held"}>HELD</div> : null}
        </div>
      </div>
    </div>
  );
}