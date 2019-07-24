import React from 'react';
import './Player.css';

const player = props => {
  return (
    <div className="Div">
      <p className="Player">Player {props.playerNo}</p>
      <button className="Down" onClick={props.down}>
        Down
      </button>
      <span className="Num"> {props.number} </span>
      <button className="Up" onClick={props.up}>
        Up
      </button>
    </div>
  );
};

export default player;
