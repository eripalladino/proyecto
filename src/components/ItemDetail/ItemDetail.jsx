import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({data}) => {
  return (
    <div className='container'>
        <div className='detail'>
            <div className='detail-image'>
            <img  src={data.thumbnail} alt="image" />
            </div>
            <div className='content'>
                <h1>{data.title}</h1>
                <h6>{data.category}</h6>
                <p>{data.description}</p>
                <p>Stock: {data.stock} unidades</p>
                <p>Marca: {data.brand}</p>
                <p>Precio:  ${data.price}</p>
            </div>
        </div>
    </div>
  )
}
export default ItemDetail