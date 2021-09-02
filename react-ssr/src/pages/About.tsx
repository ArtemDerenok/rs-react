import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { handleMenuFlag } from '../store/action-creator/menu-flag';

function About(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleMenuFlag(false));
  }, [dispatch]);

  return (
    <div className="about-page">
      <h1>About page</h1>
    </div>
  );
}

export default About;
