import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NotFoundComponent } from "../components/NotFoundComponent";
import { privateRoutes } from "../helpers/routes";
import DashBoard from "../views/Ventas/indexDashboard";

const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path={'/dash'} element={<DashBoard />} />
        <Route path="*" element={<Navigate replace to="/ventas/dash" />} />

    </Routes>
      
    </>
  );
};
export default AppRouter;
