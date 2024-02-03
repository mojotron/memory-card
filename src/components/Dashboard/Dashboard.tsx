import { useState } from 'react';

import NewGameBtn from '../NewGameBtn/NewGameBtn';
import GameRules from '../GameRules/GameRules';
import Header from '../Header/Header';
import RulesBtn from '../RulesBtn/RulesBtn';

function Dashboard() {
  const [showRules, setShowRules] = useState(false);

  return (
    <section className="text-center shadow-lg bg-neutral-700 rounded-md py-8 relative w-full max-w-[500px] flex flex-col items-center">
      <RulesBtn onToggleShow={() => setShowRules((oldValue) => !oldValue)} />
      {showRules && <GameRules />}
      <Header />
      <NewGameBtn />
    </section>
  );
}

export default Dashboard;
