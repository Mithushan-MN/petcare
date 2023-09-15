import React from 'react'
import './CardUI.css'
// import { Link } from 'react-router-dom'


const CardUI = (props) => {
  return (
    <div className='card-container'>
        
      {/* <div className='overflow'>
        <img src={props.imgsrc} alt='cdimg' className='contain-top'/>
      </div> */}

      <div className='card-body'>
        <h4 className='cart-title'>{props.title}</h4>
        <button className='price-btn'>{props.price}</button>
        <ul>
            <li>Bath</li>
            <li>Conditioning Treatement</li>
            <li>Ears Flushed & Cleaned</li>
            <li>Watering Plants</li>
            <li>Handscissor Finish</li>
            <li>Setting Leanght of Coat</li>
        </ul> 
        {/* <Link to={props.singlepage}> */}
        <button className='purchase-btn'>Purchase Now</button>
        {/* </Link> */}
      </div>
    </div>
    
  )
}

export default CardUI
