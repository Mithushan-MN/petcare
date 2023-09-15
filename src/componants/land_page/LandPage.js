import React from 'react'
import landimg1 from '../../images/img1 (1).jpg'
import landimg2 from '../../images/img1 (1).png'
import landimg3 from '../../images/img1 (2).png'
import landimg4 from '../../images/img1 (3).png'
import './LandPage.css'
import { Link } from 'react-router-dom'

const LandPage = () => {
  return (
    <div>
      <div className='landpage'>

        <div className='land-left'>
          <div>
            <h2>The Best Pet Care Services</h2>
            <h1><span>Care</span> Of Your <br/>little <span>pets</span></h1>
            <Link to='/Customer'>
            <button>Our Services</button>
            </Link>
          </div>
        </div>
        <div className='land-right'>
          <div className='img1strow'>
            <img src={landimg1} alt='img'className='bird'/>
            <img src={landimg3} alt='img' />
            <img src={landimg2} alt='img'className='bird'/>
          </div>
          <div className='img2ndrow'>
            <img src={landimg2} alt='img'/>
            <img src={landimg4} alt='img'className='doct'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandPage
