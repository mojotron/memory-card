import Footer from './components/Footer/Footer';
import PokemonCard from './components/PokemonCard/PokemonCard';

function App() {
  return (
    <div className="p-8 flex flex-col w-[100vw] h-[100vh] gap-2 bg-neutral-700">
      <div className="flex gap-2">
        <PokemonCard id={6} />
        <PokemonCard id={18} />
        <PokemonCard id={25} />
        <PokemonCard id={90} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
