import React, { Component } from "react";
import "./styles/App.css";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import { getRandomDataObjects, shuffleObjects } from "./helpers";
import LoadingSpinner from "./components/LoadingSpinner";
import Footer from "./components/Footer";

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
      highScore: localStorage.getItem("memory-card-score") || 0,
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
      currentScore: 0,
    }));
  }

  handleCardClick(event) {
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
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="App">
          <Header />
          <div className="App__error">
            <p>Connection error, please try again refresh page!</p>
            <p>{this.state.error.message}</p>
          </div>

          <Footer />
        </div>
      );
    }
    return (
      <div className="App">
        <Header
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
          level={this.state.round}
          gameRunning={this.state.gameRunning}
        />
        {!this.state.dataLoaded && <LoadingSpinner />}
        {this.state.dataLoaded && !this.state.gameRunning && (
          <div className="App__start-game">
            <button onClick={this.handleNewGame}>Start New Game</button>
            <p className="App__star-game__rules">
              Test your memory. You are presented with multiple card of heros.
              The cards get shuffled every-time they are clicked. You CAN NOT
              click on any image more than once or else game is over. Get the
              highest score as possible.
            </p>
          </div>
        )}
        {this.state.gameRunning && (
          <GameBoard
            data={this.state.gameCards}
            handleCardClick={this.handleCardClick}
          />
        )}
        <Footer />
      </div>
    );
  }

  componentDidUpdate() {
    localStorage.setItem("memory-card-score", this.state.highScore);
  }
}

export default App;
