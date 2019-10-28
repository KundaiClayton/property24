import React from 'react'
import  { NavLink } from 'react-router-dom'


const LoggedOut = () => {
    return (
        <ul className="right">
            <li><NavLink to='/login'>LogIn</NavLink></li>
            <li><NavLink to='/registration'>Sign Up</NavLink></li>
        </ul>
    )
}

export default LoggedOut
