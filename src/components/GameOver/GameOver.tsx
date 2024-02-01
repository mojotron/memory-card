import { useGamePlayContext } from '../../hooks/useGameContext';
import HighlightTextWrapper from '../HighlightTextWrapper/HighlightTextWrapper';
import NewGameBtn from '../NewGameBtn/NewGameBtn';
import PokemonCardFrontFace from '../PokemonCard/PokemonCardFrontFace';

function GameOver() {
  const { lastPlayedPokemon } = useGamePlayContext();

  return (
    <div className="rounded-md w-full p-8 bg-neutral-600  flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col gap-4 justify-center items-center">
        <HighlightTextWrapper>
          <h2 className="text-4xl font-rubik uppercase">Game Over</h2>
        </HighlightTextWrapper>
        <p className="text-lg">You selected {lastPlayedPokemon?.name} twice!</p>
        {lastPlayedPokemon && (
          <div className="h-[160px] w-[128px]">
            <PokemonCardFrontFace
              pokemon={lastPlayedPokemon}
              onPlay={() => {}}
            />
          </div>
        )}
      </div>
      <NewGameBtn />
    </div>
  );
}

export default GameOver;
