import React from 'react'
import imagen from "../../assets/logo.png"
import "./Header.css"


const Header = () => {
  return (
    <div className='Header'>
        <img src={imagen} alt="logo" width={400} />
    </div>
  )
}

export default Header