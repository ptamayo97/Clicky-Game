import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Container from "./components/Container";
import Row from "./components/Row";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  state = {
    characters,
    clickedCharacters: [],
    score: 0,
    topScore: 0,
    message: "Click an image to begin!"
  };

  topScore = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({
        topScore: this.state.score
      });
      console.log(this.state.topScore);
    }
  };

  click = event => {
    const characterShuffle = this.state.characters.sort(
      () => 0.5 - Math.random()
    );
    const currentCharacter = event.target.alt;
    console.log(currentCharacter);
    const characterClicked =
      this.state.clickedCharacters.indexOf(currentCharacter) > -1;
    if (characterClicked) {
      this.setState({
        characters: characterShuffle,
        clickedCharacters: [],
        score: 0,
        message: "Game Over!"
      });
      setTimeout(() => {
        alert("You lose");
      }, 200);
      this.topScore();
    } else {
      this.setState(
        {
          characters: characterShuffle,
          clickedCharacters: this.state.clickedCharacters.concat(
            currentCharacter
          ),
          score: this.state.score + 1,
          message: "Correct!"
        },
        () => {
          if (this.state.score === 12) {
            setTimeout(() => {
              alert("You Win!");
            }, 200);
            this.topScore();
            this.setState({
              characters: characterShuffle,
              clickedcharacters: [],
              score: 0,
              message: "You Win!"
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Header />
        <Container>
          <Row>
            {this.state.characters.map(character => (
              <Card
                key={character.id}
                name={character.name}
                image={character.image}
                alt={character.name}
                click={this.click}
              />
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
