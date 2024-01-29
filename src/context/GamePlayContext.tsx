import { ReactNode, createContext, useReducer } from 'react';
import { getRandomItemsFromArray } from '../utils/getRandomItemsFromArray';
import pokemonData from '../data/pokemon.json';
import type { PokemonType } from '../types/pokemonType';

const CARDS_PER_LEVEL = 4;

type State = {
  // current game
  running: boolean;
  currentScore: number;
  currentLevel: number;
  gameCards: PokemonType[];
  playedCards: PokemonType[];
  gameOver: boolean;
  // best score from current client
  bestScore: number;
  bestLevel: number;
};

type Actions = { type: 'game/start-new' } | { type: 'game/play-turn' };

const createPokemonCardDeck = (size: number) => {
  return getRandomItemsFromArray(size, pokemonData);
};

const gameReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'game/start-new':
      return {
        ...state,
        running: true,
        currentScore: 0,
        currentLevel: 1,
        gameCards: createPokemonCardDeck(state.currentLevel * CARDS_PER_LEVEL),
      };
    case 'game/play-turn':
      return { ...state };
    default:
      return { ...state };
  }
};

const useGamePlaySource = (): {
  running: boolean;
  gameCards: PokemonType[];
  startGame: () => void;
} => {
  const [{ running, gameCards }, dispatch] = useReducer(gameReducer, {
    running: false,
    currentScore: 0,
    currentLevel: 1,
    bestScore: 0,
    bestLevel: 0,
    gameCards: [],
    playedCards: [],
    gameOver: false,
  });

  const startGame = () => {
    dispatch({ type: 'game/start-new' });
  };

  return { running, gameCards, startGame };
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

//   const [gameOver, setGameOver] = useState(false);
//   const [cardsPlayed, setCardsPlayed] = useState<number[]>([]);

//   const handleClickCard = (id: number) => {
//     if (cardsPlayed.includes(id)) {
//       setGameOver(true);
//     } else {
//       const newCardsPlayed = [...cardsPlayed, id];
//       if (newCardsPlayed.length === cardIds.length) {
//         setLoading(true);
//         setLevel((oldValue) => oldValue + 1);
//         setCardIds(
//           shuffle(Array.from({ length: 4 * (level + 1) }, (_, i) => i + 1))
//         );
//         setCardsPlayed([]);
//         setBestScore((oldValue) => (oldValue >= score ? oldValue : score + 1));
//         setBestLevel((oldValue) => (oldValue >= level ? oldValue : level + 1));
//       } else {
//         setLoading(true);
//         setCardsPlayed((oldValue) => [...oldValue, id]);
//         setCardIds((oldValue) => shuffle(oldValue));
//       }
//       setScore((oldValue) => oldValue + 1);
//       setLoading(true);
//     }
//   };

//   useEffect(() => {
//     if (!loading) return;
//     const timeout = setTimeout(() => {
//       setLoading(false);
//     }, 500);

//     return () => {
//       clearTimeout(timeout);
//     };
//   }, [loading]);

//   const handleStartGame = () => {
//     setGameOver(false);
//     setScore(0);
//     setLevel(1);
//     setCardsPlayed([]);
//     setCardIds(shuffle(Array.from({ length: 4 }, (_, i) => i + 1)));
//   };
