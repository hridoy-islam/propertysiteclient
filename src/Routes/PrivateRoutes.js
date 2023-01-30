import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/LoginContext';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useNavigate();
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    return children;
};

export default PrivateRoutes;