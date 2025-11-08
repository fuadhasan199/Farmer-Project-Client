import React from 'react';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const Mainlayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navber></Navber>  
            <div className="flex-1"> 
              
                <Outlet></Outlet>

               </div>
           

            <Footer></Footer>
        </div>
    );
};

export default Mainlayout; 