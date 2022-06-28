import React from 'react'
import "./PokeCard.css"

function PokeCard({id,name,avatar,types}) {
  return (
    <div className={`pokeCard ${types[0].type.name}` }>
      <img src={avatar} alt={name} className="pokeCard_img"/>

      <div className="poke-container">
        <h2 className="pokeCard_title">{name}</h2>

        <div className="types">
          {types.map(type => <div className={`type type-${type.type.name}`} >{type.type.name}</div> )}
        </div>

        <span className='pokeCard_id'>#{id}</span>
      </div>

      <div className="pokeCard_modal">
        
      </div>
    </div>
  )
}

export default PokeCard