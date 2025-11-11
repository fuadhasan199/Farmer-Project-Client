import React, {  useContext } from 'react';
import { AuthContext } from './Pages/AuthContext';
import { Navigate } from 'react-router';

const Private = ({children}) => { 
const {user}=useContext(AuthContext) 

 

 if(user){
    return children
 } 
 


    return <Navigate to={'/Sign-In'}></Navigate>
     
   
};

export default Private;