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
    <div className="relative pb-16 flex flex-col gap-10 items-center justify-center w-[100vw] min-h-[100vh] bg-neutral-700 text-neutral-200">
      {gameOver && !running && (
        <GradientUnderlay
          options={{ colorStart: '#be123c', colorEnd: '#f472b6' }}
        >
          <GameOver />
        </GradientUnderlay>
      )}
      {!gameOver && !running && (
        <GradientUnderlay>
          <Dashboard />
        </GradientUnderlay>
      )}
      {!gameOver && running && (
        <>
          <ScoreBoard />
          <GameBoard />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
