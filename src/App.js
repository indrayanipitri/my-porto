import './App.css';
import { Routes, Route, Outlet} from 'react-router-dom';
import Navbar from './Navbar/Navbar'
import LandingPage from './pages/LandingPage';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './parts/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Routes > 
        <Route path='/' element={<LandingPage />}/>
        <Route path='resume' element={<Resume />}/>
        <Route path='contact' element={<Contact />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
