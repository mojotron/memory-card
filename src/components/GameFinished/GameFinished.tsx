import React from 'react';
import HighlightTextWrapper from '../HighlightTextWrapper/HighlightTextWrapper';
import NewGameBtn from '../NewGameBtn/NewGameBtn';
import pokemonData from '../../data/pokemon.json';

function GameFinished() {
  return (
    <div className="bg-neutral-700 p-8 text-center flex flex-col justify-center items-center gap-5">
      <HighlightTextWrapper
        options={{ colorStart: '#fbbf24', colorEnd: '#ca8a04' }}
      >
        <h1 className="text-4xl">Game Finished</h1>
      </HighlightTextWrapper>
      <h2>Congratulation!</h2>
      <p>You have caught all {pokemonData.length} Pokemon!</p>
      <NewGameBtn />
    </div>
  );
}

export default GameFinished;
