import './hero.css';
import React from 'react';
 function Hero(props)
{
    return(
        <>
        <div className={props.className}>
        <img alt='Img' src={props.Img}/>
            
            <div className='hero-text'>
                <h1>
                    {props.title}
                </h1>
                <p>
                   { props.text}
                </p>
                
               
            </div>
            </div>
            </>
    );
}
export default Hero;