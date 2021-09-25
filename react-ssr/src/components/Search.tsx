import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { fetchArticles } from '../store/action-creator/article';
import { choiseSearchValue } from '../store/action-creator/search-value';

function Search(): JSX.Element {
  const dispatch = useDispatch();
  const { loading } = useTypeSelector((state) => state.articles);
  const searchValue = useTypeSelector((state) => state.searchValues.searchValue);
  const sortTypeValue = useTypeSelector((state) => state.sortTypeValue.sortType);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(fetchArticles(searchValue, sortTypeValue));
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch(choiseSearchValue(event.target.value));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search-bar">
        <input
          type="text"
          value={searchValue}
          id="search-bar"
          onChange={(event) => handleChange(event)}
        />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? 'Loading...' : 'Search'}
      </button>
    </form>
  );
}

export default Search;
