import React, { Component } from 'react';

// --- Imported Packages --- //
import axios from 'axios';

// --- Imported Componants --- //
import Card from './componants/card/Card';
import Header from './componants/header/Header';
import Randomize from './componants/randomize/Randomize';
import CreateCharacter from './componants/create-character/CreateCharacter';

// --- Style Sheet --- //
import 'reset-css';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      characters: []
    }
  }

  // --- LifeCycle Methods --- //
  componentDidMount(){
    this.getCharacters();
  }

  // --- Custom Methods --- //
  getCharacters = () => {
    let randomID = Math.floor(Math.random() * 20);
    axios.get(`https://rickandmortyapi.com/api/character/?page=${randomID}`).then((response) => {
      console.log(response.data.results)
      this.setState({
        characters: response.data.results
      })
    }).catch((err) => {
      console.error(err);
    })
  };

  render() {
    // --- Map through characters and render them using the Card component --- //
    let mappedCharacters = this.state.characters.map((character, index) => {
      if(index < 8){
        return <Card key={index} info={character}/>
      }
    });

    return (
      <div className="App">
        <Header />
        <Randomize random={this.getCharacters}/>
        <div className="character-container">
          {mappedCharacters}
        </div>
        <CreateCharacter />
      </div>
    );
  }
}

export default App;
