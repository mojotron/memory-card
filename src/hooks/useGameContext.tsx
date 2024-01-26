import { useContext } from 'react';
import { GamePlayContext } from '../context/GamePlayContext';

export function useGamePlayContext() {
  const context = useContext(GamePlayContext);
  if (!context)
    throw new Error(
      'useGameContext must be used inside GamePlayContextProvider'
    );
  return context;
}
