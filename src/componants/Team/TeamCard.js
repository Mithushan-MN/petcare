import React from 'react'
import './Team.css'

export default function TeamCard(props) {
  return (
    <div className='teamcard'>
      <img src={props.url}/>
      <h2>{props.name}</h2>
      <p>{props.posision}</p>
    </div>
  )
}
