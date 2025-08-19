import React from 'react'

const Article = ({nombreArticle, descripcionArticle, precioArticle}) => {
  return (
    <div className='article'>
      <h4>{nombreArticle}</h4>
      <p>{descripcionArticle}</p>
      <span>{precioArticle}</span>
    </div>
  )
}

export default Article