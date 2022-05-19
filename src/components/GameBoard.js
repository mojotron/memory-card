import React, { Component } from "react";
import "../styles/GameBoard.css";
import HeroCard from "./HeroCard";

class GameBoard extends Component {
  render() {
    const cardElements = this.props.data.map((card) => (
      <HeroCard
        key={card.id}
        data={card}
        handleClick={this.props.handleCardClick}
      />
    ));
    return <section className="GameBoard">{cardElements}</section>;
  }
}

export default GameBoard;
