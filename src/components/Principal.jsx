import React from 'react'
import Article from './Article'



const Principal = () => {
  return (
    <div className='principal'>
        <Article nombreArticle={"Articulo numero 1"} descripcionArticle={"descripcion articulo"} precioArticle={"$1000"}/>
        <Article nombreArticle={"Articulo numero 2"} descripcionArticle={"descripcion articulo"} precioArticle={"$1500"}/>
        <Article nombreArticle={"Articulo numero 3"} descripcionArticle={"descripcion articulo"} precioArticle={"$2000"}/>
        <Article nombreArticle={"Articulo numero 4"} descripcionArticle={"descripcion articulo"} precioArticle={"$1000"}/>
    </div>
  )
}

export default Principal