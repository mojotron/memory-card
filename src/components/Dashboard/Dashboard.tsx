import { useState } from 'react';
import { SiPokemon as PokemonLogo } from 'react-icons/si';
import { ImInfo as RulesIcon } from 'react-icons/im';
import { RULES, SLOGAN } from '../../constants/gameRules';

function Dashboard() {
  const [showRules, setShowRules] = useState(false);
  return (
    <section className="relative max-w-[500px] border border-red-400">
      <PokemonLogo size={150} />
      <h1>Memory Card</h1>
      <button
        type="button"
        onClick={() => setShowRules((oldValue) => !oldValue)}
        className="flex gap-2 items-center absolute top-0 right-0"
      >
        Rules
        <RulesIcon />
      </button>

      {showRules ? (
        <p>
          {RULES} {SLOGAN}
        </p>
      ) : null}

      <button>New Game</button>
    </section>
  );
}

export default Dashboard;
