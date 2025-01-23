import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Layout from './layouts'
import Home from './pages/home'
import Wishlist from './pages/wishlist'
import Basket from './pages/basket'
import Add from './pages/add'
import 'bootstrap/dist/css/bootstrap.min.css';
import Edit from './pages/edit'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/basket' element={<Basket/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
