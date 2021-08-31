import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Article from './components/Article';
import Menu from './components/Menu';
import { IArticle } from './intefaces/interfaces';
import About from './pages/About';
import Main from './pages/Main';
import PageNotFound from './pages/PageNotFound';
import './style.css';

export function Content(): JSX.Element {
  const [article, setArticle] = useState<IArticle>();
  const location = useLocation();

  function addArticle(elem: IArticle) {
    setArticle(elem);
  }

  return (
    <div>
      <Menu />
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="fade" key={location.key}>
          <Switch location={location}>
            <Route exact path="/">
              <Main addArticle={addArticle} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/article/:id(.{21})">
              <Article article={article} />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}
