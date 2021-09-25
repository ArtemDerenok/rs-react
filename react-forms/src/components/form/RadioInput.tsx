import React from 'react';
import { ISelectProp } from '../../interface/interfaces';

function RadioInput({ value, handleChange }: ISelectProp): JSX.Element {
  return (
    <div>
      Processing of my personal data:
      <label htmlFor="agree">
        <input
          id="agree"
          type="radio"
          name="radio"
          value="yes"
          checked={value === 'yes'}
          onChange={(event) => handleChange(event)}
        />
        Yes
      </label>
      <label htmlFor="disagree">
        <input
          id="disagree"
          type="radio"
          name="radio"
          value="no"
          checked={value === 'no'}
          onChange={(event) => handleChange(event)}
        />
        No
      </label>
    </div>
  );
}

export default RadioInput;
