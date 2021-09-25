import {
  ArticleAction,
  FETCH_ARTICLES,
  FETCH_ARTICLES_ERROR,
  FETCH_ARTICLES_SUCCESS,
  IArticle,
  IArticleState,
} from '../../interfaces/interfaces';

const result: IArticle[] = [];

const defaultValue: IArticleState = {
  articles: result,
  loading: false,
  error: null,
};

export const articlesReduce = (state = defaultValue, action: ArticleAction): IArticleState => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return { loading: true, error: null, articles: [] };
    case FETCH_ARTICLES_SUCCESS:
      return { loading: false, error: null, articles: action.payload };
    case FETCH_ARTICLES_ERROR:
      return { loading: false, error: action.payload, articles: [] };
    default:
      return state;
  }
};
