import React from 'react'

// --- StyleSheet --- //
import './customcard.css';

export default function CustomCard(props) {
    console.log(props)
  return (
    <div className="custom-card-container">
      <div className="custom-card-image" style={{backgroundImage: `url(${props.character.image})`}}>
        
      </div>
      <div className="custom-card-info">
        <div className="custom-info">
            <div>
                <span>Name</span>
                {props.character.name}
            </div>
            <div>
                <span>Gender</span>
                {props.character.gender}
            </div>
        </div>
        <div className="btns-container">
            <button onClick={() => props.remove(props.id)}>Remove</button>
            <button>Edit</button>
        </div>
      </div>
    </div>
  )
}