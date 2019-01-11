import React, { Component } from "react";
import Status from "./components/Status";
import Score from "./components/Score";
import Card from "./components/Card";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  state = {
    characters
  };
  render() {
    return (
      <div className="App">
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
        <div className="container">
          <div className="row">
            {this.state.characters.map(character => (
              <div className="col s12 m3">
                <Card
                  key={character.id}
                  name={character.name}
                  src={character.image}
                  alt={character.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
