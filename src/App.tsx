import PokemonCard from './components/PokemonCard/PokemonCard';

function App() {
  return (
    <div className="p-8 flex gap-2">
      <PokemonCard id={6} />
      <PokemonCard id={18} />
      <PokemonCard id={25} />
      <PokemonCard id={90} />
    </div>
  );
}

export default App;
