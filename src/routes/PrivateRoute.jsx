import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user , loading } = useContext(AuthContext)
    const location = useLocation()
    console.log("user in private route",user);
    if(loading){
        return <Spinner animation="border" variant="primary" />
    }
    if(user){
        return children
    }
    return <Navigate state={{from: location}} to="/login"  replace></Navigate>;
};

export default PrivateRoute;

/**
 * ---------------
 * STEPS
 * --------------
 * 
 * 1. check user is logged in or not 
 * 2. if user is logged in then allow them to visit the route
 * 3. else redirect user to login page
 * 4. set up the private router
 * 5. handle loading 
*/