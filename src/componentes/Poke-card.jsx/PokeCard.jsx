import React from 'react'
import "./PokeCard.css"

function PokeCard({name,avatar}) {
  return (
    <div className="pokeCard">
      <h2 className="poke-title">{name}</h2>
      <img src={avatar} alt={name} />
    </div>
  )
}

export default PokeCard