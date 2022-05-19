import React, { Component } from "react";
import "./styles/App.css";
import GameBoard from "./components/GameBoard";
import { getRandomDataObjects, shuffleObjects } from "./helpers";
import LoadingSpinner from "./components/LoadingSninner";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataLoaded: false,
      round: 1,
      gameCards: [],
      currentRoundGuesses: [],
      gameRunning: false,
    };
    this.handleNewGame = this.handleNewGame.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  getRandomCards(level = 1) {
    return getRandomDataObjects(level * 4, this.state.data);
  }

  handleNewGame() {
    this.setState((state) => ({
      round: 1,
      gameCards: this.getRandomCards(),
      currentRoundGuesses: [],
      gameRunning: true,
    }));
  }

  handleCardClick(event) {
    console.log(this.state);
    const cardId = event.target.dataset.id;

    if (this.state.currentRoundGuesses.includes(cardId)) {
      this.setState((state) => ({
        gameRunning: false,
      }));
    }

    if (
      this.state.currentRoundGuesses.length + 1 ===
      this.state.gameCards.length
    ) {
      alert("YOU WON");
      this.setState((state) => ({
        round: state.round + 1,
        gameCards: this.getRandomCards(state.round + 1),
        currentRoundGuesses: [],
        gameRunning: true,
      }));
      return;
    }

    this.setState((state) => ({
      gameCards: shuffleObjects(state.gameCards),
      currentRoundGuesses: [...state.currentRoundGuesses, cardId],
    }));
  }

  componentDidMount() {
    fetch(
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api//all.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const heros = data.map((ele) => ({
          id: ele.id,
          name: ele.name,
          image: ele.images.sm,
        }));
        this.setState({
          data: heros,
          dataLoaded: true,
          gameCards: getRandomDataObjects(12, heros),
        });
      });
  }

  render() {
    return (
      <div className="App">
        {!this.state.dataLoaded && <LoadingSpinner />}
        {this.state.dataLoaded && !this.state.gameRunning && (
          <button onClick={this.handleNewGame}>Start New Game</button>
        )}
        {this.state.gameRunning && (
          <GameBoard
            data={this.state.gameCards}
            handleCardClick={this.handleCardClick}
          />
        )}
      </div>
    );
  }
}

export default App;
