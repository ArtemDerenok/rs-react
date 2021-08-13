import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import Search from '../components/Search';
import SelectSort from '../components/SelectSort';
import Table from '../components/Table';
import { IArticle } from '../intefaces/interfaces';

function Main(): JSX.Element {
  const [arrArticles, setArrAticles] = useState<IArticle[]>([]);

  function addArticles(arr: IArticle[]) {
    let copy = [...arrArticles];
    copy = arr;
    setArrAticles(copy);
  }

  const result = arrArticles.map((elem) => {
    return (
      <tr key={nanoid()}>
        <td>{elem.author}</td>
        <td>{elem.publishedAt}</td>
        <td>{elem.description}</td>
        <td>
          <a href={elem.url}>{elem.title}</a>
        </td>
      </tr>
    );
  });

  return (
    <div className="main-page">
      <Search addArticles={addArticles} />
      <SelectSort />
      <Table arrArticles={result} />
    </div>
  );
}

export default Main;
