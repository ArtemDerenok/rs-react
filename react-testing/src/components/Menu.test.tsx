/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './Menu';

test('Menu contains correct text', () => {
  render(
    <Router>
      <Menu />
    </Router>
  );
  const text = screen.getByText(/Home/i);
  expect(text).toBeInTheDocument();
});
