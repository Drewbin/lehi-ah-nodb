import React, { Component } from 'react'
import axios from 'axios';

// --- Components --- //
import CustomCard from './custom-card/CustomCard';

// --- StyleSheet --- //
import './createcharacter.css';

export default class CreateCharacter extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            image: '',
            gender: '',
            customCharacters: []
        }
    }

    //Methods
    handleChangeName = (val) => {
        this.setState({
            name: val
        })
    }

    handleChangeImage = (val) => {
        this.setState({
            image: val
        })
    }

    handleChangeGender = (val) => {
        this.setState({
            gender: val
        })
    }

    deleteCharacter = (id) => {
        axios.delete(`/remove/${id}`).then(response => {
            this.setState({
                customCharacters: response.data
            })
        })
    }

    sendInfo = () => {
        let {state} = this;
        axios.post('/create', state).then(response => {
            this.setState({
                customCharacters: response.data
            })
        })
        this.setState({
            name: '',
            image: '',
            gender: ''
        })
    }

  render() {
      let customCharacters = this.state.customCharacters.map((character, index) => {
        return <CustomCard key={index} character={character} remove={this.deleteCharacter} id={index}/>
      })

    return (
      <div className="custom-character-container">
        <div className="creator-container">
            <h1>Create Your Own Character</h1>
            <div>
                <span>Image</span>
                <input type="text" onChange={(e) => this.handleChangeImage(e.target.value)} value={this.state.image}/>
            </div>
            <div>
                <span>Name</span>
                <input type="text" onChange={(e) => this.handleChangeName(e.target.value)} value={this.state.name}/>
            </div>
            <div>
                <span>Gender</span>
                <input type="text" onChange={(e) => this.handleChangeGender(e.target.value)} value={this.state.gender}/>
            </div>
            <button onClick={this.sendInfo}>Create</button>
        </div>
        <div className="character-display-container">
            {customCharacters}
        </div>
      </div>
    )
  }
}
