import React from 'react'
import "./App.css"
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Principal from './components/Principal'
import Buscador from './components/Buscador'
const App = () => {
  return (
    <main>
    <Header/>
    <Navbar/>
    <Buscador/>
    <Principal/>
    <Footer/>
    </main>
  )
}

export default App