// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = true; 

const PrivateRoute = ({ children,...rest }) => {
  return isAuthenticated ? children  : <Navigate to="/" replace />;
};

export default PrivateRoute;

