/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Hook/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  console.log(location.pathname);

  if (loading) {
    return <h2>Loading .....</h2>
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoute;
