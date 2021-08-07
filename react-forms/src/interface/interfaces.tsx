import React from 'react';

export interface IInputProp {
  value: string;
  name: string;
  type: string;
  id: string;
  handleChange(id: string, event: React.ChangeEvent): void;
}
