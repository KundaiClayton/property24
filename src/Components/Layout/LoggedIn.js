import React from 'react'
import  { NavLink } from 'react-router-dom'


const LoggedIn = () => {
    return (
        <ul className="right">
        <li><NavLink to='/'>Properties</NavLink></li>
            <li><NavLink to='/login'>LogOut</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating lighten-5'>Avatar</NavLink></li>
        </ul>
    )
}

export default LoggedIn
