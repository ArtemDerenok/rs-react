import { AxiosResponse } from 'axios';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { IAddArticlesProp, IGetArticles } from '../intefaces/interfaces';
import axios from '../services/api';

const API_KEY = '7b1fd1e758da411aad435c3ccd37acd5';

function Search({ addArticles }: IAddArticlesProp): JSX.Element {
  const [valueSearch, setValueSearch] = useState('');
  const [valueLoad, setValueLoad] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValueSearch(event.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setValueLoad(true);
    try {
      const response: AxiosResponse<IGetArticles> = await axios.get(
        `v2/everything?q=${valueSearch}&apiKey=${API_KEY}`
      );
      addArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setValueLoad(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search-bar">
        <input
          type="text"
          value={valueSearch}
          id="search-bar"
          onChange={(event) => handleChange(event)}
        />
      </label>
      <button type="submit" disabled={valueLoad}>
        {valueLoad ? 'Loading...' : 'Search'}
      </button>
    </form>
  );
}

export default Search;
