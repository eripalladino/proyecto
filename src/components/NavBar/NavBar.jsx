import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className='nav-container'>
      <ul className='nav-ul'>
        <li className='nav-link'>Inicio</li>
        <li className='nav-link'>About</li>
        <li className='nav-link'>Contact</li>
        <li className='nav-link'> <ShoppingCartIcon/> <span>2</span> </li>
      </ul>
    </nav>
  )
}

export default NavBar