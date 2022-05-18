import React, { Component } from "react";
import "./styles/App.css";
import GameBoard from "./components/GameBoard";
import { getRandomDataObjects } from "./helpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataLoaded: false,
      gameCards: [],
    };
    this.handleNewGame = this.handleNewGame.bind(this);
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
          gameCards: getRandomDataObjects(4, heros),
        });
      });
  }

  handleNewGame() {
    console.log("yo");
    this.setState({ gameCards: getRandomDataObjects(4, this.state.data) });
  }

  render() {
    console.log(this.state.gameCards);
    return (
      <div className="App">
        {this.state.dataLoaded && (
          <GameBoard
            data={this.state.gameCards}
            handleNewGame={this.handleNewGame}
          />
        )}
      </div>
    );
  }
}

export default App;
