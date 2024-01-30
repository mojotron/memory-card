import { useGamePlayContext } from '../../hooks/useGameContext';
import PokemonCard from '../PokemonCard/PokemonCard';

function Gameboard() {
  const { gameCards, loading, playTurn } = useGamePlayContext();

  return (
    <ul className="grid grid-cols-4 gap-3">
      {gameCards.map((card) => (
        <PokemonCard
          key={card.id}
          pokemon={card}
          onCardSelect={playTurn}
          flipped={loading}
        />
      ))}
    </ul>
  );
}

export default Gameboard;
