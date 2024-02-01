import { SiPokemon as PokemonLogo } from 'react-icons/si';
import { MdCatchingPokemon as PokeBole } from 'react-icons/md';

function PokemonCardBackFace() {
  return (
    <div className="relative flex flex-col justify-center items-center border-[4px] rounded-md border-blue-600 group h-full w-full overflow-hidden bg-gradient-to-tr from-blue-500 via-sky-500 to-blue-500">
      <PokemonLogo
        className="absolute bottom-[50%] text-yellow-300"
        size={100}
      />
      <PokeBole size={75} className="absolute text-rose-400" />
      <PokemonLogo
        className="absolute top-[50%] [transform:rotateX(180deg)_rotateY(180deg)] text-yellow-300"
        size={100}
      />
    </div>
  );
}

export default PokemonCardBackFace;
