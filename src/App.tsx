import { useGamePlayContext } from './hooks/useGameContext';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Gameboard from './components/Gameboard/Gameboard';

function App() {
  const { running, gameOver } = useGamePlayContext();

  return (
    <div className="flex flex-col justify-center items-center w-[100vw] min-h-[100vh] gap-2 bg-neutral-700 text-neutral-200">
      {gameOver && <p>GAME OVER</p>}
      {!gameOver && running ? <Gameboard /> : <Dashboard />}

      <Footer />
    </div>
  );
}

export default App;
