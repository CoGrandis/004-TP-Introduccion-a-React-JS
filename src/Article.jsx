import React from 'react'

const Article = ({nombreArticle, precioArticle}) => {
  return (
    <div className='article'>
      <h4>{nombreArticle}</h4>
      <p>{precioArticle}</p>
    </div>
  )
}

export default Article