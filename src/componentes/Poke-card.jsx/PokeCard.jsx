import React,{useState} from 'react'
import "./PokeCard.css"

function PokeCard({id,name,avatar,types}) {
  const [modal, setModal] = useState(false)  

  return (
    <>
          <div className={`pokeCard ${types[0].type.name}`} onClick={()=> {setModal(true); document.body.classList.add("no-scroll")}}>
      <img src={avatar} alt={name} className="pokeCard_img"/>

      <div className="poke-container">
        <h2 className="pokeCard_title">{name}</h2>

        <div className="types">
          {types.map(type => <div className={`type type-${type.type.name}`} >{type.type.name}</div> )}
        </div>

        <span className='pokeCard_id'>#{id}</span>
      </div>
    </div>

    <div className={modal ? "pokeCard_modal showModal" : "pokeCard_modal"} >
        <div className='cardModal'>
          <div className="close" onClick={()=>{ setModal(false); document.body.classList.remove("no-scroll")}}>X</div>
          <h1>{`${name}`}</h1>
          <img src={avatar} alt=""/>
        </div>
        
        
      </div>
    </>

  )
}

export default PokeCard