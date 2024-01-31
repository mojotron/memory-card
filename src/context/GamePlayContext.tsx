import { ReactNode, createContext, useEffect, useReducer } from 'react';
import { getRandomItemsFromArray } from '../utils/getRandomItemsFromArray';
import pokemonData from '../data/pokemon.json';
import type { PokemonType } from '../types/pokemonType';
import { shuffle } from '../utils/shuffleArray';

const CARDS_PER_LEVEL = 1;

type State = {
  // current game
  running: boolean;
  currentScore: number;
  currentLevel: number;
  gameCards: PokemonType[];
  playedCards: PokemonType[];
  gameOver: boolean;
  loading: boolean;
  // best score from current client
  bestScore: number;
  bestLevel: number;
};

type Actions =
  | { type: 'game/start-new' }
  | { type: 'game/play-turn'; payload: PokemonType }
  | { type: 'game/finish-loading' }
  | { type: 'game/shuffle' }
  | { type: 'game/over-lost' }
  | { type: 'game/new-level' };
// TODO finish game

const createPokemonCardDeck = (size: number) => {
  return getRandomItemsFromArray(size, pokemonData);
};

const reShuffle = (cards: PokemonType[]) => {
  return shuffle<PokemonType>(cards);
};

const gameReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'game/start-new':
      return {
        ...state,
        running: true,
        currentScore: 0,
        currentLevel: 1,
        gameCards: createPokemonCardDeck(1 * CARDS_PER_LEVEL),
        playedCards: [],
        loading: true,
        gameOver: false,
      };
    case 'game/play-turn':
      return {
        ...state,
        playedCards: [...state.playedCards, action.payload],
        loading: true,
        currentScore: state.currentScore + 1,
      };
    case 'game/finish-loading':
      return {
        ...state,
        loading: false,
      };
    case 'game/shuffle':
      return {
        ...state,
        gameCards: reShuffle(state.gameCards),
      };
    case 'game/over-lost':
      return {
        ...state,
        running: false,
        gameOver: true,
        loading: false,
        bestScore:
          state.currentScore > state.bestScore
            ? state.currentScore
            : state.bestScore,
        bestLevel:
          state.currentLevel > state.bestLevel
            ? state.currentLevel
            : state.bestLevel,
      };
    case 'game/new-level':
      return {
        ...state,
        gameCards: createPokemonCardDeck(
          (state.currentLevel + 1) * CARDS_PER_LEVEL
        ),
        playedCards: [],
        currentLevel: state.currentLevel + 1,
        currentScore: state.currentScore + 1,
        loading: true,
      };
    default:
      return { ...state };
  }
};

const useGamePlaySource = (): {
  running: boolean;
  loading: boolean;
  gameOver: boolean;
  gameCards: PokemonType[];
  currentScore: number;
  bestScore: number;
  currentLevel: number;
  bestLevel: number;
  startGame: () => void;
  playTurn: (pokemon: PokemonType) => void;
} => {
  const [
    {
      running,
      gameCards,
      loading,
      playedCards,
      gameOver,
      currentScore,
      currentLevel,
      bestScore,
      bestLevel,
    },
    dispatch,
  ] = useReducer(gameReducer, {
    running: false,
    currentScore: 0,
    currentLevel: 1,
    bestScore: 0,
    bestLevel: 1,
    gameCards: [],
    playedCards: [],
    gameOver: false,
    loading: false,
  });

  const startGame = () => {
    dispatch({ type: 'game/start-new' });
  };

  const playTurn = (pokemon: PokemonType) => {
    // check if game is over
    const cardAlreadyPlayed = playedCards.find((p) => p.id === pokemon.id);
    if (cardAlreadyPlayed) {
      dispatch({ type: 'game/over-lost' });
      return;
    }
    // TODO check if level is cleared
    if (playedCards.length + 1 === gameCards.length) {
      dispatch({ type: 'game/new-level' });

      return;
    }

    dispatch({ type: 'game/play-turn', payload: pokemon });

    setTimeout(() => {
      dispatch({ type: 'game/shuffle' });
    }, 800);

    // setTimeout(() => {
    //   dispatch({ type: 'game/finish-loading' });
    // }, 1000);
  };

  useEffect(() => {
    if (!loading) return;

    const timer = setTimeout(() => {
      dispatch({ type: 'game/finish-loading' });
    }, 1000);
    // eslint-disable-next-line consistent-return
    return () => clearTimeout(timer);
  }, [loading, running]);

  return {
    running,
    gameCards,
    loading,
    gameOver,
    currentScore,
    currentLevel,
    bestScore,
    bestLevel,
    startGame,
    playTurn,
  };
};

export const GamePlayContext = createContext<
  ReturnType<typeof useGamePlaySource>
>({} as unknown as ReturnType<typeof useGamePlaySource>);

export function GamePlayContextProvider({ children }: { children: ReactNode }) {
  return (
    <GamePlayContext.Provider value={useGamePlaySource()}>
      {children}
    </GamePlayContext.Provider>
  );
}
