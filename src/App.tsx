import { useGamePlayContext } from './hooks/useGameContext';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import GameBoard from './components/GameBoard/GameBoard';
import GameOver from './components/GameOver/GameOver';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';

function App() {
  const { running, gameOver } = useGamePlayContext();

  return (
    <div className="relative flex flex-col justify-center items-center w-[100vw] min-h-[100vh] gap-2 bg-neutral-700 text-neutral-200">
      {(running || gameOver) && <ScoreBoard />}

      {gameOver && !running && <GameOver />}
      {!gameOver && !running && <Dashboard />}
      {!gameOver && running && <GameBoard />}

      <Footer />
    </div>
  );
}

export default App;
