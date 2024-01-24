import React from 'react';
import PokemonCardBackFace from '../PokemonCard/PokemonCardBackFace';
import PokemonCardFrontFace from '../PokemonCard/PokemonCardFrontFace';

function FlipCard({ flipped }: { flipped: boolean }) {
  return (
    <div className="group h-[200px] w-[160px] [perspective:1000px]">
      <div
        className=" relative h-full w-full transition-all duration-500 [transform-style:preserve-3d]"
        style={{ transform: !flipped ? '' : 'rotateY(180deg)' }}
      >
        <div className="absolute inset-0 h-full w-full">
          <PokemonCardFrontFace onPlay={() => {}} id={6} />
        </div>
        <div className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <PokemonCardBackFace />
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
// group-hover:[transform:rotateY(180deg)]
