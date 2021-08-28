// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { articlesReduce } from './reducers/articlesReducer';
import { searchReduce } from './reducers/searchReducer';
import { sortReduce } from './reducers/sortReduce';

const rootReducer = combineReducers({
  articles: articlesReduce,
  searchValues: searchReduce,
  sortTypeValue: sortReduce,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;
