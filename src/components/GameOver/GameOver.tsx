import { useGamePlayContext } from '../../hooks/useGameContext';
// components
import Modal from '../Modal/Modal';
import HighlightTextWrapper from '../HighlightTextWrapper/HighlightTextWrapper';
import NewGameBtn from '../NewGameBtn/NewGameBtn';
import PokemonCardFrontFace from '../PokemonCard/PokemonCardFrontFace';
// constants
import { ColorValues } from '../../constants/colorValues';

function GameOver() {
  const { lastPlayedPokemon, newHighScore, currentScore } =
    useGamePlayContext();

  return (
    <Modal
      options={{
        colorStart: ColorValues.gameOverStart,
        colorEnd: ColorValues.gameOverEnd,
      }}
    >
      <div className="flex flex-col gap-4 justify-center items-center text-center">
        <HighlightTextWrapper
          options={{
            colorStart: ColorValues.gameOverStart,
            colorEnd: ColorValues.gameOverEnd,
          }}
        >
          <h2 className="text-4xl">Game Over</h2>
        </HighlightTextWrapper>
        <p className="text-lg">
          You selected{' '}
          <span className="font-bold">{lastPlayedPokemon?.name}</span> twice!
        </p>
        {newHighScore ? (
          <p className="text-emerald-400 font-bold">
            You set NEW High Score {currentScore}
          </p>
        ) : (
          <p>
            Your sore is <span className="font-bold">{currentScore}</span>
          </p>
        )}

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
    </Modal>
  );
}

export default GameOver;
