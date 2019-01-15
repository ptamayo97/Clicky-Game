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
    message: ["You guessed Correctly!", "Game Over!"]
  };

  topScore = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
      console.log(this.state.topScore);
    }
  };

  click = event => {
    const currentCharacter = event.target.alt;
    console.log(currentCharacter);
    const characterClicked =
      this.state.clickedCharacters.indexOf(currentCharacter) > -1;
    if (characterClicked) {
      this.setState({
        characters: this.state.characters.sort(() => 0.5 - Math.random()),
        clickedCharacters: [],
        score: 0
      });
      alert("You lose");
      this.topScore();
    } else {
      this.setState(
        {
          characters: this.state.characters.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCharacters: this.state.clickedCharacters.concat(
            currentCharacter
          ),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 12) {
            alert("You Win!");
            this.topScore();
            this.setState({
              characters: this.state.characters.sort(() => 0.5 - Math.random()),
              clickedcharacters: [],
              score: 0
            });
          }
        }
      );
    }
  };

  charactershuffle = () => {
    this.state.characters.sort(() => 0.5 - Math.random());
  };

  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
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
