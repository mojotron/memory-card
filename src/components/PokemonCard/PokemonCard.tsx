/* eslint-disable react/self-closing-comp */
import React, { useRef } from 'react';

function PokemonCard({ id }) {
  const cardRef = useRef<HTMLDivElement>(null);
  return (
    <article className=" border-[6px] rounded-md border-yellow-300 w-[160px] h-[200px]  cursor-pointer">
      <div className="w-full h-full bg-gradient-to-tr from-stone-600 via-cyan-400 to-slate-600  hover:scale-[-50px]">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt="pokemon"
          className="w-full h-full object-contain hover:translate-y-[-10px] hover:translate-x-[-15px] hover:scale-120 transition delay-350 hover:fill-slate-300"
        />
      </div>
    </article>
  );
}

export default PokemonCard;
// bg-gradient-to-b from-red-400 via-yellow-400 to-green-400 h-1/2
