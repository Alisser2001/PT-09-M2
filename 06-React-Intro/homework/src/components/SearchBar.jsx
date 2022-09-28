import React from 'react';
import styles from '../styles/searchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  let search = props.onSearch;
  return (
    <div className={styles.container}>
      <input type="text" value="Ciudad..." className={styles.search}></input>
      <button onClick={()=>search('London')} className={styles.btn}>Agregar</button>
    </div>
  )
};