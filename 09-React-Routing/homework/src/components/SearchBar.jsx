import React, {useState} from 'react';
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  // acá va tu código
  const [city, setCity] = useState('')
  const setStateCity = (e) => {setCity(e.target.value)};
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }} className='container'>
      <input
        type="text"
        placeholder="Ciudad..."
        className='search'
        onChange={setStateCity}
        value={city}
      />
      <input type="submit" value="Agregar" className='btn'/>
    </form>
  )
};
