import React from 'react';
import { ISwitchProp } from '../../interface/interfaces';
import './Switch.css';

function Switch({ value, handleChange }: ISwitchProp): JSX.Element {
  return (
    <div className="content">
      Your gender:
      <label className="switch" htmlFor="switch-btn">
        <input
          type="checkbox"
          id="switch-btn"
          checked={value}
          onChange={() => handleChange(!value)}
        />
        <span className="slider round" />
      </label>
      <span>{!value ? 'Male' : 'Female'}</span>
    </div>
  );
}

export default Switch;
