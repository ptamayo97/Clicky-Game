import React, { Component } from "react";
import Status from "./components/Status";
import Score from "./components/Score";
import Card from "./components/Card";
import characters from "./characters.json";
import "./App.css";

// const styles = {
//   cardBackground: {
//     backgroundImage: `url(${characters.image})`
//   }
// };

class App extends Component {
  state = {
    characters,
    clickedCharacters: [],
    score: 0,
    topScore: 0,
    message: ""
  };

  cardShuffle = () => {
    const shuffledCharacters = this.shuffleArray(characters);

    this.setState({ charecters: shuffledCharacters });
  };

  shuffleArray = charactersArray => {
    for (let i = charactersArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [charactersArray[i], charactersArray[j]] = [
        charactersArray[j],
        charactersArray[i]
      ];
    }
  };

  cardCheck = () => {};

  render() {
    return (
      <div className="App ">
        <div id="nav" className="red z-depth-2 white-text">
          <div>
            <strong>Clicky Game!</strong>
          </div>
          <Status />
          <Score />
        </div>
        <div className="header ">
          <h1 className="flow-text">
            <strong>Clicky Game!</strong>
          </h1>
          <h3 className="flow-text">
            Click on an image to earn points, but don't click on any more than
            once!
          </h3>
        </div>
        <div className="container cards-section">
          <div className="row">
            {this.state.characters.map(character => (
              <Card
                key={character.id}
                name={character.name}
                image={character.image}
                alt={character.name}
                shuffle={this.cardShuffle}
                // style={styles.cardBackground}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
