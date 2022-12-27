import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from  './pages/Contact';
import Navbar from './Navbar/Navbar';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Routes > 
        <Route path='/' element={<Home />}/>
        <Route path='resume' element={<Resume />}/>
        <Route path='contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
