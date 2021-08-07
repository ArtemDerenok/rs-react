import React, { useState } from 'react';

function RadioInput(): JSX.element {
  const [value, setValue] = useState('yes');

  return (
    <div>
      <label htmlFor="agree">
        <input
          id="agree"
          type="radio"
          name="radio"
          value="yes"
          checked={value === 'yes'}
          onChange={(event) => setValue(event.target.value)}
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
          onChange={(event) => setValue(event.target.value)}
        />
        No
      </label>
    </div>
  );
}

export default RadioInput;
