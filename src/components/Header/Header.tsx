import { SiPokemon as PokemonLogo } from 'react-icons/si';

function Header() {
  return (
    <header className="flex flex-col items-center relative bottom-14">
      <PokemonLogo size={150} />
      <div className="flex flex-col items-center relative bottom-6">
        <h1 className="text-2xl">Memory Card</h1>
        <h2 className="text-lg">Game</h2>
      </div>
    </header>
  );
}

export default Header;
