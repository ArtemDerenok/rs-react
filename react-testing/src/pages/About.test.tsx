/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

test('About page renders', () => {
  render(<About />);
  const text = screen.getByText(/About page/i);
  expect(text).toBeInTheDocument();
});
