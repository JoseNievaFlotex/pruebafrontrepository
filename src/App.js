import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./estilo.css";
import "./estyle.scss";
//importamos los comp creados
import About from "./views/about";
import Contact from "./views/contact";
import Home from "./views/home";
import NavBarExample from "./layouts/navbar";
import Gallery from "./views/gallery";
import Team from "./views/Team";
import Features from "./views/features";
import Consulta from "./views/consulta";
import IntranetLogin from "./layouts/Auth/Intranet/IntranetLogin";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>

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
    </QueryClientProvider>
  );
};

export default App;
