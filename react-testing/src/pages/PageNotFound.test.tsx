/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageNotFound from './PageNotFound';

test('Error page renders', () => {
  render(
    <Router>
      <PageNotFound />
    </Router>
  );
  const text = screen.getByText(/Page not found/i);
  expect(text).toBeInTheDocument();
});
