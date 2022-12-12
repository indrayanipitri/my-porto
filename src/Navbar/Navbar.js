import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <>
        <nav className="nav">
            <ul className='nav-links'>
                <Link to='/' className='about'>
                    <li> Tentang aku </li>
                </Link>
                <Link to='/projects' className='projects'>
                    <li> Projects </li>
                </Link>
                <Link to='/tech' className='skills'>
                    <li> Skills </li>
                </Link>
                <Link to='/resume' className='resume'>
                    <li> Resume </li>
                </Link>
                <Link to='/contact' className='contact'>
                    <li> Kontak </li>
                </Link>
            </ul>
            
        </nav>
        </>
    )
}