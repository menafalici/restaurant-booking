import React, { useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobilemenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Golden Fork < i className="fas fa-utensils" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        < i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobilemenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/kontakt' className='nav-links' onClick={closeMobilemenu}>Kontakt</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/boka' className='nav-links' onClick={closeMobilemenu}>Boka</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
