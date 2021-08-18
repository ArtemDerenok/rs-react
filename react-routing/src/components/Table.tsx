import React from 'react';
import { ITableProp } from '../intefaces/interfaces';
import './Table.css';

function Table({ arrArticles }: ITableProp): JSX.Element {
  return (
    <table>
      <thead className={`${!arrArticles.length ? 'hidden' : ''}`}>
        <tr>
          <th>Author</th>
          <th>Date</th>
          <th>Description</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>{arrArticles}</tbody>
    </table>
  );
}

export default Table;
