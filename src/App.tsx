import { useGamePlayContext } from './hooks/useGameContext';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import GameBoard from './components/GameBoard/GameBoard';
import GameOver from './components/GameOver/GameOver';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import GradientUnderlay from './components/GradientUnderlay/GradientUnderlay';

function App() {
  const { running, gameOver } = useGamePlayContext();

  return (
    <div className="relative flex flex-col gap-10 items-center w-[100vw] min-h-[100vh] bg-neutral-700 text-neutral-200">
      {(running || gameOver) && <ScoreBoard />}
      <main className="">
        {gameOver && !running && (
          <GradientUnderlay>
            <GameOver />
          </GradientUnderlay>
        )}
        {!gameOver && !running && (
          <GradientUnderlay>
            <Dashboard />
          </GradientUnderlay>
        )}
        {!gameOver && running && <GameBoard />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
