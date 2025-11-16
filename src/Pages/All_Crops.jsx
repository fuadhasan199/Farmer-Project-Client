import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';


const All_Crops = () => { 
    const Cards=useLoaderData() 
     
    const [serachCard,setsearchCard]=useState('') 

    const SerachCard=Cards.filter(card=>card.name.toLowerCase().includes(serachCard.toLowerCase()))



    return (
        <div className='container mx-auto bg-gray-100 p-2 rounded-xl'> 
   
          <h1 className='text-center text-4xl font-bold mt-2'>এক নজরে সকল ফসল </h1>
          
          <p className='text-center text-xl mt-8 font-light'>ফসলের লিস্ট – আপনার পছন্দের ফসল খুজুন আর বিস্তারিত জানুন </p> 


<div className="flex gap-1 p-2 ">
    <input type="text" placeholder="আপনার ফসলের নাম সার্চ করুন" className="input input-md" value={serachCard} onChange={(e)=>setsearchCard(e.target.value)}/> 
    
  
    
    

    <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-5 m-1 "> 



        {
    SerachCard.map((card)=>(
        <div className="w-full bg-gray-200 shadow-lg"> 
        
       <figure>
            <img
              src={card.image}
              className='max-h-[200px] max-w-[300px] m-2 rounded-2xl shadow-2xl '
              alt=""
            />
          </figure> 
            <div className="card-body">
            <h2 className="card-title">
              {card.name}
              <div className="badge badge-secondary">{card.type}</div>
            </h2>

            <p>{card.description}</p>

            <div className="card-actions justify-end">
              <div className="badge badge-outline text-green-800 font-bold bg-green-100">{card.location}</div>
              <div className="badge badge-outline bg-green-100 text-green-700 font-bold">{card.pricePerUnit} tk</div> 
            </div>

            <Link to={`/Details/${card._id}`}> 
              <button className='btn bg-blue-600 text-white rounded-md flex mx-auto mt-2'>
                View Details
              </button> 
            </Link>
          </div>
          
        
        </div>
    ))
  }


    </div>







</div>  

      <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-3 m-2 "> 

     
   {
     Cards.map((card)=>(

        <div className="card  w-full shadow-sm bg-gray-200 ">
  <figure>
    <img
      src={card.image} className='max-h-[200px] max-w-[300px] m-2 rounded-2xl shadow-2xl '
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {card.name}
      <div className="badge badge-secondary">{card.type}</div>
    </h2>
    <p>{card.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline text-green-800 font-bold bg-green-100">{card.location}</div>
      <div className="badge badge-outline bg-green-100 text-green-700 font-bold">{card.pricePerUnit} tk</div> 

     
    </div> 
           <Link to={`/Details/${card._id}`}> 
        
           <button className='btn bg-blue-600 text-white rounded-md flex mx-auto mt-2'>View Details</button> 
              </Link>
   </div> 
</div>










     ))


   } 
    </div>









         
        </div>
    );
};

export default All_Crops;