import { AxiosResponse } from 'axios';
import { nanoid } from 'nanoid';
import { Dispatch } from 'react';
import axios from '../../services/api';
import {
  ArticleAction,
  FETCH_ARTICLES,
  FETCH_ARTICLES_ERROR,
  FETCH_ARTICLES_SUCCESS,
  IArticle,
  IGetArticles,
} from '../../intefaces/interfaces';

const API_KEY = '7b1fd1e758da411aad435c3ccd37acd5';

export const fetchArticles = (searchValues: string, sortType: string) => {
  return async (dispatch: Dispatch<ArticleAction>): Promise<void> => {
    try {
      dispatch({ type: FETCH_ARTICLES });
      const response: AxiosResponse<IGetArticles> = await axios.get(
        `v2/everything?q=${searchValues}&pageSize=100&sortBy=${sortType}&apiKey=${API_KEY}`
      );

      const result: IArticle[] = response.data.articles.map((elem) => {
        const e = elem;
        e.source.id = nanoid();
        return e;
      });
      setTimeout(() => {
        dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: result });
      }, 500);
    } catch (e) {
      dispatch({ type: FETCH_ARTICLES_ERROR, payload: 'Ошибка при загрузке статей' });
    }
  };
};
