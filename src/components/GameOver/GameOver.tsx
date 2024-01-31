import React from 'react';
import NewGameBtn from '../NewGameBtn/NewGameBtn';

function GameOver() {
  return (
    <div className="rounded-md border-2 border-red-400 w-[500px] h-[300px] flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="text-4xl">Game Over</h2>
        <p className="text-lg">You selected same Pokemon twice!</p>
      </div>
      <NewGameBtn />
    </div>
  );
}

export default GameOver;
