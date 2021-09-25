import { Dispatch } from 'react';
import { ISortAction, VALUE_SORT } from '../../interfaces/interfaces';

export const choiseSortType = (value: string) => {
  return (dispatch: Dispatch<ISortAction>): void => {
    dispatch({ type: VALUE_SORT, payload: value });
  };
};
