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

export interface IPaginationProp {
  articlesPerPage: number;
  totalArticles: number;
  paginate(pageNumber: number): void;
  currentPage: number;
}

export interface IArticleProp {
  article: IArticle | undefined;
}

export interface IMainPageProp {
  addArticle(elem: IArticle): void;
}

export interface ITableProp {
  arrArticles: JSX.Element[];
}

export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR';
export const VALUE_SEARCH = 'VALUE_SEARCH';
export const VALUE_SORT = 'VALUE_SORT';
export const VALUE_FLAG_MENU = 'VALUE_FLAG_MENU';

export interface IArticleState {
  articles: IArticle[] | [];
  loading: boolean;
  error: string | null;
}

interface IFetchArticlesAction {
  type: typeof FETCH_ARTICLES;
}

interface IFetchArticlesSuccesActon {
  type: typeof FETCH_ARTICLES_SUCCESS;
  payload: IArticle[];
}

interface IFetchArticlesErrorAction {
  type: typeof FETCH_ARTICLES_ERROR;
  payload: string;
}

export type ArticleAction =
  | IFetchArticlesAction
  | IFetchArticlesErrorAction
  | IFetchArticlesSuccesActon;

export interface ISearchState {
  searchValue: string;
}

export interface ISortTypeState {
  sortType: string;
}

export interface ISearchAction {
  type: typeof VALUE_SEARCH;
  payload: string;
}

export interface ISortAction {
  type: typeof VALUE_SORT;
  payload: string;
}

export interface IMenuFlagState {
  flag: boolean;
}

export interface IMenuFlagAction {
  type: typeof VALUE_FLAG_MENU;
  payload: boolean;
}
