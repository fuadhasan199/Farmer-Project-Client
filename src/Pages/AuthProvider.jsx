import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase.config';

const AuthProvider = ({children}) => {
 
const [user,setUser]=useState(null) 


const CreateUser=(email,password)=>{
   return createUserWithEmailAndPassword(auth,email,password)
} 

const SignInUser=(email,password)=>{

  return signInWithEmailAndPassword(auth,email,password)



}  

const SignOutUser=()=>{

return signOut(auth)

} 

useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
  }) 

   return ()=>{
    unsubscribe()
   }
},[])



const AuthInfo={

user, 
CreateUser, 
 SignInUser, 
 SignOutUser



}

return(
    <AuthContext value={AuthInfo}>
        {children}
    </AuthContext>
)

};

export default AuthProvider