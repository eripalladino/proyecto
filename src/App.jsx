import './App.css'
import * as React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'



class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <div className='saludo'>
        <ItemListContainer greeting="Bienvenidos a Nuestra E-Commerce"/>
        </div>
      </div>
    )
  }
}

export default App
