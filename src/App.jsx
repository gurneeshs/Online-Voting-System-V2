import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Adminlogin from './pages/Adminlogin'
import User from './pages/User'
import Vote from './pages/Vote'
import Edit from './pages/Edit'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/Signup' element={<Signup />} />
      </Routes>
      <Routes>
        <Route path='/Login' element={<Login />} />
      </Routes>
      <Routes>
        <Route path='/AdminLogin' element={<Adminlogin />} />
      </Routes>
      <Routes>
        <Route path='/User' element={<User />} />
      </Routes>
      <Routes>
        <Route path='/Edit' element={<Edit />} />
      </Routes>
      <Routes>
        <Route path='/Vote' element={<Vote />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
