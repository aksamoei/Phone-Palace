import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <header>
      <NavBar/>
    </header>
    <Outlet />
    
    </>
  );
}

export default App;
