import './App.css'
import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//componentes
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'

//pages
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import DetailPage from './Pages/DetailPage/DetailPage';
import CategoryPage from './Pages/CategoryPage/CategoryPage'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App
