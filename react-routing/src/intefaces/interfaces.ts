import { ChangeEvent } from 'react';

export interface IArticle {
  source: { id: string; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface IGetArticles {
  articles: IArticle[];
}

export interface ISearchProp {
  addArticles(arr: IArticle[]): void;
  sortType: string;
}

export interface ISelectProp {
  setSortType(event: ChangeEvent<HTMLSelectElement>): void;
}

export interface IPaginationProp {
  articlesPerPage: number;
  totalArticles: number;
  paginate(pageNumber: number): void;
  currentPage: number;
}

export interface IArticleProp {
  article: IArticle | undefined;
}

export interface IAddArticleProp {
  addArticle(elem: IArticle): void;
}

export interface ITableProp {
  arrArticles: JSX.Element[];
}
