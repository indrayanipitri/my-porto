import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Tech from './pages/Tech';
import Resume from './pages/Resume';
import Contact from  './pages/Contact';

function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <Link to='/' className='nav-item'>Tentang aku</Link>
        <Link to='/projects' className='nav-item'>Projects</Link>
        <Link to='/tech' className='nav-item'>Tech</Link>
        <Link to='/resume' className='nav-item'>Resume</Link>
        <Link to='/contact' className='nav-item'>Kontak</Link>

      </nav>
      <Routes>
        <Route path='/' element={<AboutMe />}/>
        <Route path='projects' element={<Projects />}/>
        <Route path='tech' element={<Tech />}/>
        <Route path='resume' element={<Resume />}/>
        <Route path='contact' element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
