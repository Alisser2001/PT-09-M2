import React from 'react';
import styles from '../styles/Card.module.css';

export default function Card(props) {
  // acá va tu código
  let imgClima = `http://openweathermap.org/img/wn/${props.img}@2x.png`;
  return (
    <div className={styles.container}>
      <div className={styles.contBtn}>
        <button onClick={props.onClose} className={styles.btnClose}>X</button>
      </div>
      <h1 className={styles.h1}>{props.name}</h1>
      <div className={styles.info}>
        <div>
          <h2 className={styles.h2}>Min</h2>
          <p>{props.min}°</p>
        </div>
        <div>
          <h2 className={styles.h2}>Max</h2>
          <p>{props.max}°</p>
        </div>
        <div>
          <img src={imgClima} alt="" className={styles.img}></img>
        </div>
      </div>
    </div>
  )
};