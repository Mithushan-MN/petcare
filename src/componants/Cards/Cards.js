import React from 'react'

import './Cards.css'
import room_1 from '../../images/gallery (2).jpg'
import room_2 from '../../images/gallery (3).jpg'
import room_3 from '../../images/gallery (2).jpg'
import CardUI from './CardUI'

const Cards = () => {
  return (
    <div className='card-main'>
        <h1>Pet Grooming Services & Prices</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto quos</p>
        <div className='cards-contain'>
        <div>
            <CardUI imgsrc={room_1} title='Mini Groom' price='$45 - $75' singlepage="/login"/>
        </div>
        <div className='middle-card'>
            <CardUI imgsrc={room_2} title='Complete Groom' price='$55 - $75' singlepage="/login" />
        </div>
        <div>
            <CardUI imgsrc={room_3} title='Hand scissor Groom' price='$55 - $65' singlepage="/login"/>
        </div>
        </div>
    </div>
  )
}

export default Cards
