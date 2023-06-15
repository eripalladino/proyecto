import './App.css'
import * as React from 'react'

//componentes
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ListUser from './components/ListUser/ListUser'

class App extends React.Component {
  render() {
    return (
      
      <div className='App'>
        <Header />
        <NavBar />
        <div className='saludo'>
        <ItemListContainer greeting="Bienvenidos a Nuestra E-Commerce"/>
        </div>
        <ListUser />
      </div>
    )
  }
}

export default App
