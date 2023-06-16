import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <p style={{margin: 50}}>
            Saludos {greeting}
        </p>
    </div>
  )
}

export default ItemListContainer