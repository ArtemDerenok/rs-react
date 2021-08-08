import React from 'react';
import './Switch.css';
import { IInputProp } from '../../interface/interfaces';

function Switch({ value, handleChange }: IInputProp): JSX.Element {
  return (
    <div className="content">
      <label className="switch" htmlFor="switch-btn">
        <input
          type="checkbox"
          id="switch-btn"
          checked={value}
          onChange={() => handleChange(!value)}
        />
        <span className="slider round" />
      </label>
      <span>Male/Female</span>
      <p>{!value ? 'Male' : 'Female'}</p>
    </div>
  );
}

export default Switch;
