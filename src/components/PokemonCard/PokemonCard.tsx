/* eslint-disable react/self-closing-comp */
import React, { useRef } from 'react';

function PokemonCard({ id }: { id: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <article className=" border-[6px] rounded-md border-yellow-300 w-[160px] h-[200px]  cursor-pointer">
      <div
        ref={cardRef}
        className="w-full h-full bg-gradient-to-tr hover:from-stone-600 hover:via-cyan-400 hover:to-slate-600 transition from-cyan-700 via-slate-700 to-cyan-700 ease-in-out delay-300"
      >
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt="pokemon"
          className="relative top-2 transform w-full h-full object-contain hover:translate-y-[-10px] hover:translate-x-[-15px] hover:scale-110 transition delay-150 ease-in-out "
        />
      </div>
    </article>
  );
}

export default PokemonCard;
