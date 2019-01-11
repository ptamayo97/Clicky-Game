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
        <nav id="nav" className="red">
          <div className="nav-wrapper" id="navContent">
            <div className="">Clicky Game!</div>
            <div>
              <Status />
            </div>
            <div>
              <Score />
            </div>
          </div>
        </nav>
        <div className="header">
          <h1>Clicky Game!</h1>
          <h3>
            Click on an image to earn points, but don't click on any more than
            once!
          </h3>
        </div>
        <div className="container">
          <div className="row">
            {this.state.characters.map(character => (
              <div className="col s3">
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
