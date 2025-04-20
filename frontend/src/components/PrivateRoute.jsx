import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ allowedRoles }) => {
    const { user } = useAuth();
    const location = useLocation();

    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  

    if(allowedRoles && !allowedRoles.includes(user)) {
      return <Navigate to='/unauthorized' />
    }

  return <Outlet />;
}

export default PrivateRoute