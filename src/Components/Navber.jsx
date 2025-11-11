import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router'; 
import logo from "../Logo.png"

import { auth } from '../Firebase.config';
import { AuthContext } from '../Pages/AuthContext';

const Navber = () => { 


 const {user, SignOutUser}=useContext(AuthContext) 

 const handleSignOut=()=>{
    SignOutUser(auth)
    .then(res=>console.log(res.user))
    .catch(error=>console.log(error))
 
  } 


    const loggedInLinks = (
    <>
      <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-red-500 font-bold' : ''}>Home</NavLink></li>
      <li><NavLink to="/All-Crops" className={({ isActive }) => isActive ? 'text-red-500 font-bold' : ''}>All Crops</NavLink></li>
      <li><NavLink to="/Profile" className={({ isActive }) => isActive ? 'text-red-500 font-bold' : ''}>Profile</NavLink></li>
      <li><NavLink to="/Add-Crops" className={({ isActive }) => isActive ? 'text-red-500 font-bold' : ''}>Add Crops</NavLink></li>
      <li><NavLink to="/My-Post" className={({ isActive }) => isActive ? 'text-red-500 font-bold' : ''}>My Post</NavLink></li>
      <li><NavLink to="/My-interest" className={({ isActive }) => isActive ? 'text-red-500 font-bold' : ''}>My Interest</NavLink></li>
    </>
  ); 






    const loggedOutLinks = (
    <>
      <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-red-500 font-bold' : ''}>Home</NavLink></li>
      <li><NavLink to="/All-Crops" className={({ isActive }) => isActive ? 'text-red-500 font-bold' : ''}>All Crops</NavLink></li>
      <li><NavLink to="/Sign-In" className={({ isActive }) => isActive ? 'text-red-500 font-bold' : ''}>Login</NavLink></li>
      <li><NavLink to="/Sign-Up" className={({ isActive }) => isActive ? 'text-red-500 font-bold' : ''}>Register</NavLink></li>
    </>
  );











    return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto p-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      {/* <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>  <NavLink to={'/'} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}>Home</NavLink>  </li>
        
        <li> <NavLink to={'/All-Crops'} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}>ALL Crops</NavLink>   </li> 

       
          
       
        <li>   <NavLink to={'/Profile'} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}>Profile</NavLink>    </li> 

         <li> <NavLink to={'/Add-Crops'} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}>Add Crops </NavLink>  </li> 

          <li> <NavLink to={"/My-Post"} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}> My Post </NavLink> </li> 

           <li> <NavLink to={'/My-interest'} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}>My Interest</NavLink>  </li>
      </ul> */}
    </div>
    <a className="btn btn-ghost text-xl"> <img src={logo} alt="" className='h-[90px] rounded-2xl p-1' /> </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1"> 

                {user ? loggedInLinks : loggedOutLinks}

      {/* <li><NavLink to={'/'} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}>Home</NavLink></li> 

      <li><NavLink to={'/All-Crops'} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}>ALL Crops</NavLink></li>
    
      
      <li> <NavLink to={'/Profile'} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}>Profile</NavLink></li> 

      <li><NavLink to={'/Add-Crops'} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}>Add Crops </NavLink> </li> 

      <li><NavLink to={"/My-Post"} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}> My Post </NavLink></li> 
       
       <li><NavLink to={'/My-interest'} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}>My Interest</NavLink> </li> */}
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a className="btn">Log in</a> */} 
   
    {user ?<a className='btn bg-blue-500 text-white rounded-md' onClick={handleSignOut}>SignOut</a>:<Link to={'/Sign-In'} className='btn bg-blue-500 text-white rounded-md'>Sign-In</Link>}
     

  </div>
</div>
    );
};

export default Navber;