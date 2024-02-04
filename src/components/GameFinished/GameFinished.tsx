// components
import Modal from '../Modal/Modal';
import HighlightTextWrapper from '../HighlightTextWrapper/HighlightTextWrapper';
import NewGameBtn from '../NewGameBtn/NewGameBtn';
// data
import pokemonData from '../../data/pokemon.json';
// constants
import { ColorValues } from '../../constants/colorValues';

function GameFinished() {
  return (
    <Modal
      options={{
        colorStart: ColorValues.gameFinishStart,
        colorEnd: ColorValues.gameFinishEnd,
      }}
    >
      <div className="bg-neutral-700 p-8 text-center flex flex-col justify-center items-center gap-5">
        <HighlightTextWrapper
          options={{
            colorStart: ColorValues.gameFinishStart,
            colorEnd: ColorValues.gameFinishEnd,
          }}
        >
          <h1 className="text-4xl">Congratulation!</h1>
          <h2 className="text-3xl">You Finished the Game!</h2>
        </HighlightTextWrapper>
        <h3 className="text-lg">
          You have caught all{' '}
          <span className="font-bold">{pokemonData.length}</span> Pokemon!
        </h3>
        <NewGameBtn />
      </div>
    </Modal>
  );
}

export default GameFinished;
