import React from 'react';
import Card from './Card';
import styles from '../styles/Cards.module.css'

export default function Cards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={styles.cont}>{cities.map((city) => <Card
      key={city.id}
      name={city.name}
      min={city.min}
      max={city.max}
      img={city.img}
      onClose={() => onClose(city.id)} />
    )}</div>
  )
};

