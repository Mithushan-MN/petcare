import React from 'react'

export default function ServiceCard(props) {
  return (
    <div className='card'>
        <img 
        className='product-image'
        src={props.url}/>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <button>Our Services</button>
    </div>
  )
}   
