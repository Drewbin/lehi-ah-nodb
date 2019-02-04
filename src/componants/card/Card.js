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
            <div>
                <h1>Status</h1>
                <h2>{props.info.status}</h2>
            </div>

            <div>
                <h1>Species</h1>
                <h2>{props.info.species}</h2>
            </div>

            <div>
                <h1>Gender</h1>
                <h2>{props.info.gender}</h2>
            </div>

            <div>
                <h1>How many episodes</h1>
                <h2>{props.info.episode.length}</h2>
            </div>


        </div>
    </div>
  )
}

export default Card;