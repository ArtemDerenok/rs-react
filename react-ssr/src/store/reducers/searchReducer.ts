import { ISearchAction, ISearchState, VALUE_SEARCH } from '../../interfaces/interfaces';

const defaultValue: ISearchState = {
  searchValue: '',
};

export const searchReduce = (state = defaultValue, action: ISearchAction): ISearchState => {
  switch (action.type) {
    case VALUE_SEARCH:
      return { searchValue: action.payload };
    default:
      return state;
  }
};
