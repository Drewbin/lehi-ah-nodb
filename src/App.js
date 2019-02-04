import React, { Component } from 'react';

// --- Imported Packages --- //
import axios from 'axios';

// --- Imported Componants --- //
import Card from './componants/card/Card';

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
    axios.get('https://rickandmortyapi.com/api/character').then((response) => {
      this.setState({
        characters: response.data.results
      })
    }).catch((err) => {
      console.error(err);
    })
  };

  render() {
    // --- Map through characters and render them using the Card component --- //
    let mappedCharacters = this.state.characters.map((charcter, index) => {
      if(charcter.id < 9){
        return <Card key={index} info={charcter}/>
      }
    });

    return (
      <div className="App">
        <div className="character-container">
          {mappedCharacters}
        </div>
      </div>
    );
  }
}

export default App;
