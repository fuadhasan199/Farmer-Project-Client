import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { getAuth } from 'firebase/auth';

const Profile = () => { 

    const {user}=useContext(AuthContext) 
    const Auth=getAuth() 

     console.log(user) 

     if(!user){

        return <p className='text-center mt-5'>দয়া করে লগ করুন 

        </p>
     }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 container mx-auto">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <img
          src={user.photoURL || " https://i.ibb.co.com/Y70TtMxm/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg" }
          alt="User Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-green-500 shadow-md"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Name: 
           {user.displayName || "No Name Found"}
        </h2>
        <p className="text-gray-600 mb-2">Email:{user.email}</p>
        <p
          className={`${
            user.emailVerified ? "text-green-600" : "text-red-600"
          } font-semibold mb-4`}
        >
          {user.emailVerified ? "Email Verified" : "Email Not Verified"}
        </p>
        <p className="text-sm text-gray-500">UID: {user.uid}</p>
      </div>
    </div>
  );


  }








export default Profile;