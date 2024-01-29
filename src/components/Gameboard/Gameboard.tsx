import { useGamePlayContext } from '../../hooks/useGameContext';
import PokemonCard from '../PokemonCard/PokemonCard';

function Gameboard() {
  const { gameCards } = useGamePlayContext();

  const loading = false;

  console.log(gameCards);

  return (
    <ul className="grid grid-cols-4 gap-3">
      {gameCards.map((card) => (
        <PokemonCard
          key={card.id}
          pokemon={card}
          onCardSelect={() => {}}
          flipped={loading}
        />
      ))}
    </ul>
  );
}

export default Gameboard;
