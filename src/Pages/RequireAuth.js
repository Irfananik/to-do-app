import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Pages/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    const location = useLocation()

    if(loading) {
        return <Loading/>
    }

    if (!user) {
        return <Navigate to="/" state={{ from: location }} replace />
    }

    return children
};

export default RequireAuth;