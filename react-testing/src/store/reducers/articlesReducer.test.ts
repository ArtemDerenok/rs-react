/**
 * @jest-environment jsdom
 */

import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_ERROR,
  FETCH_ARTICLES_SUCCESS,
  IArticle,
} from '../../intefaces/interfaces';
import { articlesReduce } from './articlesReducer';

const data: IArticle[] = [
  {
    source: {
      id: 'null',
      name: 'Lifehacker.com',
    },
    author: 'Brendan Hesse',
    title: 'How to Find and Delete All Your Old, Unused Accounts',
    description:
      'We all have accounts we no longer use, but some apps and websites make deleting your profile a pain. In those cases, simply ignoring them is an easier option. However, unused accounts are a major security threat—all it takes is one successful data break or cr…',
    url: 'https://lifehacker.com/how-to-find-and-delete-all-your-old-unused-accounts-1847470037',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/cc3bb0002d3ba4791eb03bd83bc9fbb4.jpg',
    publishedAt: '2021-08-12T16:00:00Z',
    content:
      'We all have accounts we no longer use, but some apps and websites make deleting your profile a pain. In those cases, simply ignoring them is an easier option. However, unused accounts are a major sec… [+5700 chars]',
  },
];

test('Should return the articles collection', () => {
  expect(articlesReduce(undefined, { type: FETCH_ARTICLES_SUCCESS, payload: data })).toEqual({
    loading: false,
    error: null,
    articles: data,
  });
});

test('Should return error', () => {
  expect(articlesReduce(undefined, { type: FETCH_ARTICLES_ERROR, payload: '' })).toEqual({
    loading: false,
    error: '',
    articles: [],
  });
});

test('Should return default value', () => {
  expect(articlesReduce(undefined, { type: FETCH_ARTICLES })).toEqual({
    loading: true,
    error: null,
    articles: [],
  });
});
