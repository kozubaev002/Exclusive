import React from 'react'
import './Card.scss';

function Card({name,title,img}) {
  return (
    <div className='x'>
      <img src={img} alt="" />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  )
}

export default Card
