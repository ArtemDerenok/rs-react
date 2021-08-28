import React from 'react';
import { useDispatch } from 'react-redux';
import { choiseSortType } from '../store/action-creator/sort-type';

function SelectSort(): JSX.Element {
  const dispatch = useDispatch();

  function hundleValue(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(choiseSortType(event.target.value));
  }

  return (
    <label htmlFor="sort-type">
      <select
        id="sort-type"
        defaultValue="1"
        onChange={(event) => {
          hundleValue(event);
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
