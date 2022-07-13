import React,{ useEffect, useState } from 'react';
import './App.css';
import "normalize.css"
import PokeCard from './componentes/Poke-card.jsx/PokeCard';
import { getPokemon, getPokemonData, searchPokemon } from './api';
import Paginacion from './componentes/Paginacion/Paginacion';
import {AiOutlineSearch} from "react-icons/ai"
import Loading from './componentes/Loading/Loading';

function App() {

  const [search, setSearch] = useState("")
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState()
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
      const data = await getPokemon(25, 25 * page)
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      console.log(results)
      setPokemons(results)
      setLoading(false)
      //Math.ceil devuelve el entero mayor o igual mas proximo la numero dado
      setTotal(Math.ceil(data.count / 25))
    }
    catch(err){

    }
  }

  //Cada vez que el valor de "page" cambie se llama a la funcion getPokemons()
  useEffect(()=>{
    getPokemons()
  },[page])

 const nextPage = () => {
  //Math.min devuelve el valor minimo y no deja que el pagination se pase del total
  const nextPage = Math.min(page + 1,total)
  setPage(nextPage)
 }

 const previusPage = () => {
  //Math.max devuelve el valor maximo
  const lastPage = Math.max(page - 1, 0)
    setPage(lastPage)
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
        <Paginacion nextPage={nextPage} previusPage={previusPage} page={page} totalPages={total} />
      
        {loading ?
           <Loading/>
           :
           <div className="poke-grid">
           {pokemons.map((el) => <PokeCard key={el.name} id={el.id} avatar={el.sprites.front_default} name={el.name} types={el.types} />)}
           </div>
      }


    </div>
  );
}

export default App;
