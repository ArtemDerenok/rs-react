import React from 'react';

function Table({ arrArticles }: { arrArticles: JSX.Element[] }): JSX.Element {
  return (
    <table>
      <thead>
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
