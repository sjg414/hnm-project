import React from "react";
import ProdcutDetail from "../page/ProductDetail";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ authenticate }) => {
  return authenticate === true ? <ProdcutDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
