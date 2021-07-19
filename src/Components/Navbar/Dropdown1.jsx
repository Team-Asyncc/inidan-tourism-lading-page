import React from 'react';
import Cards from './Cards';
import './Dropdown1.scss';
const cardsData2 = [
  {
    id: 1,
    title: 'CARD 1',
    content: 'Clark Kent',
    imgUrl: 'https://unsplash.it/201/200',
  },
  {
    id: 2,
    title: 'CARD 2',
    content: 'Bruce Wayne',
    imgUrl: 'https://unsplash.it/201/201',
  },
  {
    id: 3,
    title: 'CARD 3',
    content: 'Peter Parker',
    imgUrl: 'https://unsplash.it/200/202',
  },
  {
    id: 4,
    title: 'CARD 4',
    content: 'Tony Stark',
    imgUrl: 'https://unsplash.it/201/203',
  },
  {
    id: 5,
    title: 'CARD 5',
    content: 'Reed Richards',
    imgUrl: 'https://unsplash.it/202/204',
  },
  {
    id: 6,
    title: 'CARD 6',
    content: 'Reed Richards',
    imgUrl: 'https://unsplash.it/202/205',
  },
];
function Dropdown1() {
  return (
    <div>
      <div className="drop-down">
        {cardsData2.map((vas, idx) => (
          <Cards id={idx} key={idx} imgUrl={vas.imgUrl} content={vas.content} />
        ))}
      </div>
    </div>
  );
}

export default Dropdown1;
