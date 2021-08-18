import { AxiosResponse } from 'axios';
import { nanoid } from 'nanoid';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { IArticle, IGetArticles, ISearchProp } from '../intefaces/interfaces';
import axios from '../services/api';

const API_KEY = '7b1fd1e758da411aad435c3ccd37acd5';

function Search({ addArticles, sortType }: ISearchProp): JSX.Element {
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
        `v2/everything?q=${valueSearch}&pageSize=100&sortBy=${sortType}&apiKey=${API_KEY}`
      );

      const result: IArticle[] = response.data.articles.map((elem) => {
        const e = elem;
        e.source.id = nanoid();
        return e;
      });
      addArticles(result);
      localStorage.setItem('table', JSON.stringify(result));
      if (!response.data.articles.length) {
        throw new Error();
      }
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
