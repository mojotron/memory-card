// components
import { PokemonType } from '../../types/pokemonType';
import PokemonCardBackFace from './PokemonCardBackFace';
import PokemonCardFrontFace from './PokemonCardFrontFace';

type PropsType = {
  flipped: boolean;
  pokemon: PokemonType;
  onCardSelect: (id: number) => void;
};

function PokemonCard({ flipped, onCardSelect, pokemon }: PropsType) {
  return (
    <div className="group h-[200px] w-[160px] [perspective:1000px]">
      <div
        className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d]"
        style={{
          transform: !flipped ? '' : 'rotateY(180deg)',
        }}
      >
        <div className="absolute inset-0 h-full w-full">
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
