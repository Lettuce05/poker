import Card from '../Card/Card';
import './styles.css';
export default function Cards({ cards, handleClick, unheld }) {
  return (
    <div className="Cards">
      {cards.map((card, index) => <Card card={card} key={card.suit + card.rank} handleClick={handleClick} index={index} unheld={unheld}/>)}
    </div>
  );
}