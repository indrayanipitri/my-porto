import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Tech from './pages/Tech';
import Resume from './pages/Resume';
import Contact from  './pages/Contact';
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
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
