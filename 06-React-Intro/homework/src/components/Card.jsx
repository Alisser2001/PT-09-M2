import React from 'react';

export default function Card(props) {
  // acá va tu código
  let imgClima = `http://openweathermap.org/img/wn/${props.img}@2x.png`;
  return (
    <div>
      <div>
        <button onClick={props.onClose}>X</button>
      </div>
      <h1>{props.name}</h1>
      <div>
        <div>
          <h2>Min</h2>
          <p>{props.min}°</p>
        </div>
        <div>
          <h2>Max</h2>
          <p>{props.max}°</p>
        </div>
        <div>
          <img src={imgClima} alt=""></img>
        </div>
      </div>
    </div>
  )
};