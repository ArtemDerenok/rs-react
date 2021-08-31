import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound(): JSX.Element {
  return (
    <div>
      <h1 className="error-page-heading">Page not found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default PageNotFound;
