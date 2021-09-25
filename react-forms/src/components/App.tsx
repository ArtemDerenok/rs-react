import React, { useState } from 'react';
import Form from './form/Forms';

function App(): JSX.Element {
  const [cards, setCard] = useState<JSX.Element[]>([]);

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
