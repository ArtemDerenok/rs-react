import React from 'react';
import { ISelectProp } from '../intefaces/interfaces';

function SelectSort({ setSortType }: ISelectProp): JSX.Element {
  return (
    <label htmlFor="sort-type">
      <select
        id="sort-type"
        defaultValue="1"
        onChange={(event) => {
          setSortType(event);
        }}
      >
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
