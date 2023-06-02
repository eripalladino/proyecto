import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CardWidget = () => {
  return (
    <div style={{display: "flex", alignItems: "center"}}>
        <ShoppingCartIcon />
        <p>5</p>
    </div>
  )
}

export default CardWidget