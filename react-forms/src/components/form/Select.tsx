import React, { useState } from 'react';

function Select(): JSX.Element {
  const [value, setValue] = useState('Belarus');

  return (
    <label htmlFor="select-contry">
      Your choise: {value}
      <select
        value={value}
        id="select-country"
        onChange={(event) => {
          setValue(event.target.value);
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
