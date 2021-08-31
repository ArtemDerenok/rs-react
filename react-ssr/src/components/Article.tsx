import React from 'react';
import { IArticleProp } from '../intefaces/interfaces';

function Article({ article }: IArticleProp): JSX.Element {
  return (
    <div>
      <h3>{article?.title}</h3>
      <p>{article?.content}</p>
      <p>{article?.publishedAt}</p>
      <p>{article?.author}</p>
      <a href={article?.url}>{article?.title}</a>
    </div>
  );
}

export default Article;
