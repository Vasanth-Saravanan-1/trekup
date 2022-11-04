import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/hero';
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactForm';
function Contact(){
    return(
        <>
        <Navbar/>
        <Hero
className='hero-mid'
Img="https://images.unsplash.com/photo-1519500099198-fd81846b8f03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
title=" Connect"
text="the wonderful dream is comming"/>
<ContactForm/>
<Footer/>

        </>
    )
}
 export default Contact;