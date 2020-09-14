import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <h1>Bug Tracker</h1>
            <Link className="headerLink" to="/">Home</Link>
            <span> | </span>
            <Link className="headerLink" to="/about">About</Link>
        </header>
    )
}




export default Header;