import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
        <nav className="nav">
            <ul className='nav-links'>
                <li  className='nav-item'>
                <Link to='/'>Tentang aku</Link>
                </li>
                <li  className='nav-item'>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li  className='nav-item'>
                    <Link to='/tech'>Tech</Link>
                </li>
                <li  className='nav-item'>
                    <Link to='/resume'>Resume</Link>
                </li>
                <li  className='nav-item'>
                    <Link to='/contact'>Kontak</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}