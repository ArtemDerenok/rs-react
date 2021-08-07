import React from 'react';
import { IInputProp } from '../../interface/interfaces';

function Input({ value, name, type, id, handleChange }: IInputProp): JSX.Element {
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
