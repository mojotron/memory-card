import { ReactNode, createContext, useReducer } from 'react';

type State = {
  // current game
  running: boolean;
  currentScore: number;
  currentLevel: number;
  gameCards: number[];
  playedCards: number[];
  gameOver: boolean;
  // best score from current client
  bestScore: number;
  bestLevel: number;
};

const createInitialState = (): State => {
  return {
    running: false,
    currentScore: 0,
    currentLevel: 0,
    bestScore: 0,
    bestLevel: 0,
    gameCards: [],
    playedCards: [],
    gameOver: false,
  };
};

type Actions = { type: 'Temp' };

const gameReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'Temp':
      return { ...state };
    default:
      return { ...state };
  }
};

const useGamePlaySource = () => {
  const [state, dispatch] = useReducer(gameReducer, createInitialState());

  return { state, dispatch };
};

const GamePlayContext = createContext<ReturnType<typeof useGamePlaySource>>(
  {} as unknown as ReturnType<typeof useGamePlaySource>
);

export function GamePlayContextProvider({ children }: { children: ReactNode }) {
  return (
    <GamePlayContext.Provider value={useGamePlaySource()}>
      {children}
    </GamePlayContext.Provider>
  );
}
