import React from "react";
import "../styles/Header.css";

function Header(props) {
  return (
    <header className="Header">
      <h1 className="Header__headings">Memory Cards</h1>
      {props.gameRunning && (
        <div className="Header__scoreboard">
          <h2>Current Score: {props.currentScore}</h2>
          <h2>Current Level: {props.level}</h2>
          <h2>High Score: {props.highScore}</h2>
        </div>
      )}
    </header>
  );
}

export default Header;
