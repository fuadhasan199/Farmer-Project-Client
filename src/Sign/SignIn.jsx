
import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../Pages/AuthContext';
import { getAuth, GoogleAuthProvider,  signInWithPopup } from 'firebase/auth';
import { Link, Links, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const SignIn = () => { 
    const auth=getAuth() 
    const provider=new GoogleAuthProvider() 
    const navigate=useNavigate()

const { SignInUser}=useContext(AuthContext)
    const handleSignIn=async(e)=>{
     
        e.preventDefault()
        const email=e.target.email.value 

        const password=e.target.password.value  

        try{
            const result=await  SignInUser(email,password) 
             console.log(result.user)  
             e.target.reset()  
             
              
               Swal.fire({
            title: "Log in Successfull",
                   icon: "success",
                    draggable: true
});  
 navigate('/') 

        } 
        catch(error) { 
             Swal.fire({
            title: "error", 
            text:error.message,
                   icon: "error",
                    draggable: true
});
           
        }

       
     
    } 

    const handleGoogle=()=>{
  
         signInWithPopup(auth,provider) 
         .then(res=>{  
          console.log(res.user)
                         Swal.fire({
            title: "Log in Successfull",
                   icon: "success",
                    draggable: true
});  
navigate('/')
            
         })
         .catch(error=>console.log(error))




    }



    return (
        <div>
      <div className="hero bg-base-200 min-h-screen">
       <div className="hero-content flex-col lg:flex-row-reverse">
       <div className="text-center lg:text-left">
         <h1 className="text-4xl font-bold">Sign In Please</h1>
          <p className="py-6"> 
                    
  </p>  
    </div>
                  <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
     <div className="card-body">
      <form className="fieldset" onSubmit={handleSignIn}> 
     <label className="label">Email</label>
        <input type="email" name='email'  className="input" placeholder="Email" />
          <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />
             <div> Don't have account Please <Link to={'/Sign-Up'} className='text-red-500 font-bold'>Sign Up</Link> </div>
               <button className="btn btn-neutral bg-white text-black mt-4" >Sign In</button> 
                <button className='btn btn-neutral bg-white text-black mt-1' onClick={handleGoogle}><FcGoogle className='text-xl'/> Sign In With Google</button> 
     </form> 
    </div>
         </div>
             </div>
        </div>
        </div>
    );
};

export default SignIn;