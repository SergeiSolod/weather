import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/" exact>Главная</NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/weather" exact>Погода</NavLink>
                </li>
            </ul>
        </nav>
    )
}