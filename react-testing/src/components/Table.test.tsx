/**
 * @jest-environment jsdom
 */

import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { nanoid } from 'nanoid';

import Table from './Table';

const data: JSX.Element[] = [
  <tr key={nanoid()}>
    <td>author</td>
    <td>publishedAt</td>
    <td>description</td>
    <td>
      <a href="/#">title</a>
    </td>
    <td>
      <Link to="/article/sss">
        <button type="button">Details</button>
      </Link>
    </td>
  </tr>,
];

const dataEmpty: JSX.Element[] = [];

describe('Table component', () => {
  it('Table renders', () => {
    render(
      <Router>
        <Table arrArticles={data} />
      </Router>
    );
    const text = screen.getByText(/Author/);
    const head = screen.getByTestId('thead-element');
    expect(head).not.toHaveClass('hidden');
    expect(text).toBeInTheDocument();
  });
  it('Table without data', () => {
    render(
      <Router>
        <Table arrArticles={dataEmpty} />
      </Router>
    );
    const head = screen.getByTestId('thead-element');
    expect(head).toHaveClass('hidden');
  });
});
