import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import Input from './Input';

const initInput = [
  {
    id: nanoid(),
    value: '',
  },
  {
    id: nanoid(),
    value: '',
  },
];

function Form(): JSX.Element {
  const [values, setValue] = useState(initInput);

  function handleChange(id: string, event: React.ChangeEvent<HTMLInputElement>) {
    setValue(
      values.map((elem: { id: string; value: string }) => {
        const element = elem;
        if (element.id === id) {
          element.value = event.target.value;
        }
        return element;
      })
    );
  }

  return (
    <form>
      <Input
        value={values[0].value}
        name="Name"
        type="text"
        id={initInput[0].id}
        handleChange={handleChange}
      />
      <Input
        value={values[1].value}
        name="DOB"
        type="date"
        id={initInput[1].id}
        handleChange={handleChange}
      />
    </form>
  );
}

export default Form;
