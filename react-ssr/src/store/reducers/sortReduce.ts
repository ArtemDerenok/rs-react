import { ISortAction, ISortTypeState, VALUE_SORT } from '../../interfaces/interfaces';

const defaultValue: ISortTypeState = {
  sortType: 'publishedAt',
};

export const sortReduce = (state = defaultValue, action: ISortAction): ISortTypeState => {
  switch (action.type) {
    case VALUE_SORT:
      return { sortType: action.payload };
    default:
      return state;
  }
};
