import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ConfirmadosPage from './ConfirmadosPage'
import PageHome from './PageHome'


function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/:nomes'  element={<PageHome/>} />
        <Route path='/confirmados' element={<ConfirmadosPage/>}/>
      </Routes>

      


    </BrowserRouter>
    
  )
}

export default App
