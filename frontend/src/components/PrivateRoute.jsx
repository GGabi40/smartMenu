import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ allowedRoles }) => {
    const { user } = useAuth();

    if(allowedRoles && !allowedRoles.includes(user)) {
      return <Navigate to='/unauthorized' />
    }

  return <Outlet />;
}

export default PrivateRoute