

import React from 'react'
import logo from '../assets/logo-purple.webp'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav>
          <div className='logo-img'>
          <img src={logo} alt="logo" className='logo' />
          </div>
          <ul className='nav-list'>
            <li><Link to='/' className='nav-link'>Home</Link></li>
              <li><Link to='/about' className='nav-link'>About</Link></li>
              <li><Link to='/contact' className='nav-link'>Contact</Link></li>
              <li><Link to='/menu' className='nav-link'>Menu</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Header