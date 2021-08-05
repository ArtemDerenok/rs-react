import React from 'react';
import IInputProp from '../../interface/interfaces';

function Input({ value, name, type, id, handleChange }: IInputProp): JSX.Element {
  return (
    <input
      value={value}
      type={type}
      placeholder={name}
      onChange={(event) => {
        handleChange(id, event);
      }}
    />
  );
}

export default Input;
