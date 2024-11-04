import React from 'react'
import './Card.css'

function Card({cardName}) {
  
  return (
    <div className='card-container'>
        <img src={`cards/${cardName}.png`} alt="" />
    </div>
  )
}

export default Card
