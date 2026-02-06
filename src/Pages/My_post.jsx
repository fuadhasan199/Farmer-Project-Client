import React, {useContext, useState, } from 'react';
import { CropContext } from './CropProvider';
import { AuthContext } from './AuthContext';
import Modal from './Modal';
import Swal from 'sweetalert2';


const My_post = () => { 
   
    const { myCrops, setMyCrops } = useContext(CropContext); 
  
    
    const {user}=useContext(AuthContext) 

    const [selectedCrop,setSelectedCrop]=useState(null)

    const userCrops=myCrops.filter(crop=>crop.userEmail ===user.email) 

const handleDelete = (cropId) => {
        
        Swal.fire({
            title: "আপনি কি নিশ্চিত?",
               icon: "warning",
            showCancelButton: true,
            confirmButtonText: "হ্যাঁ, ডিলিট করুন!",
          cancelButtonText: "না, থাক"
         
            
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`https://farmers-api-omega.vercel.app/farmers/${cropId}`, {
                        method: 'DELETE',
                    });
                    const data = await res.json();

                    if (data.deletedCount > 0) {
                        
                        Swal.fire(
                            "ডিলিট হয়েছে!",
                            
                            "success"
                        );
                        setMyCrops(myCrops.filter(crop => crop._id !== cropId));
                    }
                } catch (error) {
                    Swal.fire("Error!", "কিছু একটা সমস্যা হয়েছে।", error.message);
                }
            }
        });
    };

    return (
       
        <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-6">
            {userCrops.length === 0 ? (
                <p className="text-center col-span-3 text-gray-500">
                    You haven't added any crops yet.
                </p>
            ) : (
                userCrops.map(crop => (
                    <div key={crop._id} className=" card shadow-lg rounded-lg p-4 bg-white">
                        <img src={crop.image} alt="please try again" className="rounded-lg w-98 h-65" />
                        <h3 className="text-lg font-bold mt-2">{crop.name}</h3>
                        <p className="text-sm text-gray-600">{crop.location}</p>
                        <p className="font-semibold text-green-600 mt-1">
                            Price:{crop.pricePerUnit} unit:{crop.unit} 
                        </p> 

                        <div className=" flex justify-between">
                            <button
                                className="btn bg-green-500 text-white"
                                onClick={() => {
                                    setSelectedCrop(crop);
                                    document.getElementById('my_modal_2').showModal();
                                }}
                            >  Update  </button>
                            
                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box"> 
                                    {selectedCrop && <Modal crop={selectedCrop} onUpdate></Modal>}
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog> 

                            <button 
                                className='btn bg-red-500 text-white' 
                                onClick={()=>handleDelete(crop._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default My_post;