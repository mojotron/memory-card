import React, { Component } from "react";
import "./styles/App.css";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
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
      currentScore: 0,
      highScore: 0,
    };
    this.handleNewGame = this.handleNewGame.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  getRandomCards(level = 5) {
    return getRandomDataObjects(level * 4, this.state.data);
  }

  handleNewGame() {
    this.setState((state) => ({
      round: 1,
      gameCards: this.getRandomCards(),
      currentRoundGuesses: [],
      gameRunning: true,
      currentScore: 0,
    }));
  }

  handleCardClick(event) {
    console.log(this.state);
    const cardId = event.target.dataset.id;

    if (this.state.currentRoundGuesses.includes(cardId)) {
      this.setState((state) => ({
        gameRunning: false,
        highScore:
          state.currentScore > state.highScore
            ? state.currentScore
            : state.highScore,
      }));
      return;
    }

    if (
      this.state.currentRoundGuesses.length + 1 ===
      this.state.gameCards.length
    ) {
      this.setState((state) => ({
        round: state.round + 1,
        gameCards: this.getRandomCards(state.round + 1),
        currentRoundGuesses: [],
        gameRunning: true,
        currentScore: state.currentScore + 1,
      }));
      return;
    }

    this.setState((state) => ({
      gameCards: shuffleObjects(state.gameCards),
      currentRoundGuesses: [...state.currentRoundGuesses, cardId],
      currentScore: state.currentScore + 1,
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
        <Header
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
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
        <footer
          className={
            this.state.gameRunning ? "foot--relative" : "foot--absolute"
          }
        >
          <p>
            created by{" "}
            <a href="https://github.com/mojotron/memory-card">@mojotron</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
