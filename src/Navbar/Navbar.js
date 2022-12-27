import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
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
                <Link to='/' className='about'>
                    <li> Tentang aku</li>
                </Link>
                <Link to='/resume' className='resume'>
                    <li> Resume </li>
                </Link>
                <Link to='/contact' className='contact'>
                    <li> Kontak </li>
                </Link>
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