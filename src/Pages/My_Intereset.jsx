import React, { useContext, useEffect, useState }  from 'react';
import { AuthContext } from './AuthContext';
import Swal from 'sweetalert2';
import Loading from './Loading';
 
const My_Intereset = () => { 
 
    const {user}=useContext(AuthContext)
    const [interests,setMyInterest]=useState([])

     const [loader,setLoader]=useState(true) 
     const token=localStorage.getItem('token')
   useEffect(()=>{  
    setLoader(true)
    if(user){
       fetch(`https://farmers-api-omega.vercel.app/my-interest?email=${user?.email}`,{
          headers:{
             authorization: `Bearer ${token}`
          }
       })
       .then(res=>res.json())
       .then(data=>setMyInterest(data)) 
       setLoader(false)
    }

   },[user]) 

   const handleDelete=(id)=>{
      Swal.fire({
            title: "আপনি কি নিশ্চিত",
            text: "ইন্টারেস্ট ডিলিট করতে চান কি ..? ",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText:' না থাক ',
            confirmButtonText: "হ্যাঁ, ডিলিট করুন"
        }) .then((result)=>{
            if(result.isConfirmed){
               fetch(`https://farmers-api-omega.vercel.app/interest/${id}`,{
                 method:'DELETE'
               }) 
               .then(res=>res.json())
               .then(data=>{
                 if(data.deletedCount >0){
                    Swal.fire("সফল ভাবে ডিলিট হয়েছে","success") 
                    const remain=interests.filter(interest=>interest._id !==id)
                     setMyInterest(remain)
                 }
               })
            }
        })
   }

    if(loader){
        return <Loading></Loading>
    }

    return ( 

      <div className="container mx-auto rounded-md shadow-md  m-5 ">  
      <h2 className='font-bold text-end text-3xl mb-2 mr-3'>My Interest Page</h2>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Crop Name : </th>
        
        <th>Quantity : </th>
        <th>Total Price</th> 
        <th>Status</th> 
         <th> Action</th>
               </tr>
    </thead>
    <tbody>
      {/* row 1 */} 
     
       {
        interests.length ===0 ? (
           <td colSpan="6" className="text-center py-20 text-gray-500 text-2xl">
            
             আপনি এখন পর্যন্ত কোনো ফসলে আগ্রহ দেখাননি     </td> 
            
        ):(
            interests.map((interest,index)=>( 
        <tr key={interest._id}>
        <th>{index+1}</th>
        <td>{interest.cropName}</td>
       
        <td>{interest.quantity}</td> 
        <td>{interest.totalPrice}</td> 
        <td>
          <span className={`badge  p-3 font-bold text-base-200 text-center ${
        interest.status === 'pending' ? 'bg-success' : 'bg-green-500'}`}>
   {interest.status} </span>
          </td> 
        <td><button onClick={()=>handleDelete(interest._id)} className='btn btn-error rounded-md'>Delete</button></td>
      </tr> 
               
            ))
        )
       }

      


    
    </tbody>
  </table>
</div>

      </div>
      
    )
};

export default My_Intereset;