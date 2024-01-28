// import { useGamePlayContext } from './hooks/useGameContext';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';

function App() {
  // const {} = useGamePlayContext();

  return (
    <div className="flex flex-col justify-center items-center w-[100vw] min-h-[100vh] gap-2 bg-neutral-700 text-neutral-200">
      <Dashboard />

      <Footer />
    </div>
  );
}

export default App;
