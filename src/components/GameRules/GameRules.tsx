import { RULES, SLOGAN } from '../../constants/gameRules';

function GameRules() {
  return (
    <div className="flex z-20 flex-col gap-4 absolute top-10 w-full p-6 bg-neutral-500 text-neutral-100 rounded-lg shadow-xl">
      <p>{RULES}</p>
      <p className="text-lg">{SLOGAN}</p>
    </div>
  );
}

export default GameRules;
