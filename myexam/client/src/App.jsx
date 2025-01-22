import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/mainlayout'
import Goods from './pages/goods'
import Wishlist from './pages/wishlist'
import Add from './pages/add'
import Details from './pages/details'
import NotFound from './pages/notfound'
import Home from './pages/home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/goods' element={<Goods/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/details/:id' element={<Details/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>


        </Route>

      </Routes>
    </>
  )
}

export default App
