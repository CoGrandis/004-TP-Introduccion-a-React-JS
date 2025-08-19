import React from 'react'
import Article from './Article'



const Principal = ({contenido}) => {
  return (
    <div className='principal'>
        <Article nombreArticle={"Articulo numero 1"}  precioArticle={"$1000"}/>
        <Article nombreArticle={"Articulo numero 2"}  precioArticle={"$1500"}/>
        <Article nombreArticle={"Articulo numero 3"}  precioArticle={"$2000"}/>
        <Article nombreArticle={"Articulo numero 4"}  precioArticle={"$1000"}/>
    </div>
  )
}

export default Principal