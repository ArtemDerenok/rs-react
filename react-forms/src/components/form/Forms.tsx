import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
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
  const [nameDirty, setNameDirty] = useState(false);
  const [surnameDirty, setSurnameDirty] = useState(false);
  const [dateDirty, setDateDirty] = useState(false);
  const [nameError, setNameError] = useState('The field cannot be empty');
  const [surnameError, setSurnameError] = useState('The field cannot be empty');
  const [dateError, setDateError] = useState('Choose your date of birth');
  const [handleDateError, setHandleDateError] = useState('Give your assent');
  const [valueSelect, setValueSelect] = useState('');
  const [valueSelectError, setValueSelectError] = useState('Сhoose your country');
  const [valueRadioInput, setValueRadioInput] = useState('no');
  const [valueSwitch, setValueSwitch] = useState(false);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || surnameError || dateError || valueRadioInput === 'no' || valueSelect === '') {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, surnameError, dateError, valueRadioInput, valueSelect]);

  function handleChangeInput(id: string, event: React.ChangeEvent<HTMLInputElement>) {
    setValue(
      values.map(
        (elem: { id: string; value: string; name: string; type: string }, index: number) => {
          const element = elem;
          if (element.id === id) {
            const dateRegex = /^\d{4}[--/]\d{2}[--/]\d{2}$/;
            const nameRegex = /^[а-яА-ЯёЁa-zA-Z]+$/;
            if (!nameRegex.test(String(event.target.value).toLowerCase()) && index !== 2) {
              if (index === 0) {
                setNameError('Name is incorrect');
              }
              if (index === 1) {
                setSurnameError('Surname is incorrect');
              }
            } else {
              if (index === 0) {
                setNameError('');
              }
              if (index === 1) {
                setSurnameError('');
              }
            }
            if (index === 2 && dateRegex.test(String(event.target.value))) {
              setDateError('');
            }
            element.value = event.target.value;
          }
          return element;
        }
      )
    );
  }

  function handleChangeSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setValueSelect(event.target.value);
    if (event.target.value === '') {
      setValueSelectError('Сhoose your country');
    } else {
      setValueSelectError('');
    }
  }

  function handleChangeRadioInput(event: React.ChangeEvent<HTMLInputElement>) {
    setValueRadioInput(event.target.value);
    if (event.target.value === 'no') {
      setHandleDateError('Give your assent');
    } else {
      setHandleDateError('');
    }
  }

  function handleChangeSwitch(event: boolean) {
    setValueSwitch(event);
  }

  function blurHandler(event: React.ChangeEvent<HTMLInputElement>) {
    switch (event.target.name) {
      case 'Name':
        setNameDirty(true);
        break;
      case 'Surname':
        setSurnameDirty(true);
        break;
      case 'Date of Birthday':
        setDateDirty(true);
        break;
      default:
        break;
    }
  }

  return (
    <form className="form-card">
      {nameDirty && nameError && <div className="error">{nameError}</div>}
      <Input
        value={values[0].value}
        name={values[0].name}
        type={values[0].type}
        id={values[0].id}
        handleChange={handleChangeInput}
        blurHandler={blurHandler}
      />
      {surnameDirty && surnameError && <div className="error">{surnameError}</div>}
      <Input
        value={values[1].value}
        name={values[1].name}
        type={values[1].type}
        id={values[1].id}
        handleChange={handleChangeInput}
        blurHandler={blurHandler}
      />
      {dateDirty && dateError && <div className="error">{dateError}</div>}
      <Input
        value={values[2].value}
        name={values[2].name}
        type={values[2].type}
        id={values[2].id}
        handleChange={handleChangeInput}
        blurHandler={blurHandler}
      />
      {valueSelectError && <div className="error">{valueSelectError}</div>}
      <Select value={valueSelect} handleChange={handleChangeSelect} />
      {handleDateError && <div className="error">{handleDateError}</div>}
      <RadioInput value={valueRadioInput} handleChange={handleChangeRadioInput} />
      <Switch value={valueSwitch} handleChange={handleChangeSwitch} />
      <button
        disabled={!formValid}
        className="submit-btn"
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
