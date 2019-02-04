import React, { Component } from 'react'
import axios from 'axios';

// --- StyleSheet --- //
import './createcharacter.css';

export default class CreateCharacter extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            image: '',
            gender: ''
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

    sendInfo = () => {

    }

  render() {
      console.log(this.state)
    return (
      <div className="custom-character-container">
        <div className="creator-container">
            <h1>Create Your Own Character</h1>
            <div>
                <span>Image</span>
                <input type="text" onChange={(e) => this.handleChangeImage(e.target.value)}/>
            </div>
            <div>
                <span>Name</span>
                <input type="text" onChange={(e) => this.handleChangeName(e.target.value)}/>
            </div>
            <div>
                <span>Gender</span>
                <input type="text" onChange={(e) => this.handleChangeGender(e.target.value)}/>
            </div>
            <button>Create</button>
        </div>
        <div className="character-display-container">

        </div>
      </div>
    )
  }
}
