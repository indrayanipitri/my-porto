import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar(props) {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <>
        <nav className="nav">
            <Link to='/'>
            <h2 className='logo'>pitri.</h2>
            </Link>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links" }
            onClick={function() {
                setIsMobile(false)
            }}>
                <NavLink to='/' className="about"   >
                    <li> Home </li>
                </NavLink>
                <NavLink to='/resume' className="resume">
                    <li> Resume </li>
                </NavLink>
                <NavLink to='/contact' className="contact">
                    <li > Kontak </li>
                </NavLink>
            </ul>
            <button className='mobile-menu'
            onClick={function() {
                setIsMobile(!isMobile)
            }}
            >
                {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
            </button>
        </nav>
        </>
    )
}