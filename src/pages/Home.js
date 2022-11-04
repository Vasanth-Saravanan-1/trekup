import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/hero';
import Destination from '../Components/Destination';
import Trip from '../Components/Trip';
import Footer from '../Components/Footer';

function Home(){
  return(
  <>
  <Navbar/>
<Hero 
className='hero'
Img="https://images.unsplash.com/photo-1544002177-fce4696659d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
title=" Hi traveller"
text="the wonderful dream is comming"/>
<Destination/>
<Trip/>
<Footer/>


</>
  );
}
export default Home;
