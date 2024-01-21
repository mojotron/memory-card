import { useState } from 'react';
import Footer from './components/Footer/Footer';
import PokemonCard from './components/PokemonCard/PokemonCard';
import { shuffle } from './utils/shuffleArray';

function App() {
  const [cardIds, setCardIds] = useState<number[]>(() =>
    shuffle(Array.from({ length: 6 }, (_, i) => i + 1))
  );
  const [gameOver, setGameOver] = useState(false);
  const [cardsPlayed, setCardsPlayed] = useState<number[]>([]);

  const gameWon = cardIds.length === cardsPlayed.length;

  const handleClickCard = (id: number) => {
    if (cardsPlayed.includes(id)) {
      setGameOver(true);
    } else {
      setCardsPlayed((oldValue) => [...oldValue, id]);
      setCardIds((oldValue) => shuffle(oldValue));
    }
  };

  if (gameWon) return <h1>YOU WON!</h1>;

  return (
    <div className="p-8 flex flex-col w-[100vw] h-[100vh] gap-2 bg-neutral-700">
      {gameOver ? (
        <h1>GAME OVER</h1>
      ) : (
        <div className="flex gap-2 flex-wrap">
          {cardIds.map((id) => (
            <PokemonCard key={id} id={id} onPlay={handleClickCard} />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
