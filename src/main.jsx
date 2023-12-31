import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Todo from './Todo/todo.jsx'
import Detalhe from './detalhe.jsx'
import Alta from './Emalta/alta.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path='/todo' element={<Todo />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path = "/detalhe/:inscricao" element={<Detalhe/>}></Route>
        <Route path="/alta" element={<Alta />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
