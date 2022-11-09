import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./estilo.css";
import "./estyle.scss";
import { toastme } from "toastmejs";
//importamos los comp creados
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import NavBarExample from "./layouts/navbar";
import Gallery from "./components/gallery";
import Team from "./components/Team";
import Features from "./components/features";
import Consulta from "./components/consulta";

import IntranetLogin from "./layouts/Auth/Intranet/IntranetLogin";


const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavBarExample />}>
              <Route index element={<Home />} />
              <Route path="feature" element={<Features />} />
              <Route path="about" element={<About />} />
              <Route path="gallery" element={<Gallery />} />

              <Route path="team" element={<Team />} />
              <Route path="contact" element={<Contact />} />

              <Route path="consulta" element={<Consulta />} />

              <Route path="intranet" element={<IntranetLogin />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
