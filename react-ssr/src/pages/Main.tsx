import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import SelectSort from '../components/SelectSort';
import Table from '../components/Table';
import { IMainPageProp } from '../interfaces/interfaces';
import './Main.css';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { handleMenuFlag } from '../store/action-creator/menu-flag';

function Main({ addArticle }: IMainPageProp): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(10);

  const { articles } = useTypeSelector((state) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleMenuFlag(false));
  }, [dispatch]);

  function handleArticlesPerPage(number: number) {
    if (number <= 0) {
      setArticlesPerPage(10);
    } else {
      setArticlesPerPage(number);
    }
  }

  const lastArticleIndex = currentPage * articlesPerPage;
  const firsArticleIndex = lastArticleIndex - articlesPerPage;
  const currentArticle = articles.slice(firsArticleIndex, lastArticleIndex);

  const result: JSX.Element[] = [];

  for (let i = 0; i < currentArticle.length; i += 1) {
    if (i < articlesPerPage) {
      result.push(
        <tr key={nanoid()}>
          <td>{currentArticle[i].author}</td>
          <td>{currentArticle[i].publishedAt}</td>
          <td>{currentArticle[i].description}</td>
          <td>
            <a href={currentArticle[i].url}>{currentArticle[i].title}</a>
          </td>
          <td>
            <Link to={`/article/${currentArticle[i].source.id}`}>
              <button onClick={() => addArticle(currentArticle[i])} type="button">
                Details
              </button>
            </Link>
          </td>
        </tr>
      );
    } else {
      break;
    }
  }

  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="main-page">
      <Search />
      <h4>Sort by:</h4>
      <SelectSort />
      <br />
      <label htmlFor="number-articles" className="input-num">
        <span className="input-num__heading">Number of articles per page:</span> <br />
        <input
          type="number"
          id="number-articles"
          onBlur={(event) => handleArticlesPerPage(Number(event.target.value))}
          className="input-num__field"
        />
      </label>
      <Table arrArticles={result} />
      <Pagination
        articlesPerPage={articlesPerPage}
        totalArticles={articles.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Main;
