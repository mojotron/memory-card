import { useGamePlayContext } from './hooks/useGameContext';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import GameBoard from './components/GameBoard/GameBoard';
import GameOver from './components/GameOver/GameOver';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import GameFinished from './components/GameFinished/GameFinished';

function App() {
  const { running, gameOver, gameFinished } = useGamePlayContext();

  return (
    <div className="relative p-5 flex flex-col gap-10 justify-center items-center w-[100vw] min-h-[100vh] bg-neutral-700 text-neutral-200">
      {gameOver && !running && !gameFinished && <GameOver />}
      {!gameOver && !running && !gameFinished && <Dashboard />}
      {!gameOver && running && !gameFinished && (
        <>
          <ScoreBoard />
          <GameBoard />
        </>
      )}
      {gameFinished && <GameFinished />}

      <Footer />
    </div>
  );
}

export default App;
