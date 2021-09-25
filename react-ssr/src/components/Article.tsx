import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IArticleProp } from '../interfaces/interfaces';
import { handleMenuFlag } from '../store/action-creator/menu-flag';

function Article({ article }: IArticleProp): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleMenuFlag(false));
  }, [dispatch]);

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
