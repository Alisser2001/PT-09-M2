import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  let search = props.onSearch;
  return (
    <div>
      <input type="text" value="Ciudad..."></input>
      <button onClick={search('London')}>Agregar</button>
    </div>
  )
};