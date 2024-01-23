/* eslint-disable react/self-closing-comp */
import { MouseEvent, useRef } from 'react';

type PropsType = {
  id: number;
  onPlay: (id: number) => void;
};

function PokemonCard({ id, onPlay }: PropsType) {
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
      onClick={() => onPlay(id)}
      className="flex flex-col [perspective:1000px] cursor-pointer "
    >
      <div
        onMouseEnter={handleOnMouseEnter}
        onMouseMove={handleOnMouseMove}
        onMouseLeave={handleOnMouseLeave}
        className="border-[6px] rounded-md border-yellow-300 group h-[200px] w-[160px] hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))] transition-transform ease-in-out bg-gradient-to-tr from-cyan-700 via-slate-700 to-cyan-700"
      >
        <div className="relative w-full h-full hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(34,211,238,0.7)_20%,transparent_80%)]">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt="pokemon"
            className="pointer-event-none absolute inset-0 top-2 transform w-full h-full object-contain hover:translate-y-[-10px] group-hover:translate-x-[-15px] hover:scale-110 transition delay-150 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
// bg-gradient-to-tr hover:from-stone-600 hover:via-cyan-400 hover:to-slate-600  from-cyan-700 via-slate-700 to-cyan-700
