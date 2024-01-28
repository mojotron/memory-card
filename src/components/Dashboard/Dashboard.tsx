import { useState } from 'react';

import NewGameBtn from '../NewGameBtn/NewGameBtn';
import GameRules from '../GameRules/GameRules';
import Header from '../Header/Header';
import RulesBtn from '../RulesBtn/RulesBtn';

function Dashboard() {
  const [showRules, setShowRules] = useState(false);

  return (
    <section className="shadow-lg rounded-md py-8 relative min-w-[350px] border-2 border-red-400 flex flex-col items-center">
      <RulesBtn onToggleShow={() => setShowRules((oldValue) => !oldValue)} />
      {showRules && <GameRules />}
      <Header />
      <NewGameBtn />
    </section>
  );
}

export default Dashboard;
