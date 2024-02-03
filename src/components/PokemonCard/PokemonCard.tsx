// components
import { PokemonType } from '../../types/pokemonType';
import PokemonCardBackFace from './PokemonCardBackFace';
import PokemonCardFrontFace from './PokemonCardFrontFace';

type PropsType = {
  flipped: boolean;
  pokemon: PokemonType;
  onCardSelect: (pokemon: PokemonType) => void;
};

function PokemonCard({ flipped, onCardSelect, pokemon }: PropsType) {
  return (
    <div className="group h-[90px] w-[72px] sm:h-[120px] sm:w-[96px] md:h-[160px] md:w-[128px] lg:h-[200px] lg:w-[160px] [perspective:1000px]">
      <div
        className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d]"
        style={{
          transform: !flipped ? '' : 'rotateY(180deg)',
        }}
      >
        <div
          className="absolute inset-0 h-full w-full"
          // hide card because of image effect of pokemon "coming out",
          // without this you can see part of pokemon if mouse stay on the card
          style={{ visibility: flipped ? 'hidden' : 'visible' }}
        >
          <PokemonCardFrontFace onPlay={onCardSelect} pokemon={pokemon} />
        </div>
        <div className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <PokemonCardBackFace />
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
