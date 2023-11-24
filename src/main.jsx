import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Todo from './Todo/todo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path='/todo' element={<Todo />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
