import React from "react";
import TripData from "./tripData";
import './Trip.css'

function Trip() {
    return (
        <div>
            <h1>Recent Trips</h1>
            <p>
                You can discover unique destination using Google Maps
            </p>
            <div className="tripcard">
                <div className="tripcard1">
                    
                 <div className="t-image">   <img  alt="image" src="https://images.unsplash.com/photo-1575400541559-0e4d8c65c834?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></img></div>
                    <TripData

                        heading="Paris, France"
                        text="Book now"
                    />

                </div>
                <div className="tripcard2">
                <div className="t-image"> <img alt="image" src="https://images.unsplash.com/photo-1597071599760-a2d98f84f689?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbmRlcnMlMjBvZiUyMG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></img></div>
                    <TripData

                        heading="Machu Picchu, Peru"
                        text="Book now"
                    />

                </div>
                <div className="tripcard3">
                <div className="t-image"> <img alt="image" src="https://images.unsplash.com/photo-1575432825314-034860f89466?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"></img></div>
                    <TripData

                        heading="New Zealand - The Land Where Adventures "
                        text="Book now"
                    />

                </div>
            </div>
            <div className="tripcard">
                <div className="tripcard1">
                    
                 <div className="t-image">   <img  alt="image" src="https://images.unsplash.com/photo-1574681051983-1ecd8f36183d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"></img></div>
                    <TripData

                        heading="Colosseum, Rome"
                        text="Book now"
                    />

                </div>
                <div className="tripcard2">
                <div className="t-image"> <img alt="image" src="https://images.unsplash.com/photo-1546441758-a678df1d3138?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw0NDA3NDA5fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></img></div>
                    <TripData

                        heading="London, England"
                        text="Book now"
                    />

                </div>
                <div className="tripcard3">
                <div className="t-image"> <img alt="image" src="https://images.unsplash.com/photo-1584211022290-ee43ea4955ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></img></div>
                    <TripData

                        heading="Turkey. Capital: Ankara"
                        text="Book now"
                    />

                </div>
                </div>
        </div>
    )
}
export default Trip