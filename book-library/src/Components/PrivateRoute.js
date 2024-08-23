import React from 'react'
import {Navigate,Route} from 'react-router-dom';

export const PrivateRoute=({Component})=>{
    const isAuthenticated=false;
    return isAuthenticated? Component:<Navigate to="/books"/>
}