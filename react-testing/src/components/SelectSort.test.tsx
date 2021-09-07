/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import SelectSort from './SelectSort';
import { store } from '../store';

describe('Select component', () => {
  test('Render sort list', () => {
    render(
      <Provider store={store}>
        <SelectSort />
      </Provider>
    );
    fireEvent.change(screen.getByTestId('select-element'), {
      target: { value: 'relevancy' },
    });
    const options = screen.getAllByTestId('select-option') as HTMLOptionElement[];
    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();
    expect(screen.getByText(/Relevancy/i)).toBeInTheDocument();
  });
});
