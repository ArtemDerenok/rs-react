import React, { useState } from 'react';
import Form from './form/Forms';

const arrCards: JSX.Element[] = [];

function App(): JSX.Element {
  const [cards, setCard] = useState(arrCards);

  function addCard(elem: JSX.Element) {
    setCard([...cards, elem]);
  }

  return (
    <div>
      <Form addCard={addCard} />
      <div>{cards}</div>
    </div>
  );
}

export default App;
