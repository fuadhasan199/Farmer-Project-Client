import React from 'react';
import { NavLink } from 'react-router'; 
import logo from "../Logo.png"

const Navber = () => {
    return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto p-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>  <NavLink to={'/'} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}>Home</NavLink>  </li>
        
        <li> <NavLink to={'/All-Crops'} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}>ALL Crops</NavLink>   </li> 

       
          
       
        <li>   <NavLink to={'/Profile'} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}>Profile</NavLink>    </li> 

         <li> <NavLink to={'/Add-Crops'} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}>Add Crops </NavLink>  </li> 

          <li> <NavLink to={"/My-Post"} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}> My Post </NavLink> </li> 

           <li> <NavLink to={'/My-interest'} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}>My Interest</NavLink>  </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"> <img src={logo} alt="" className='h-[90px] rounded-2xl p-1' /> </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to={'/'} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}>Home</NavLink></li> 

      <li><NavLink to={'/All-Crops'} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}>ALL Crops</NavLink></li>
    
      
      <li> <NavLink to={'/Profile'} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}>Profile</NavLink></li> 

      <li><NavLink to={'/Add-Crops'} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}>Add Crops </NavLink> </li> 

      <li><NavLink to={"/My-Post"} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}> My Post </NavLink></li> 
       
       <li><NavLink to={'/My-interest'} className={({isActive})=>(isActive ? 'text-red-500 font-bold':'')}>My Interest</NavLink> </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Log in</a>
  </div>
</div>
    );
};

export default Navber;