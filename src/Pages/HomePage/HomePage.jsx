import React from 'react'
import ListUser from '../../components/ListUser/ListUser'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

const HomePage = () => {
  return (
    <div>
      <div className='saludo'>
        <ItemListContainer greeting="Bienvenidos a Nuestra E-Commerce" />
      </div>
      <ListUser />
    </div>
  )
}

export default HomePage