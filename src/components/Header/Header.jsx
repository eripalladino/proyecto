import React from 'react'
import imagen from "../../assets/logo.png"
import {Link} from "react-router-dom"
import "./Header.css"


const Header = () => {
  return (
    <div className='Header'>
      <Link to="/">
          <img src={imagen} alt="logo" width={400} />
      </Link>
    </div>
  )
}

export default Header