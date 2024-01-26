import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import PokemonCard from './components/PokemonCard/PokemonCard';
import { shuffle } from './utils/shuffleArray';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import Header from './components/Header/Header';

function App() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [bestLevel, setBestLevel] = useState(1);
  const [loading, setLoading] = useState(false);

  const [cardIds, setCardIds] = useState<number[]>(() =>
    shuffle(Array.from({ length: 4 }, (_, i) => i + 1))
  );

  const [gameOver, setGameOver] = useState(false);
  const [cardsPlayed, setCardsPlayed] = useState<number[]>([]);

  const handleClickCard = (id: number) => {
    if (cardsPlayed.includes(id)) {
      setGameOver(true);
    } else {
      const newCardsPlayed = [...cardsPlayed, id];
      if (newCardsPlayed.length === cardIds.length) {
        setLoading(true);
        setLevel((oldValue) => oldValue + 1);
        setCardIds(
          shuffle(Array.from({ length: 4 * (level + 1) }, (_, i) => i + 1))
        );
        setCardsPlayed([]);
        setBestScore((oldValue) => (oldValue >= score ? oldValue : score + 1));
        setBestLevel((oldValue) => (oldValue >= level ? oldValue : level + 1));
      } else {
        setLoading(true);
        setCardsPlayed((oldValue) => [...oldValue, id]);
        setCardIds((oldValue) => shuffle(oldValue));
      }
      setScore((oldValue) => oldValue + 1);
      setLoading(true);
    }
  };

  useEffect(() => {
    if (!loading) return;
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [loading]);

  const handleStartGame = () => {
    setGameOver(false);
    setScore(0);
    setLevel(1);
    setCardsPlayed([]);
    setCardIds(shuffle(Array.from({ length: 4 }, (_, i) => i + 1)));
  };

  return (
    <div className="flex-col w-[100vw] h-[100vh] gap-2 bg-neutral-700 text-neutral-200">
      <Header />
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
            <PokemonCard
              key={id}
              flipped={loading}
              pokemonId={id}
              onCardSelect={handleClickCard}
            />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
