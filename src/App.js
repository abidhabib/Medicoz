import React from 'react'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import Services from './components/Services'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Top from './components/Top'
import Footer from './components/Footer'
import Insurance from './components/Insurance'
import Ourteam from './components/Ourteam'
import ContactUs from './components/ContactUs'
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
<Route path='/ourteam' element={<Ourteam/>}/>
<Route path='/contact' element={<ContactUs/>}/>


  
</Routes>


<Footer/>


</BrowserRouter>
</>  )
}

export default App
