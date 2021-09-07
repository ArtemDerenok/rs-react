/**
 * @jest-environment jsdom
 */

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import Search from './Search';
import { store } from '../store';

test('Search contains form element', () => {
  render(
    <Provider store={store}>
      <Search />
    </Provider>
  );
  const formId = screen.getByTestId('form-element');
  const input = screen.getByTestId('search-input-element');
  const valueInput = userEvent.paste(input, 'apple');
  fireEvent.change(input, {
    target: { value: valueInput },
  });
  expect(formId).toBeInTheDocument();
});
