import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import Input from './Input';
import Select from './Select';
import RadioInput from './RadioInput';
import Switch from './Switch';

const initInput = [
  {
    id: nanoid(),
    value: '',
    name: 'Name',
    type: 'text',
  },
  {
    id: nanoid(),
    value: '',
    name: 'Surname',
    type: 'text',
  },
  {
    id: nanoid(),
    value: '',
    name: 'Date of Birthday',
    type: 'date',
  },
];

function Form(): JSX.Element {
  const [values, setValue] = useState(initInput);

  function handleChangeInput(id: string, event: React.ChangeEvent<HTMLInputElement>) {
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

  const inputResult = values.map((input) => {
    return (
      <Input
        key={input.id}
        value={input.value}
        name={input.name}
        type={input.type}
        id={input.id}
        handleChange={handleChangeInput}
      />
    );
  });

  return (
    <form>
      {inputResult}
      <Select />
      <RadioInput />
      <Switch />
    </form>
  );
}

export default Form;
