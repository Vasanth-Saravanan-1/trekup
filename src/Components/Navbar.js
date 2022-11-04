import React, { Component } from "react";
import "./Navbar.css";
import{Link} from 'react-router-dom'

class Navbar extends Component{
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Trekup</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? " fas fa-times " : "fas fa-bars"}></i>
                    <ul className={this.state.clicked?"nav-menu active": "nav-menu"}>
                    <li>
                    <Link to={'/exact'} className="nav-links"> <i class="fa-solid fa-house-chimney" ></i>Home</Link>
                    </li>
                    <li>
                    <Link to={"/About"} className="nav-links"> <i class="fa-solid fa-circle-info"></i>About</Link>
                    </li>
                    <li>
                    <Link to={"/Services"} className="nav-links"> <i class="fa-solid fa-briefcase"></i>Services</Link>
                    </li>
                    <li>
                    <Link to={"/Contact"} className="nav-links"> <i class="fa fa-phone"></i>Contact</Link>
                    </li>
                    <li>
                    <Link to={"/Signup"} className="nav-links"> <i class="fa-handshake-o"></i>Signup</Link>
                    </li>
                </ul>
                </div>
                <ul className={this.state.clicked?"nav-menu active": "nav-menu"}>
                    <li>
                    <Link to={'/'} className="nav-links"> <i class="fa-solid fa-house-chimney" ></i>Home</Link>
                    </li>
                    <li>
                    <Link to={"/About"} className="nav-links"> <i class="fa-solid fa-circle-info"></i>About</Link>
                    </li>
                    <li>
                    <Link to={"/Services"} className="nav-links"> <i class="fa-solid fa-briefcase"></i>Services</Link>
                    </li>
                    <li>
                    <Link to={"/Contact"} className="nav-links"> <i class="fa fa-phone"></i>Contact</Link>
                    </li>
                    <li>
                    <Link to={"/Signup"} className="nav-links"> <i class="fa-handshake-o"></i>Signup</Link>
                    </li>
                </ul>
               
                </nav>
        )
    }
}

export default Navbar;