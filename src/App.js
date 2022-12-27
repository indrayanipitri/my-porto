import './App.css';
import { Routes, Route, Outlet} from 'react-router-dom';
import Navbar from './Navbar/Navbar'
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Routes > 
        <Route path='/' element={<LandingPage />}/>
      </Routes>
    </div>
  );
}

export default App;
