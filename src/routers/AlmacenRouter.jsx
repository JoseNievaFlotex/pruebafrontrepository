import React from "react";
import { Navigate, Route } from "react-router-dom";
import { NotFoundComponent } from "../components/NotFoundComponent";
import Index from "../views/Almacen/index";

const AlmacenRoutes = () => {
  return (
    <NotFoundComponent>
      <Route path={"/dashboard"} element={<Index />} />
      <Route path="*" element={<Navigate replace to="/almacen/dashboard" />} />
    </NotFoundComponent>
  );
};

export default AlmacenRoutes;
