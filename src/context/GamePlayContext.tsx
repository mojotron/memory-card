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

type Actions = { type: 'game/start-new' } | { type: 'game/select-card' };

const gameReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'game/start-new':
      return createInitialState();
    default:
      return { ...state };
  }
};

const useGamePlaySource = () => {
  const [state, dispatch] = useReducer(gameReducer, createInitialState());

  return { state, dispatch };
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

// const [level, setLevel] = useState(1);
//   const [score, setScore] = useState(0);
//   const [bestScore, setBestScore] = useState(0);
//   const [bestLevel, setBestLevel] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const [cardIds, setCardIds] = useState<number[]>(() =>
//     shuffle(Array.from({ length: 4 }, (_, i) => i + 1))
//   );

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
