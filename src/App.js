import React,{Component} from 'react'
import { Route } from 'react-router-dom'
import "./App.css"

import {Routes} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
function App(){
  return(
 <div className='App'>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Services" element={<Services/>}/>
    <Route path="/Signup" element={<Signup/>}/>
  </Routes>
  
  
  
  
  
 </div>
  )
}
export default App
