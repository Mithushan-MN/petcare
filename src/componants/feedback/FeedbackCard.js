import React from 'react'
import { FaStar } from 'react-icons/fa';
import './Feedback.css'

export default function FeedbackCard(props) {
  return (
    <div className='feedbackcard'>
        <div>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
        </div>
      <p>{props.description}</p>
      <div className='imgsec'>
        <img src={props.url} alt='fbimg'/>
        <div className='imgname'>
        <h3>{props.name}</h3>
        <p>{props.posision}</p>
        </div>
      </div>
    </div>
  )
}
