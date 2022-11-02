
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './estilo.css';
import './estyle.scss';
//importamos los comp creados

import Register from './components/register';
import Login from './components/login';
import NavLogin from './navLogin';
function AppNav() {
  return (
    <div className="AppNav">

<BrowserRouter>
    <Routes>
        <Route path='/' element={ <NavLogin /> }>
            
            <Route path='login' element={ <Login /> } />
            <Route path='register' element={ <Register /> } />
            
            
        </Route>
    </Routes> 
</BrowserRouter>

    </div>
  );
}

export default AppNav;
