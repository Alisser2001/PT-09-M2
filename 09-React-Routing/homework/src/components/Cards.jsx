import React from 'react';
import Card from './Card';
import './Cards.css'

export default function Cards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className='cont'>{cities.map((city) => <Card
      key={city.id}
      name={city.name}
      min={city.min}
      max={city.max}
      img={city.img}
      id={city.id}
      onClose={() => onClose(city.id)} />
    )}</div>
  )
};
