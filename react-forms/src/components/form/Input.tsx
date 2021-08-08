import React from 'react';
import { IInputTextProp } from '../../interface/interfaces';

function Input({ value, name, type, id, handleChange }: IInputTextProp): JSX.Element {
  return (
    <label htmlFor={id}>
      {name}:
      <input
        id={id}
        value={value}
        type={type}
        onChange={(event) => {
          handleChange(id, event);
        }}
      />
    </label>
  );
}

export default Input;
