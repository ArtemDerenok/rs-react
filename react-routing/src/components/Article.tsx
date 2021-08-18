import React from 'react';
import { IArticleProp } from '../intefaces/interfaces';

function Article({ article }: IArticleProp): JSX.Element {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{article?.author}</td>
            <td>{article?.publishedAt}</td>
            <td>{article?.description}</td>
            <td>
              <a href={article?.url}>{article?.title}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Article;
