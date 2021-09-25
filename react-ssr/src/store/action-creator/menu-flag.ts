import { Dispatch } from 'react';
import { IMenuFlagAction, VALUE_FLAG_MENU } from '../../interfaces/interfaces';

export const handleMenuFlag = (value: boolean) => {
  return (dispatch: Dispatch<IMenuFlagAction>): void => {
    dispatch({ type: VALUE_FLAG_MENU, payload: value });
  };
};
