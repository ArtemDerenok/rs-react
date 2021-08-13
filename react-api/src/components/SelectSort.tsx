import React from 'react';

function SelectSort(): JSX.Element {
  return (
    <label htmlFor="sort-type">
      <select id="sort-type" defaultValue="1">
        <option value="1" disabled>
          Please select a sort...
        </option>
        <option value="relevancy">Relevancy</option>
        <option value="popularity">Popularity</option>
        <option value="publishedAt">Published at</option>
      </select>
    </label>
  );
}

export default SelectSort;
