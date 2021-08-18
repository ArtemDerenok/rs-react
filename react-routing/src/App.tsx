import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Article from './components/Article';
import Menu from './components/Menu';
import { IArticle } from './intefaces/interfaces';
import About from './pages/About';
import Main from './pages/Main';

function App(): JSX.Element {
  const [article, setArticle] = useState<IArticle>();

  function addArticle(elem: IArticle) {
    setArticle(elem);
  }

  return (
    <Router>
      <Menu />
      <div>
        <Switch>
          <Route exact path="/about">
            <About />;
          </Route>
          <Route exact path="/">
            <Main addArticle={addArticle} />;
          </Route>
          <Route exact path="/article/:id">
            <Article article={article} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
