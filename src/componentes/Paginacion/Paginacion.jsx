import React from 'react'
import "./Paginacion.css"
import {AiOutlineArrowRight,AiOutlineArrowLeft} from "react-icons/ai"

function Paginacion({nextPage, previusPage,page,totalPages,clickedNext,clickedPrevius}) {
  return (
    <div className='paginacion'>
      <button 
        onClick={previusPage} 
        className="previus">
          <AiOutlineArrowLeft/> Previus 
          <div 
            className={clickedPrevius ?"pokeball-pagination pokeball-animationPrevius" : "pokeball-pagination"}>
          </div> 
      </button>

        <div>{page} de {totalPages}</div>

      <button 
        onClick={nextPage} 
        className="next"> 
        <div 
        className={clickedNext ?"pokeball-pagination pokeball-animationNext" : "pokeball-pagination"}></div> Next 
        <AiOutlineArrowRight/> 
      </button>
    </div>
  )
}

export default Paginacion