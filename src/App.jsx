import React from 'react'
import "./App.css"
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import Principal from './Principal'
import Buscador from './Buscador'
const App = () => {
  return (
    <main>
    <Header/>
    <Navbar/>
    <Buscador/>
    <Principal contenido={"Contenido"}/>
    <Footer/>
    </main>
  )
}

export default App