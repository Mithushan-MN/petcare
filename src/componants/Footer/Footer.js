import React from 'react'
import './Footer.css'
import logo from '../../images/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-sections'>
        <div className='fstsection'>
            <img src={logo} alt=''/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem commodi, itaque dicta qui</p>
        </div>
        <div className='sndsection'>
            <h3>Working Hours</h3>
            <p>Mon - Fri  -  7am - 6pm</p>
            <p>Saturday    9am - 4pm</p>
            <p>Sunday:      Closed</p>
        </div>
        <div className='sndsection'>
            <h3>Useful Links</h3>
            <p>Home</p>
            <p>About</p>
            <p>Service</p>
            <p>Gallery</p>
            <p>Sales</p>
        </div>
        <div className='sndsection'>
            <h3>Contact Us</h3>
            <p>No15, Main Street,Colombo</p>
            <p>email@pettropia.com</p>
            <p>99123456789</p>
        </div>
      </div>
      <hr></hr>
      <div>
        <p>@Mithushan Creations</p>
      </div>
    </div>
  )
}

export default Footer
