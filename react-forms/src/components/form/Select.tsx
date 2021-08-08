import React from 'react';
import { IInputProp } from '../../interface/interfaces';

function Select({ value, handleChange }: IInputProp): JSX.Element {
  return (
    <label htmlFor="select-country">
      Your choise: {value}
      <select
        value={value}
        id="select-country"
        onChange={(event) => {
          handleChange(event);
        }}
      >
        <option>Belarus</option>
        <option>Russia</option>
        <option>Ukraine</option>
      </select>
    </label>
  );
}

export default Select;
