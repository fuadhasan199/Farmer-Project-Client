import React, {  useContext } from 'react';
import { AuthContext } from '../Pages/AuthContext';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {  
        const provider=new GoogleAuthProvider() 

    const auth=getAuth() 
  
const {CreateUser}=useContext(AuthContext) 
      const handleSignIn=(e)=>{

       e.preventDefault() 

     const email=e.target.email.value 

     const password=e.target.password.value 



     e.target.reset() 


     CreateUser(email,password) 
     .then(res=>console.log(res.user))
     .catch(error=>console.log(error)) 

    



      } 

      const handleGoogle=()=>{

     signInWithPopup(auth, provider) 
     .then(res=>console.log(res.user))
     .catch(error=>console.log(error))

      }



    return (
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up Now ...!</h1>
      <p className="py-6"> 
      
      </p> 
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form className="fieldset" onSubmit={handleSignIn}>
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral bg-white text-black mt-4">Sign Up</button> 
          <button className='btn btn-neutral bg-white text-black mt-1'onClick={handleGoogle}><FcGoogle className='text-xl'/> Sign Up With Google</button>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignUp;