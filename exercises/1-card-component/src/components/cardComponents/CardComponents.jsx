import React from 'react';
import './cardComponents.css';

export default function CardComponents(props) {
  return (
    <div className="card">
      <img src={props.image} alt={`${props.name} img`} />
      <h2 className="title">
        {props.name} {props.lastName}
      </h2>
      <p className="description">{props.description}</p>
      <div className="skills">{props.skills}</div>
    </div>
  );
}
