import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./estilo.css";
import "./estyle.scss";

import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
  MutationCache,
} from "react-query";
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

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      if (error.response) {
        const { mensajes } = error.response.data;
        toastme.warning(mensajes[0]);
      } else if (error.request) {
        toastme.error("APP_ERROR_MESSAGE");
      }
    },
  }),

  mutationCache: new MutationCache({
    onError: (error) => {
      const errorStatus = error.response.status;
      const errorMessages = error.response.data.mensajes;
      if (errorStatus === 400) {
        toastme.warning(errorMessages[0]);
      } else {
        toastme.error("APP_ERROR_MESSAGE");
      }
    },
  }),
});

const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </div>
  );
};

export default App;
