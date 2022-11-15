import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./estilo.css";
import "./estyle.scss";
//importamos los comp creados
import IntranetLogin from "./layouts/Auth/Intranet/IntranetLogin";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthRoutes } from "./routers/AuthRouter";
import AppRouter from "./routers/AppRouter";
import PublicRouter from "./routers/PublicRoutes";
import PrivateRoutes from "./routers/PrivateRoutes";
import AlmacenRoutes from "./routers/AlmacenRouter";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<AuthRoutes />} />
            <Route path="intranet" element={<IntranetLogin />} />
          </Routes>
          <Routes>
            <Route path="/ventas/*" element={<AppRouter />} />
          </Routes>
          <Routes>
            <Route path="/almacen/*" element={<AlmacenRoutes />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
};

export default App;
