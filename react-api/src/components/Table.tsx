import React from 'react';
import './Table.css';

function Table({ arrArticles }: { arrArticles: JSX.Element[] }): JSX.Element {
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
