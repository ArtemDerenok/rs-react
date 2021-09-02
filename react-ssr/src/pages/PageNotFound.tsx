import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleMenuFlag } from '../store/action-creator/menu-flag';

function PageNotFound(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleMenuFlag(true));
  }, [dispatch]);

  return (
    <div>
      <h1 className="error-page-heading">Page not found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default PageNotFound;
