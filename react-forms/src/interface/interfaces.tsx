import React from 'react';

export interface IInputTextProp {
  value: string;
  name: string;
  type: string;
  id: string;
  handleChange(id: string, event: React.ChangeEvent): void;
  blurHandler(event: React.ChangeEvent): void;
}

export interface ISelectProp {
  value: string;
  handleChange(event: React.ChangeEvent): void;
}

export interface ISwitchProp {
  value: boolean;
  handleChange(e: boolean): void;
}

export interface ICardProp {
  name: string;
  surname: string;
  date: string;
  sex: string;
  country: string;
}
