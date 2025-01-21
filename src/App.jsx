import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
// import './App.css'
import HomePage from './pages/HomePage'
import Detailpage from './pages/DetailPage'
import NavbarCompoent from './components/NavbarComponent'

function App() {
  

  return (
    <>
    <NavbarCompoent/>
     <Routes>

        <Route path='/' element={<HomePage />}/>
        <Route path='/detail/:id' element={<Detailpage />}/>
     
     </Routes>
    </>
  )
}

export default App
