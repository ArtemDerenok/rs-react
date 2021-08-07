import React, { useState } from 'react';
import './Switch.css';

function Switch(): JSX.Element {
  const [value, setValue] = useState(false);

  return (
    <div className="content">
      <label className="switch" htmlFor="switch-btn">
        <input type="checkbox" id="switch-btn" checked={value} onChange={() => setValue(!value)} />
        <span className="slider round" />
      </label>
      <span>Male/Female</span>
      <p>{!value ? 'Male' : 'Female'}</p>
    </div>
  );
}

export default Switch;
