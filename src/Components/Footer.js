import React from "react";
import'./Footer.css'

const Footer=()=>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Trekup</h1>
                    <p>Choose your destination</p>

                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-behance-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>

                </div>

            </div>

            <div className="bottom">
                <div>
                    <h4>
                        Projects
                    </h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">life </a>
                    <a href="/">ecommerce</a>
                    
                </div>
                <div>
                    <h4>
                        Community
                    </h4>
                    <a href="/">Github</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                    
                </div>
                <div>
                    <h4>
                       Help
                    </h4>
                    <a href="/">Support</a>
                    <a href="/">Troupleshoot</a>
                    <a href="/">Contactus</a>
                  
                    
                </div>
                <div>
                    <h4>
                        Others
                    </h4>
                    <a href="/">Terms of services</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Licence </a>
                    
                    
                </div>

            </div>
            
            
            <div className="end">
                <p> @2022 copyright : VasanthSaravanan </p>
            </div>
        </div>

    )
}

export default Footer