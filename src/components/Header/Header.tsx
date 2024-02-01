import { SiPokemon as PokemonLogo } from 'react-icons/si';
import HighlightTextWrapper from '../HighlightTextWrapper/HighlightTextWrapper';

function Header() {
  return (
    <header className="flex flex-col items-center justify-center">
      <HighlightTextWrapper>
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-3xl">Memory Card</h1>
          <h2 className="text-2xl">Game</h2>
        </div>
      </HighlightTextWrapper>
      <PokemonLogo size={150} className="text-yellow-300 relative bottom-8" />
    </header>
  );
}

export default Header;
