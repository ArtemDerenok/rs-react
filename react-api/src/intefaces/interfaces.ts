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

export interface IAddArticlesProp {
  addArticles(arr: IArticle[]): void;
}
