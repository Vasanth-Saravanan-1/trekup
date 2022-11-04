import React from "react";
import "./Trip.css"
function TripData(props){
    return(
        <div className="t-card">
           <img>
           
           </img>
            <h4>
                {props.heading}
                
            </h4>
            <p>
                {props.text}
            </p>

        </div>
    )
}
export default TripData