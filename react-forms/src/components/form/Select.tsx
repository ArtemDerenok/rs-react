import React from 'react';
import { ISelectProp } from '../../interface/interfaces';

function Select({ value, handleChange }: ISelectProp): JSX.Element {
  return (
    <label htmlFor="select-country">
      Your country:
      <select
        defaultValue={value}
        id="select-country"
        onChange={(event) => {
          handleChange(event);
        }}
      >
        <option value="1" disabled>
          Please select an option...
        </option>
        <option value="Belarus">Belarus</option>
        <option value="Russia">Russia</option>
        <option value="Ukraine">Ukraine</option>
      </select>
    </label>
  );
}

export default Select;
