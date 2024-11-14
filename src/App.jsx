
import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import  { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import AboutPage from './Pages/AboutPage'
import CoursesPage from './Pages/CoursesPage'
import PricingPage from './Pages/PricingPage'
import ContactPage from './Pages/ContactPage'

function App() {
   
  let router = createBrowserRouter (createRoutesFromElements(
    <Route>
    <Route path='/' element={<Home/>}/>
    <Route path='aboutus' element={<AboutPage/>}/>
    <Route path='Courses' element={<CoursesPage/>}/>
    <Route path='Pricing' element={<PricingPage/>}/>
    <Route path='Contact' element={<ContactPage/>}/>
    
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}/>
        </>
      
    
  )
}

export default App
