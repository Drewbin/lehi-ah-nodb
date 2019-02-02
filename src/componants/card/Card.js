import React from 'react';

// --- StyleSheet --- //
import './card.css';

function Card(props) {
    console.log(props);
  return (
    <div className="card-container">
        <div className="character-pic-container" style={{backgroundImage: `url(${props.info.image})`}}>
            <div className="character-name-container">
                <h1>{props.info.name}</h1>
            </div>
        </div>
        <div className="character-info-container">

        </div>
    </div>
  )
}

export default Card;