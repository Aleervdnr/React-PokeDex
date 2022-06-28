import React,{ useEffect, useState } from 'react';
import './App.css';
import "normalize.css"
import PokeCard from './componentes/Poke-card.jsx/PokeCard';
import { getPokemon, getPokemonData, searchPokemon } from './api';
import Paginacion from './componentes/Paginacion/Paginacion';
import {AiOutlineSearch} from "react-icons/ai"

function App() {

  const [search, setSearch] = useState("")
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  const onClick = async (e) => {
    alert("buscando...")
    const results = await searchPokemon(search)
    setPokemons([results])
    setSearch("")
  }

  const getPokemons = async () => {
    try{
      setLoading(true)
      const data = await getPokemon(20, 20 * page)
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      console.log(results)
      setPokemons(results)
      setLoading(false)
    }
    catch(err){

    }
  }

  useEffect(()=>{
    getPokemons()
  },[page])

 const nextPage = () => {
  setPage(page + 1)
 }

 const previusPage = () => {
  if(page > 0){
    setPage(page - 1)
  }
 }

  return (
    <div className="App">
      <h1>Pokedex</h1>

      <div className="poke-search">
        <input 
          type="text"
          value={search}
          placeholder='Busca un Pokemon' 
          onChange={onChange}
          className="poke-search_input"
          />

        <button
        type="button" 
        onClick={onClick}
        className="poke-search_button"
        > 
          <AiOutlineSearch/>
        </button>
      </div>
        <Paginacion nextPage={nextPage} previusPage={previusPage} />
      
        {loading ?
           <div>Cargando pokemones...</div>
           :
           <div className="poke-grid">
           {pokemons.map((el) => <PokeCard key={el.name} id={el.id} avatar={el.sprites.front_default} name={el.name} types={el.types} />)}
           </div>
      }


    </div>
  );
}

export default App;
