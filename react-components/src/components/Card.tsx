import React from 'react';
import { ICardProps } from '../interface/interfaces';
import './Card.css';

function Card({ heading, text, img }: ICardProps): JSX.Element {
  return (
    <div className="card">
      <img src={img} alt="" className="card-image" />
      <h3 className="card-heading">{heading}</h3>
      <p>{text}</p>
      <button type="button" className="card-btn">
        BUTTON
      </button>
      <button type="button" className="card-closeBtn">
        <span>&#10006;</span>
      </button>
    </div>
  );
}

export default Card;
