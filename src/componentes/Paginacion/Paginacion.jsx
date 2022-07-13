import React from 'react'
import "./Paginacion.css"
import {AiOutlineArrowRight} from "react-icons/ai"

function Paginacion({nextPage, previusPage,page,totalPages}) {
  return (
    <div className='paginacion'>
      <button onClick={previusPage}>previus</button>
        <div>{page} de {totalPages}</div>
      <button onClick={nextPage} className="next">Next <AiOutlineArrowRight className='next-icon'/> </button>
    </div>
  )
}

export default Paginacion