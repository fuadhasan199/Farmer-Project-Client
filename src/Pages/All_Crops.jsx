import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Loading from './Loading';

const All_Crops = () => { 
    
    const initialCards = useLoaderData(); 
     
    const [search, setSerach] = useState(''); 
    const [loader,setLoader]=useState(true)
   
    const [crops, setCrops] = useState(initialCards); 

 
    useEffect(() => {
        fetch(`https://farmers-api-omega.vercel.app/farmers?search=${search}`)
            .then(res => res.json())
            .then(data => setCrops(data));
            setLoader(false)
    }, [search]); 

    if(loader){
         return <Loading></Loading>
    }

    return (
        <div className='container mx-auto bg-gray-100 p-4 rounded-xl min-h-screen'> 
            
          
        <div className='mb-10 text-center'>
        <h1 className='text-4xl font-bold text-green-700 mt-2'>এক নজরে সকল ফসল</h1>
         <p className='text-xl mt-4 font-light text-gray-600 italic'>
         ফসলের লিস্ট – আপনার পছন্দের ফসল খুঁজুন আর বিস্তারিত জানুন
  </p> 
     </div>

           
 <div className="flex justify-center mb-10">
     <div className="relative w-full max-w-md">
          <input  type="text" placeholder="Search here..." className="input input-bordered w-full pr-10 shadow-md focus:border-green-500" value={search} 
          onChange={(e) => setSerach(e.target.value)} />
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>

           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
                {
                   
            crops.length > 0 ? (
   crops.map((card) => (
          <div key={card._id} className="card bg-white shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
               <figure className='px-4 pt-4'>
                 <img src={card.image} className='h-[200px] w-full rounded-xl object-cover shadow-sm' alt={card.name} />
                                </figure>
    <div className="card-body">
     <div className='flex justify-between items-center'>
        <h2 className="card-title text-gray-800 font-bold">
              {card.name} </h2>
   <div className="badge badge-secondary badge-outline">{card.type}</div>
      </div>
                                    
  <p className='text-gray-600 text-sm line-clamp-2 my-2'>{card.description}</p>
                                    
       <div className="card-actions justify-start gap-2 mt-2">
         <div className="badge badge-ghost text-green-700 font-semibold bg-green-50 p-3 italic">
             📍 {card.location}
                     </div>
         <div className="badge badge-ghost text-blue-700 font-bold bg-blue-50 p-3">
                        ৳ {card.pricePerUnit} / ইউনিট
                 </div> 
   </div> 

        <div className='mt-5'>
           <Link to={`/Details/${card._id}`}> 
            <button className='btn bg-green-600 hover:bg-green-700 text-white border-none w-full shadow-md'>
                        View Details  </button>  </Link>
          </div>
       </div> 
              </div>
              ))
   ) : (
                       
    <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-20 bg-white rounded-2xl shadow-inner">
        <div className="text-6xl mb-4 text-gray-300">🔍</div>
         <h2 className="text-2xl text-red-500 font-bold italic">
       দুঃখিত! "{search}" নামে কোনো ফসল আমাদের তালিকায় নেই।
            </h2>
    <p className='text-gray-500 mt-2'>দয়া করে আবার চেষ্টা করুন।</p>
        </div>
        )
     } 
     </div>
        </div>
    );
};

export default All_Crops;