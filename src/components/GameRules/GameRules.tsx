import { RULES, SLOGAN } from '../../constants/textValues';

function GameRules() {
  return (
    <div className="flex font-inter z-20 flex-col justify-center gap-4 absolute top-0 w-full h-full p-6 bg-neutral-700 text-neutral-100 rounded-lg shadow-xl text-left">
      <p>{RULES}</p>
      <p className="text-lg">{SLOGAN}</p>
    </div>
  );
}

export default GameRules;
