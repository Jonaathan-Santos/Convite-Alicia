import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PageHome from './PageHome'


function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/:nomes'  element={<PageHome/>} />
        



  

      </Routes>


    </BrowserRouter>
    
  )
}

export default App
