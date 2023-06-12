import React from 'react'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import Services from './components/Services'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Top from './components/Top'
import Footer from './components/Footer'
import Insurance from './components/Insurance'
const App = () => {
  return (
<>
<BrowserRouter>
<Top/>
<Sidebar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/services' element={<Services/>}/>
<Route path='/insurance' element={<Insurance/>}/>
  
</Routes>


<Footer/>


</BrowserRouter>
</>  )
}

export default App
