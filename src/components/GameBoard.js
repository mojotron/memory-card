import React, { Component } from "react";
import { shuffleObjects } from "../helpers";
import "../styles/GameBoard.css";
import HeroCard from "./HeroCard";

class GameBoard extends Component {
  state = {
    data: this.props.data,
  };

  handleCardClick = () =>
    this.setState((state) => ({ data: shuffleObjects(state.data) }));

  componentDidUpdate(prevProps) {
    const condition = prevProps.data.every((ele) => {
      return this.props.data.find((ele2) => ele2.id === ele.id);
    });
    console.log(condition);
    if (!condition) {
      this.setState({ data: this.props.data });
    }
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    const cardElements = this.state.data.map((card) => (
      <HeroCard key={card.id} data={card} handleClick={this.handleCardClick} />
    ));
    return (
      <section className="GameBoard">
        {cardElements}
        <button onClick={this.props.handleNewGame}>new</button>
      </section>
    );
  }
}

export default GameBoard;
