import React from 'react';
import styles from '../styles/Card.module.css';

export default function Card({min, max, img, onClose, name}) {
  // acá va tu código
  let imgClima = `http://openweathermap.org/img/wn/${img}@2x.png`;
  return (
    <div className={styles.container}>
      <div className={styles.contBtn}>
        <button onClick={onClose} className={styles.btnClose}>X</button>
      </div>
      <h1 className={styles.h1}>{name}</h1>
      <div className={styles.info}>
        <div>
          <h2 className={styles.h2}>Min</h2>
          <p className={styles.p}>{min}°</p>
        </div>
        <div>
          <h2 className={styles.h2}>Max</h2>
          <p className={styles.p}>{max}°</p>
        </div>
        <div>
          <img src={imgClima} alt="" className={styles.img}></img>
        </div>
      </div>
    </div>
  )
};