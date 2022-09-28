import React from 'react';
import Card from './Card';
import styles from '../styles/Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  let cities = props.cities;
  let cards = cities.map((city)=><Card key={city.id} name={city.name} min={city.main.temp_min} max={city.main.temp_min} img={city.weather[0].icon} onClose={()=>alert(city.name)}/>
  );
  console.log(cards)
  return(
    <div className={styles.cont}>{cards}</div>
  )
};

