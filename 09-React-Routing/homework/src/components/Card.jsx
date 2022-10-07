import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({min, max, img, onClose, name, id}) {
  // acá va tu código
  let imgClima = `http://openweathermap.org/img/wn/${img}@2x.png`;
  return (
    <div className='contai'>
      <div className='contBtn'>
        <button onClick={onClose} className='btnClose'>X</button>
      </div>
      <Link to={`/ciudad/${id}`} style={{ textDecoration: 'none' }}>
        <h1 className='h1' >{name}</h1>
      </Link>
      <div className='info'>
        <div>
          <h2 className='h2'>Min</h2>
          <p className='p'>{min}°</p>
        </div>
        <div>
          <h2 className='h2'>Max</h2>
          <p className='p'>{max}°</p>
        </div>
        <div>
          <img src={imgClima} alt="" className='img'></img>
        </div>
      </div>
    </div>
  )
};
