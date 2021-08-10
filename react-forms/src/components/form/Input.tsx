import React from 'react';
import { IInputTextProp } from '../../interface/interfaces';

function Input({ value, name, type, id, handleChange, blurHandler }: IInputTextProp): JSX.Element {
  return (
    <label htmlFor={id}>
      {name}:
      <input
        name={name}
        id={id}
        value={value}
        type={type}
        onChange={(event) => {
          handleChange(id, event);
        }}
        onBlur={(event) => {
          blurHandler(event);
        }}
      />
    </label>
  );
}

export default Input;
