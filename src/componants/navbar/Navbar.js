import React, { Component } from 'react'
import './Navbar.css'
import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import { FaAlignJustify } from 'react-icons/fa'

// export default function Navbar() {
export default class Navbar extends Component{
  state={
    isOpen:false
  }

  handleToggle =()=>{
    this.setState({isOpen:!this.state.isOpen})
  }

  render(){
  return (
    // <div>
    //   <div className='navbar'>
    //     <div className='logo'>
    //         <img src={logo} alt='logo'/>
    //         <button>
    //           <FaAlignJustify/>
    //         </button>
    //     </div>
    //     <div className='navlinks'>
    //         <ul id='navlinks'>
    //             <li><a href='/' className='active'>Home</a></li>
    //             <li><a href='index.html'>Services</a></li>
    //             <li><a href='index.html'>AboutUs</a></li>
    //             <li><a href='index.html'>Shop</a></li>
    //             <li><a href='index.html'>Gallery</a></li>
    //             <Link to="/login">
    //             <li><button>SignUp</button></li>
    //             </Link>
    //         </ul>
            
    //     </div>
    //   </div>
    
    // </div>
    <nav className='navbar'>
    <div className='nav-center'>
      <div className='nav-header'>
        <Link to='/'>
          <img src={Logo} alt='logo'/>
        </Link>
        <button type='button' className='nav-btn' onClick={this.handleToggle}>
          <FaAlignJustify className='nav-icon'/>
        </button>
      </div>
      <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="services">Services</Link>
        </li>
        <li><Link to="services">AboutUs</Link></li>
        <li><Link to="services">Shop</Link></li>
        <li><Link to="services">Gallery</Link></li>

          <div className='lfbtn'>
            {/* <li>
            <Link to="/login"><button className='lgbtn'>LogIn</button></Link>
            </li> */}
            <li>
            <Link to="/login"><button className='lgbtn'>SighnUp</button></Link>
            </li>
          </div>
      </ul>
      {/* <button>SighnIn</button> */}
    </div>
  </nav>
  )
}
}
