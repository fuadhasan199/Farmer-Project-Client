import React, {  useContext } from 'react';
import { AuthContext } from './Pages/AuthContext';
import { Navigate } from 'react-router';
import Loading from './Pages/Loading';

const Private = ({children}) => { 
const {user,loading}=useContext(AuthContext) 

  if(loading){

    return <Loading></Loading>
  }

 if(user){
    return children
 } 
 


    return <Navigate to={'/Sign-In'}></Navigate>
     
   
};

export default Private;