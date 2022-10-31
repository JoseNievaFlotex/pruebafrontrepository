
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './estilo.css';
import './estyle.scss';
//importamos los comp creados
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import NavBarExample from './layouts/navbar';
import Service from './components/services';
import Gallery from './components/gallery';
import Team from './components/Team';
import Testimonial from './components/testimonials';
import Features from './components/features';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route index element={ <Home /> } />
    <Route path='feature' element={ <Features /> } />
    <Route path='about' element={ <About /> } />
    <Route path='service' element={ <Service /> } />
    <Route path='gallery' element={ <Gallery /> } />
    <Route path='testimonial' element={ <Testimonial /> } />
    <Route path='team' element={ <Team /> } />
    <Route path='contact' element={ <Contact /> } />
    <Route path='contact' element={ <Contact /> } />
    <Route path='contact' element={ <Contact /> } />
    <Route path='contact' element={ <Contact /> } />
    <Route path='contact' element={ <Contact /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>

    </div>
  );
}

export default App;
