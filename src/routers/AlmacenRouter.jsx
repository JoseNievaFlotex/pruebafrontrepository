import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Index from '../views/Almacen/index';

const AlmacenRoutes = () => {
    return(
        <Routes>
            <Route path={'/dashboard'} element={<Index />} />
            <Route path="*" element={<Navigate replace to="/almacen/dashboard" />} />
        </Routes>
    )
}

export default AlmacenRoutes;