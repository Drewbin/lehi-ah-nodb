import React from 'react'

// --- StyleSheet --- //
import './randomize.css';

export default function Randomize(props) {
  return (
    <div className="randomize-btn-container">
        <button onClick={props.random}>Randomizer</button>
    </div>
  )
}
