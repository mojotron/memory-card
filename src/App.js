import React, { Component } from "react";
import "./styles/App.css";
import HeroCard from "./components/HeroCard";
import { getRandomDataObjects, shuffleObjects } from "./helpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataLoaded: false,
      gameCards: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api//all.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const heros = data
          // .filter((ele) => ele.biography.publisher === "Marvel Comics")
          .map((ele) => ({
            id: ele.id,
            name: ele.name,
            image: ele.images.sm,
          }));
        this.setState({ data: heros, dataLoaded: true });
      });
  }

  createHeroElements() {
    const cards = getRandomDataObjects(6, this.state.data);
    return cards.map((hero) => <HeroCard key={hero.id} data={hero} />);
  }

  render() {
    return (
      <div className="App">
        {this.state.dataLoaded && this.createHeroElements()}
      </div>
    );
  }
}

export default App;
