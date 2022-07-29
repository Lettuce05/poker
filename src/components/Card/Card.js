import { cardBack } from '../../cards.js';
import './styles.css';
export default function Card({ card }) {
  let flippedStyle = null;
  if (card.flipped) {
    flippedStyle = card.flipped ? 'flipped' : null;
  }
  return (
    <div className="flip-card">
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
        </div>
      </div>
    </div>
  );
}