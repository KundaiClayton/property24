import React from 'react'
import {Link} from 'react-router-dom'
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'


const Navbar=()=>{
    return(
        <nav className="nav-wrapper blue darken-4">
            <div className="container">
                <Link to='/' className="brand-logo">Property24</Link>
                <LoggedIn/>
                <LoggedOut/>
            </div>
        </nav>
    )
}
export default Navbar