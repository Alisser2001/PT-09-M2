import React, { useState } from 'react';
import './App.css';
import Cards from '../components/Cards';
import Nav from '../components/Nav';
import About from '../components/About';
import Ciudad from '../components/Ciudad'
import { Route, Routes} from 'react-router-dom';

function App() {

  let apiKey = '4ae2636d8dfbdc3044bede63951a019b'
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities([...cities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id) {
    setCities(cities => cities.filter(c => c.id !== id))
  }


  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          exact path={'/'}
          element={<Cards cities={cities} onClose={onClose}/>}
        />
        <Route
          exact path={'/about'}
          element={<About />}
        />
        <Route path={'/ciudad/:cityId'} element={<Ciudad cities={cities}/>} />
      </Routes>
    </div>
  );
}

export default App;