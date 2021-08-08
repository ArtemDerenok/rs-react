import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import Input from './Input';
import Select from './Select';
import RadioInput from './RadioInput';
import Switch from './Switch';
import './Form.css';
import Card from '../cards/Card';

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

function Form({ addCard }: { addCard(elem: JSX.Element): void }): JSX.Element {
  const [values, setValue] = useState(initInput);
  const [valueSelect, setValueSelect] = useState('Belarus');
  const [valueRadioInput, setValueRadioInput] = useState('yes');
  const [valueSwitch, setValueSwitch] = useState(false);

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

  function handleChangeSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setValueSelect(event.target.value);
  }

  function handleChangeRadioInput(event: React.ChangeEvent<HTMLInputElement>) {
    setValueRadioInput(event.target.value);
  }

  function handleChangeSwitch(event: boolean) {
    setValueSwitch(event);
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
    <form className="form-card">
      {inputResult}
      <Select value={valueSelect} handleChange={handleChangeSelect} />
      <RadioInput value={valueRadioInput} handleChange={handleChangeRadioInput} />
      <Switch value={valueSwitch} handleChange={handleChangeSwitch} />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addCard(
            <Card
              key={nanoid()}
              name={values[0].value}
              surname={values[1].value}
              date={values[2].value}
              sex={!valueSwitch ? 'Male' : 'Female'}
              country={valueSelect}
            />
          );
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
