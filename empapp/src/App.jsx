import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { AppBar } from '@mui/material'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Welcome</h1>
      <Navbar />
      <Routes>
        <Route path='/l' element={<Add />} />
        <Route path='/v' element={<View />} />
      </Routes>
      </>

  )
}

export default App
