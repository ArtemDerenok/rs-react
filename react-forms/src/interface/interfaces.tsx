import React from 'react';

export interface IInputTextProp {
  value: string;
  name: string;
  type: string;
  id: string;
  handleChange(id: string, event: React.ChangeEvent): void;
}

export interface IInputProp {
  value: string;
  handleChange(event?: React.ChangeEvent, e?: boolean): void;
}

export interface ICardProp {
  name: string;
  surname: string;
  date: string;
  sex: string;
  country: string;
}
