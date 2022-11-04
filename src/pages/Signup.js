import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/hero";
import Footer from "../Components/Footer";
function Signup(){
    return(
      <>
       <Navbar/>
       <Hero
className='hero-mid'
Img="https://images.unsplash.com/photo-1527824404775-dce343118ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
title=" Signup"/>

<div className="signup" >
   <h3>
    We will make a Memories
   </h3>
   <h5>To be continue......</h5>

</div>
<Footer/>
      </>
    )
}
export default Signup;