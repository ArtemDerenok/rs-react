import { IMenuFlagState, VALUE_FLAG_MENU, IMenuFlagAction } from '../../interfaces/interfaces';

const defaultValue: IMenuFlagState = {
  flag: false,
};

export const menuFlagReducer = (state = defaultValue, action: IMenuFlagAction): IMenuFlagState => {
  switch (action.type) {
    case VALUE_FLAG_MENU:
      return { flag: action.payload };
    default:
      return state;
  }
};
