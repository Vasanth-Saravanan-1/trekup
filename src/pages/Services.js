import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/hero';
import Footer from '../Components/Footer';
import Trip from '../Components/Trip';
function Services(){
    return(
       
        <>
         <Navbar/>
         <Hero
className='hero-mid'
Img="https://images.unsplash.com/photo-1473625247510-8ceb1760943f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=811&q=80"
title=" Services"/>
<Trip/>
<Footer/>
        </>)
}
export default Services;