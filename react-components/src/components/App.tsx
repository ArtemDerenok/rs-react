import React from 'react';
import { ICardProps } from '../interface/interfaces';
import './App.css';
import Card from './Card';
import SearchBar from './SearchBar';

const cardsArr: Array<ICardProps> = [
  {
    heading: 'Heading1',
    text: 'Lorem ipsum dolor sit amet, Integer consectetur adipiscing elit.',
    img: 'cat.jpg',
  },
  {
    heading: 'Heading2',
    text: 'Lorem ipsum dolor sit amet, Integer consectetur adipiscing elit. Integer varius accumsumsan massa id aliquam.',
    img: 'smile.jpg',
  },
];

function App(): JSX.Element {
  return (
    <div className="container">
      <SearchBar />
      <div className="card-container">
        <Card heading={cardsArr[0].heading} text={cardsArr[0].text} img={cardsArr[0].img} />
        <Card heading={cardsArr[1].heading} text={cardsArr[1].text} img={cardsArr[1].img} />
      </div>
    </div>
  );
}
export default App;
