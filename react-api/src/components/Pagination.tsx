import { nanoid } from 'nanoid';
import React from 'react';
import { IPaginationProp } from '../intefaces/interfaces';
import './Pagination.css';

function Pagination({
  articlesPerPage,
  totalArticles,
  paginate,
  currentPage,
}: IPaginationProp): JSX.Element {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i += 1) {
    pageNumbers.push(i);
  }

  const result = pageNumbers.map((elem) => {
    return (
      <li className="page-item" key={nanoid()}>
        <button
          type="button"
          className={`page-btn ${currentPage === elem ? 'page-current' : ''}`}
          onClick={() => {
            paginate(elem);
          }}
        >
          {String(elem)}
        </button>
      </li>
    );
  });

  return (
    <div>
      <ul className="pagination">{result}</ul>
    </div>
  );
}

export default Pagination;
