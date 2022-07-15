import React,{useState,useContext} from 'react'
import "./PokeCard.css"
import FavoriteContext from "../../Context/FavoriteContext"

function PokeCard({id,name,avatar,types}) {
  const [modal, setModal] = useState(false)
  const [fav, setfav] = useState(false)

  const {favoritePokemons,updateFavoritePokemon} = useContext(FavoriteContext)

  const redHeart = <span>&#10084;&#65039;</span>
  const emptyHeart = "🤍"

  const heart = favoritePokemons.includes(name) ? redHeart : emptyHeart

  const clickHeart = ()=>{
    updateFavoritePokemon(name)
  }

  // document.body.classList.add("no-scroll")

  return (
    <>
    <div className={`pokeCard `} onClick={()=> {setModal(true);}}>
      <img src={avatar} alt={name} className="pokeCard_img"/>

      <div className="poke-container">
        <h2 className="pokeCard_title">{name}</h2>

        <div className="heart" onClick={clickHeart}> {heart}</div>

        <div className="types">
          {types.map(type => <div className={`type type-${type.type.name}`} >{type.type.name}</div> )}
        </div>

        <span className='pokeCard_id'>#{id}</span>
      </div>
    </div>

    <div className={modal ? "pokeCard_modal showModall" : "pokeCard_modal"} >
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