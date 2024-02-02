import { ReactNode, createContext, useEffect, useReducer } from 'react';
import { getRandomItemsFromArray } from '../utils/getRandomItemsFromArray';
import pokemonData from '../data/pokemon.json';
import type { PokemonType } from '../types/pokemonType';
import { shuffle } from '../utils/shuffleArray';
import { useLocalStorage } from '../hooks/useLocalStorage';

const CARDS_PER_LEVEL = 4;

type StoredDataType = {
  bestScore: number;
  bestLevel: number;
};

type State = {
  // current game
  running: boolean;
  currentScore: number;
  currentLevel: number;
  gameCards: PokemonType[];
  playedCards: PokemonType[];
  gameOver: boolean;
  loading: boolean;
  lastPlayedPokemon: PokemonType | null;
  newHighScore: boolean;
  // best score from current client
  bestScore: number;
  bestLevel: number;
};

type Actions =
  | { type: 'game/start-new' }
  | { type: 'game/play-turn'; payload: PokemonType }
  | { type: 'game/finish-loading' }
  | { type: 'game/shuffle' }
  | {
      type: 'game/over-lost';
      payload: { pokemon: PokemonType; newHighScore: boolean };
    }
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
        lastPlayedPokemon: null,
        newHighScore: false,
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
        lastPlayedPokemon: action.payload.pokemon,
        newHighScore: action.payload.newHighScore,
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
  lastPlayedPokemon: null | PokemonType;
  newHighScore: boolean;
  startGame: () => void;
  playTurn: (pokemon: PokemonType) => void;
} => {
  const { read, write } = useLocalStorage<StoredDataType>('pokemon-best-sore');
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
      lastPlayedPokemon,
      newHighScore,
    },
    dispatch,
  ] = useReducer(gameReducer, {
    running: false,
    currentScore: 0,
    currentLevel: 1,
    bestScore: read()?.bestScore || 0,
    bestLevel: read()?.bestLevel || 1,
    gameCards: [],
    playedCards: [],
    gameOver: false,
    loading: false,
    lastPlayedPokemon: null,
    newHighScore: false,
  });

  const startGame = () => {
    dispatch({ type: 'game/start-new' });
  };

  const playTurn = (pokemon: PokemonType) => {
    // check if game is over
    const cardAlreadyPlayed = playedCards.find((p) => p.id === pokemon.id);
    if (cardAlreadyPlayed) {
      const isHighScore = currentScore > bestScore;
      dispatch({
        type: 'game/over-lost',
        payload: { pokemon, newHighScore: isHighScore },
      });
      if (isHighScore) {
        write({ bestScore: currentScore, bestLevel: currentLevel });
      }
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
    lastPlayedPokemon,
    newHighScore,
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
