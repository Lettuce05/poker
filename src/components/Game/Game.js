import Cards from '../Cards/Cards';
import './styles.css';
import {cards} from '../../cards.js';


export default function Game() {
  let testCards = Array.from(cards);
  return (
    <div>
      <Cards cards={[testCards[0],testCards[1],testCards[2],testCards[3],testCards[4]]}/>
    </div>
  );
}