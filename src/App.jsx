import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Tours from './pages/Tours'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
// import { Home } from 'lucide-react'

const router = createBrowserRouter([
  {
    path:'/',
    element:<><Navbar /><Home /></>
  },
  {
    path:'/tours',
    element:<><Navbar /><Tours /></>
  },
  {
    path:'/gallery',
    element:<><Navbar /><Gallery /></>
  },
  {
    path:'/about',
    element:<><Navbar /><About /></>
  },
  {
    path:'/contact',
    element:<><Navbar /><Contact /></>
  },
])

function App() {

  return (
    <>
        {/* <Navbar /> */}
        <RouterProvider router={router}/>
    </>
  )
}

export default App
