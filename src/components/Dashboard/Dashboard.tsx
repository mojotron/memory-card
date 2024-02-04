import { useState } from 'react';

import NewGameBtn from '../NewGameBtn/NewGameBtn';
import GameRules from '../GameRules/GameRules';
import Header from '../Header/Header';
import RulesBtn from '../RulesBtn/RulesBtn';
import Modal from '../Modal/Modal';

function Dashboard() {
  const [showRules, setShowRules] = useState(false);

  return (
    <Modal>
      {showRules && <GameRules />}
      <RulesBtn onToggleShow={() => setShowRules((oldValue) => !oldValue)} />
      <Header />
      <NewGameBtn />
    </Modal>
  );
}

export default Dashboard;
