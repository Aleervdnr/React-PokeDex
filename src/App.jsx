import React,{ useEffect, useState } from 'react';
import './App.css';
import "normalize.css"
import PokeCard from './componentes/Poke-card.jsx/PokeCard';

function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(res => res.json())
    .then(json =>{
      // console.log(json)
      json.results.forEach(el =>{
        fetch(el.url)
        .then(res => res.json())
        .then(json=>{
          console.log(json)
          let pokemon = {
            id: json.id,
            name:json.name,
            avatar:json.sprites.front_default
          }

          setPokemons((pokemons) => [...pokemons, pokemon])
        })
      })
    })
  },[])

  return (
    <div className="App">
      <h1>Pokedex</h1>

      <div className="poke-search">
      <input type="text" placeholder='Busca un Pokemon'/>
      <input type="button" value="buscar" />
      </div>

      <div className="poke-grid">
        {pokemons.map((el) => <PokeCard key={el.id} avatar={el.avatar} name={el.name} />)}
      </div>
    </div>
  );
}

export default App;
