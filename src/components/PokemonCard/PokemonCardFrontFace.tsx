/* eslint-disable react/self-closing-comp */
import { MouseEvent, useRef } from 'react';
import { PokemonType } from '../../types/pokemonType';

type PropsType = {
  pokemon: PokemonType;
  onPlay: (pokemon: PokemonType) => void;
};

function PokemonCardFrontFace({ pokemon, onPlay }: PropsType) {
  const boundingRectRef = useRef<DOMRect | null>(null);

  const handleOnMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    boundingRectRef.current = event.currentTarget.getBoundingClientRect();
  };
  // great help from Jeroen Reumkens at Frontend FYI
  // https://www.youtube.com/watch?v=sjpBWTsi7B0
  const handleOnMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (boundingRectRef.current === null) return;
    const x = event.clientX - boundingRectRef.current.left;
    const y = event.clientY - boundingRectRef.current.top;
    const xPercentage = x / boundingRectRef.current.width;
    const yPercentage = y / boundingRectRef.current.height;
    const xRotation = (0.5 - xPercentage) * 30;
    const yRotation = (0.5 - yPercentage) * 30;
    // swap values because of x and y axes behave diff in 3d enviroment
    event.currentTarget.style.setProperty('--x-rotation', `${yRotation}deg`);
    event.currentTarget.style.setProperty('--y-rotation', `${xRotation}deg`);
    event.currentTarget.style.setProperty('--x', `${xPercentage * 100}%`);
    event.currentTarget.style.setProperty('--y', `${yPercentage * 100}%`);
  };

  const handleOnMouseLeave = () => {
    boundingRectRef.current = null;
  };

  return (
    <div
      onClick={() => onPlay(pokemon)}
      className="flex flex-col [perspective:1000px] cursor-pointer select-none h-full w-full"
    >
      <div
        onMouseEnter={handleOnMouseEnter}
        onMouseMove={handleOnMouseMove}
        onMouseLeave={handleOnMouseLeave}
        className="relative border-[4px] rounded-md border-yellow-300 group h-full w-full hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))] transition-all ease-in-out bg-gradient-to-tr from-cyan-700 via-slate-700 to-cyan-700"
      >
        <div className="relative w-full h-full hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(34,211,238,0.7)_10%,transparent_80%)]">
          <img
            draggable="false"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt={`${pokemon.name}`}
            className="pointer-event-none absolute inset-0 top-2 transform w-full h-full object-contain transition-transform ease-in-out hover:translate-y-[-10px] group-hover:translate-x-[-15px] hover:scale-110 duration-500"
          />
        </div>
      </div>
    </div>
  );
}

export default PokemonCardFrontFace;
