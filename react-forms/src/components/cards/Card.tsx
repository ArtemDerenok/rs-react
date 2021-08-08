import React from 'react';
import { ICardProp } from '../../interface/interfaces';

function Card({ name, surname, date, sex, country }: ICardProp): JSX.Element {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Surname: {surname}</p>
      <p>Date of Birthday: {date}</p>
      <p>Gender: {sex}</p>
      <p>Country: {country}</p>
    </div>
  );
}

export default Card;
