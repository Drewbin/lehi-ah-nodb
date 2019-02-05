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
            customCharacters: [],
            edit: false
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

    updateCharacter = () => {
        let body = this.state;
        axios.put(`/update/0`, body).then(response => {
            console.log(response)
            this.setState({
                customCharacters: response.data
            })
        })
        this.setState({
            name: '',
            image: '',
            gender: '',
            edit: !this.state.edit
        })
    }

    deleteCharacter = (id) => {
        axios.delete(`/remove/${id}`).then(response => {
            this.setState({
                customCharacters: response.data
            })
        })
    }

    editMode = () => {
        this.setState({
            edit: !this.state.edit
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
        return <CustomCard key={index} character={character} remove={this.deleteCharacter} id={index} changeName={this.handleChangeName} changeImage={this.handleChangeImage} changeGender={this.handleChangeGender} edit={this.editMode}/>
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
            {
                this.state.edit ? <button onClick={this.updateCharacter} >Update</button>: <button onClick={this.sendInfo}>Create</button>
            }
        </div>
        <div className="character-display-container">
            {customCharacters}
        </div>
      </div>
    )
  }
}
