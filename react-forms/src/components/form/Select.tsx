import React from 'react';
import { ISelectProp } from '../../interface/interfaces';

function Select({ value, handleChange }: ISelectProp): JSX.Element {
  return (
    <label htmlFor="select-country">
      Your country:
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
