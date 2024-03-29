import { useGamePlayContext } from '../../hooks/useGameContext';

function NewGameBtn() {
  const { startGame } = useGamePlayContext();

  return (
    <button
      onClick={startGame}
      type="button"
      className="relative inline-flex items-center justify-center p-0.5 bg-gradient-to-br from-cyan-500 to-emerald-400 rounded-lg group hover:text-neutral-700 font-bold"
    >
      <span className="px-5 py-2.5 transition-all ease-in duration-100 bg-neutral-700 rounded-md group-hover:bg-opacity-0">
        New Game
      </span>
    </button>
  );
}

export default NewGameBtn;
