import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase.config';

const AuthProvider = ({children}) => {
 
const [user,setUser]=useState(null)  
const [loading,setloading]=useState(true)


const CreateUser=(email,password)=>{
   return createUserWithEmailAndPassword(auth,email,password)
} 

const SignInUser=(email,password)=>{

  return signInWithEmailAndPassword(auth,email,password)



}  

const SignOutUser=()=>{
 setloading(true)
return signOut(auth) 
.then(()=>{
   localStorage.removeItem('token')
   setloading(false)
})

} 

useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)   
    setloading(false)     
  }) 

   return ()=>{
    unsubscribe()
   }
},[])



const AuthInfo={

user,  
loading,
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