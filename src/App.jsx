import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Food from './Food'
import Details from './Details'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path='/details' element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App