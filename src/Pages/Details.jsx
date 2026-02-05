import React, { useContext, useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from './AuthContext';
import Swal from 'sweetalert2';

const Details = () => { 

 const crop=useLoaderData() 
 const navigate=useNavigate() 
 const {user}=useContext(AuthContext) 
 const [quantity,setQuantity]=useState(1)
 
console.log(crop) 

const totalPrice=crop.pricePerUnit * quantity  

const handleInterest=()=>{ 
    const interest= {
         cropId:crop._id,
          cropName:crop.type, 
          totalPrice:totalPrice,
          image:crop.image,
         quantity: parseInt(quantity),
          Seller : crop.userEmail,
          Buyer :user?.email,
          status:'pending'

    } 
     fetch(`https://farmers-api-omega.vercel.app/interest`,{
          method:'POST',
          headers:{
             'content-type':'application/json'
          }, 
          body:JSON.stringify(interest)
     }) 
     .then(res=>res.json())
     .then(data=> {
        if (data.insertedId) {
                    Swal.fire("অভিনন্দন!", "আপনার ইন্টারেস্ট সফলভাবে জানানো হয়েছে।", "success");
                    navigate('/my-interest')
                }

           
         } )
     } 
     
  

    return (
        <div className='bg-gray-100 p-5 container mx-auto'>  

         <button className='btn btn-success px-5 font-bold rounded-md flex items-center text-white' onClick={()=>navigate(-1)} >  <IoMdArrowRoundBack className='items-center mt-1 ' />  Back</button>
          
          <div className="card shadow-2xl p-10 items-center bg-gray-200"> 

            
           <img src={crop.image} alt="" className='w-2/3 rounded-xl shadow-2xl ' />

           <p className='font-bold text-4xl mt-5 text-white bg-pink-500 p-2 rounded-xl'>{crop.type}</p> 
           <p className='font-light text-green-600 text-md mt-2'>Description:{crop.description}</p> 
           <div className="flex justify-between mt-2 gap-5">
          
          <p className='font-bold '>Price:{crop.pricePerUnit} টাকা /কেজি</p> 
          <p className='text-red-500 font-bold'> Quantity: {crop.quantity} টা </p>

         </div> 
         <p className='mt-2 font-bold bg-green-200 text-green-800 p-2 rounded-md'>Location: {crop.location}</p> 
         <p className='font-semibold mt-5 text-xl '> Seller: {crop.owner.ownerName}</p> 

       
              
                <div className="mt-10 bg-white p-6 rounded-2xl shadow-inner w-full max-w-md border-t-4 border-green-500">
                    <h3 className='text-center font-bold text-2xl mb-4 text-green-700'>অর্ডার বক্স</h3>

                
                    {user?.email !== crop.userEmail ? (
                        <div className='space-y-4'>
                            <div>
                                <label className='block font-bold mb-2'>আপনি কতটুকু নিতে চান? ({crop.unit})</label>
                                <input
                                    type="number"
                                    min="1"
                                    max={crop.quantity}
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    className='input input-bordered w-full focus:ring-2 focus:ring-green-400'
                                />
                            </div>

       <div className='bg-green-100 p-3 rounded-lg flex justify-between items-center'> 

            <span className='font-bold text-gray-700'> মোট মূল্য: </span> 

            <span className='text-2xl font-black text-green-800'>{totalPrice} টাকা</span>
             </div>

    <button onClick={handleInterest}  className='btn btn-success w-full text-white font-bold text-lg border-none shadow-lg' disabled={quantity > crop.quantity || quantity < 1} >  I am Interested  </button>
                               
          
                            
        {quantity > crop.quantity && (
     <p className='text-red-500 text-sm text-center mt-2'>দুঃখিত , আমাদের স্টকে এতো পরিমাণ নেই।</p>
                            )}
                        </div>
                    ) : (
                        <div className='text-center p-4 bg-yellow-100 rounded-lg text-yellow-800 font-bold'>
                            এটি আপনার নিজের পোস্ট করা ফসল।
                        </div>
                    )}

           </div>

        </div> 
        </div> 
        
    );
};

export default Details;