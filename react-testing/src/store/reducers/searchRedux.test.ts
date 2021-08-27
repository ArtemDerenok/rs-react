/**
 * @jest-environment jsdom
 */

import { VALUE_SEARCH } from '../../intefaces/interfaces';
import { searchReduce } from './searchReducer';

test('should return the search value', () => {
  expect(searchReduce(undefined, { type: VALUE_SEARCH, payload: 'Apple' })).toEqual({
    searchValue: 'Apple',
  });
});
