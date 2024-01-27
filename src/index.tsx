import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { GamePlayContextProvider } from './context/GamePlayContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GamePlayContextProvider>
      <App />
    </GamePlayContextProvider>
  </React.StrictMode>
);
