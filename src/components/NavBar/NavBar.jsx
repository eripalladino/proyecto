import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className='nav-container'>
      <ul className='nav-ul'>
        <Link className='nav-link' to="/">Inicio</Link>
        <Link className='nav-link' to="/about">About</Link>
        <Link className='nav-link' to="/contact">Contact</Link>
        <li className='nav-link'> <ShoppingCartIcon/> <span>2</span> </li>
      </ul>
    </nav>
  )
}

export default NavBar