/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from './Pagination';

const articlesPerPage = 1;
const totalArticles = 2;
const fakePaginate = jest.fn();
const currentPage = 1;

test('Pagination render', () => {
  render(
    <Pagination
      articlesPerPage={articlesPerPage}
      totalArticles={totalArticles}
      paginate={fakePaginate}
      currentPage={currentPage}
    />
  );
  const button = screen.getAllByRole('button');
  fireEvent.click(button[0]);
  expect(button[0]).toBeInTheDocument();
  expect(button[0]).toHaveClass(`page-current`);
  expect(button[1]).not.toHaveClass(`page-current`);
});
