import React from 'react';
import './card.styles.css';

let myStyle = {
  width: 180,
  height: 180,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'block'
};

export const Card = props => (
  <div className="card-container">
    <img
      style={myStyle}
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2&size=200x200`}
    ></img>
    <h2> {props.monster.name} </h2>
    <p> {props.monster.email} </p>
  </div>
);
