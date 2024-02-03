import { useGamePlayContext } from '../../hooks/useGameContext';

function ScoreBoard() {
  const { currentScore, currentLevel, bestScore, bestLevel } =
    useGamePlayContext();

  return (
    <div className="relative w-[200px]">
      <div className="flex justify-center gap-8 z-0 font-bold bg-transparent py-1 text-cyan-400">
        <span>Score</span>
        <span>Level</span>
      </div>
      <p className="absolute top-[50%] [transform:translateY(-50%)_translateX(-25%)] left-0 bg-cyan-100 text-neutral-600 px-3 py-1 font-bold text-lg rounded-tl-[5px] rounded-tr-[15px] rounded-br-[3px] rounded-bl-[20px] border-r-4 border-cyan-500">
        {currentScore}
      </p>
      <p className="absolute top-[50%] [transform:translateY(-50%)_translateX(25%)] right-0 bg-cyan-100 text-neutral-600 px-3 py-1 font-bold text-lg rounded-tl-[15px] rounded-tr-[5px] rounded-br-[20px] rounded-bl-[3px] border-l-4 border-cyan-500">
        {currentLevel}
      </p>

      <div className="flex justify-center items-center gap-3 py-1 z-10 bg-neutral-600 rounded-br-[40px] rounded-bl-[40px] border-l-2 border-r-2 border-t-1 border-emerald-500">
        <span className="text-lg font-bold text-emerald-500">{bestScore}</span>
        <span className="text-sm text-neutral-200">Best</span>
        <span className="text-lg font-bold text-emerald-500">{bestLevel}</span>
      </div>
    </div>
  );
}

export default ScoreBoard;
