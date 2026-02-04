import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useLoaderData, useNavigate } from 'react-router';

const Details = () => { 

 const crop=useLoaderData() 
 const navigate=useNavigate()
 
console.log(crop)
    return (
        <div className='bg-gray-100 p-5'>  

         <button className='btn btn-success px-5 font-bold rounded-md flex items-center ' onClick={()=>navigate(-1)} > Back <IoMdArrowRoundBack className='items-center mt-1 ' /> </button>
          
          <div className="card shadow-2xl p-10 items-center bg-gray-200"> 

            
           <img src={crop.image} alt="" className='max-w-100 rounded-xl shadow-2xl ' />

           <p className='font-bold text-4xl mt-5 text-white bg-pink-500 p-2 rounded-xl'>{crop.type}</p> 
           <p className='font-light text-green-600 text-md mt-2'>Description:{crop.description}</p> 
           <div className="flex justify-between mt-2 gap-5">
          
          <p className='font-bold '>Price:{crop.pricePerUnit} টাকা /কেজি</p> 
          <p className='text-red-500 font-bold'> Quantity: {crop.quantity} টা </p>

         </div> 
         <p className='mt-2 font-bold bg-green-200 text-green-800 p-2 rounded-md'>Location: {crop.location}</p> 







         </div>


             



        </div>
    );
};

export default Details;