
import React, { useState } from 'react';
import './App.css';

export let App = () => {
  let [beers, setBeers] = useState([]);

  let fetchData = () => {
    fetch('https://api.punkapi.com/v2/beers/')
      .then(response => response.json())
      .then(parsedJson => {
        setBeers(parsedJson);
      })
      .catch(error => console.log('errr', error))
  };

  let toogleLike = (e) => {
    e.preventDefault();
    console.log(e.target.innerHTML);
    let val = e.target.innerHTML === 'Like Me' ? 'Liked!!' : 'Like Me';
    e.target.innerHTML = val;
  };

  let Beers = () => {
    return (
      <>
        <button onClick={fetchData}>Fetch Data</button>
        <ul>
          {beers.map((beer, i) => (
            <li key={i}>name={beer.name} tagLine={beer.tagline}
              <button onClick={toogleLike}>Like Me</button>
            </li>
          ))}
        </ul>
      </>
    )
  };

  return (<Beers />);
};

