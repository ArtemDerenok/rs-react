import { Dispatch } from 'react';
import { ISearchAction, VALUE_SEARCH } from '../../intefaces/interfaces';

export const choiseSearchValue = (value: string) => {
  return (dispatch: Dispatch<ISearchAction>): void => {
    dispatch({ type: VALUE_SEARCH, payload: value });
  };
};
