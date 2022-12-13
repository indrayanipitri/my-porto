import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Contact from  './pages/Contact';
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='projects' element={<Projects />}/>
        <Route path='skills' element={<Skills />}/>
        <Route path='resume' element={<Resume />}/>
        <Route path='contact' element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
