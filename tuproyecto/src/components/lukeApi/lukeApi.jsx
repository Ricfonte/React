import React, { useState, useEffect } from 'react';

const StarWarsApp = () => {
  const [resource, setResource] = useState('people');
  const [id, setId] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://swapi.dev/api/people/`);
      const result = await response.json();

      if (response.ok) {
        setData(result);
        setError(null);
      } else {
        setData(null);
        setError("Estos no son los droides que está buscando");
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError("Estos no son los droides que está buscando");
    }
  };

  const handleResourceChange = (event) => {
    setResource(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleButtonClick = () => {
    fetchData();
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div>
      <label>
        Recurso:
        <select value={resource} onChange={handleResourceChange}>
          <option value="people">People</option>
          <option value="Films">Films</option>
          <option value="StartShips">StarShips</option>
          <option value="Vehicles">Vehicles</option>
          <option value="Specie">Species</option>
          <option value="Planest">Planets</option>
          
        </select>
      </label>
      <label>
        ID:
        <input type="text" value={id} onChange={handleIdChange} />
      </label>
      <button onClick={handleButtonClick}>Buscar</button>

      {error && <div>{error} <img src="obi-wan-image.jpg" alt="Obi-Wan Kenobi" /></div>}

      {data && (
        <div>
          <h2>Información:</h2>
          <p>Nombre: {data.name}</p>
          <p>Altura: {data.height}</p>
          <p>Color Cabello: {data.hairColor}</p>
          <p>Año Nacimiento: {data.birthYear}</p>
          <p>HomeWorld: {data.homeWorld}</p>

        </div>
      )}
    </div>
  );
};

export default StarWarsApp;
