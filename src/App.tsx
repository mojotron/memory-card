import { useState } from 'react';
import Footer from './components/Footer/Footer';
import PokemonCard from './components/PokemonCard/PokemonCard';
import { shuffle } from './utils/shuffleArray';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import FlipCard from './components/FlipCard/FlipCard';

function App() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [bestLevel, setBestLevel] = useState(1);

  const [cardIds, setCardIds] = useState<number[]>(() =>
    shuffle(Array.from({ length: 1 }, (_, i) => i + 1))
  );

  const [gameOver, setGameOver] = useState(false);
  const [cardsPlayed, setCardsPlayed] = useState<number[]>([]);

  const handleClickCard = (id: number) => {
    if (cardsPlayed.includes(id)) {
      setGameOver(true);
    } else {
      const newCardsPlayed = [...cardsPlayed, id];
      if (newCardsPlayed.length === cardIds.length) {
        setLevel((oldValue) => oldValue + 1);
        setCardIds(
          shuffle(Array.from({ length: 1 * (level + 1) }, (_, i) => i + 1))
        );
        setCardsPlayed([]);
        setBestScore((oldValue) => (oldValue >= score ? oldValue : score + 1));
        setBestLevel((oldValue) => (oldValue >= level ? oldValue : level + 1));
      } else {
        setCardsPlayed((oldValue) => [...oldValue, id]);
        setCardIds((oldValue) => shuffle(oldValue));
      }
      setScore((oldValue) => oldValue + 1);
    }
  };

  const handleStartGame = () => {
    setGameOver(false);
    setScore(0);
    setLevel(1);
    setCardsPlayed([]);
    setCardIds(shuffle(Array.from({ length: 1 }, (_, i) => i + 1)));
  };

  return (
    <div className="p-8 flex flex-col w-[100vw] h-[100vh] gap-2 bg-neutral-700 text-neutral-200">
      <ScoreBoard
        currentScore={score}
        currentLevel={level}
        bestScore={bestScore}
        bestLevel={bestLevel}
      />

      {gameOver ? (
        <div>
          <h1>GAME OVER</h1>
          <button type="button" onClick={handleStartGame}>
            New Game
          </button>
        </div>
      ) : (
        <div className="flex gap-2 flex-wrap">
          {cardIds.map((id) => (
            <PokemonCard key={id} id={id} onPlay={handleClickCard} />
          ))}
        </div>
      )}

      <FlipCard flipped={false} />

      <Footer />
    </div>
  );
}

export default App;
