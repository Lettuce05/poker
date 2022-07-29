import Card from '../Card/Card';
import './styles.css';
export default function Cards({ cards }) {
  return (
    <div className="Cards">
      {cards.map((card) => <Card card={card} key={card.suit + card.rank} />)}
    </div>
  );
}