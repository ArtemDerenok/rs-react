import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Article from './components/Article';
import Menu from './components/Menu';
import { IArticle } from './intefaces/interfaces';
import About from './pages/About';
import Main from './pages/Main';
import PageNotFound from './pages/PageNotFound';
import './style.css';

function Content(): JSX.Element {
  const localCopyArticle: string | null = sessionStorage.getItem('article');
  const [article, setArticle] = useState<IArticle>(
    localCopyArticle ? JSON.parse(localCopyArticle) : null
  );

  sessionStorage.setItem('errorFlag', 'false');
  const [flageErrorPage, setFlagErrorPage] = useState(sessionStorage.getItem('errorFlag'));
  console.log(flageErrorPage);

  useEffect(() => {
    function handleFlagErrorPage() {
      setFlagErrorPage(sessionStorage.getItem('errorFlag'));
    }
    handleFlagErrorPage();
  });

  const location = useLocation();

  function addArticle(elem: IArticle) {
    sessionStorage.setItem('article', JSON.stringify(elem));
    setArticle(elem);
  }

  return (
    <div>
      {flageErrorPage === 'false' ? <Menu /> : ''}
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

function App(): JSX.Element {
  return (
    <Router>
      <Content />
    </Router>
  );
}

export default App;
