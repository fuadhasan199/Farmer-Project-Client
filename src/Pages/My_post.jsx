import React, {  useContext, useState, } from 'react';
import { CropContext } from './CropProvider';
import { AuthContext } from './AuthContext';
import Modal from './Modal';

const My_post = () => { 

const {myCrops}=useContext(CropContext) 

const {user}=useContext(AuthContext) 

const [selectedCrop,setSelectedCrop]=useState(null)

const userCrops=myCrops.filter(crop=>crop.userEmail ===user.email)

    return (
   <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-6">
      {userCrops.length === 0 ? (
        <p className="text-center col-span-3 text-gray-500">
          You haven't added any crops yet.
        </p>
      ) : (
        userCrops.map(crop => (
          <div key={crop._id} className="shadow-lg rounded-lg p-4 bg-white">
            <img src={crop.image} alt="please try again" className="rounded-lg" />
            <h3 className="text-lg font-bold mt-2">{crop.name}</h3>
            <p className="text-sm text-gray-600">{crop.location}</p>
            <p className="font-semibold text-green-600 mt-1">
              Price:{crop.pricePerUnit}  unit:{crop.unit} 
            </p> 

          <div className=" flex justify-between">

         
 <button
                className="btn bg-green-500 text-white"
                onClick={() => {
                  setSelectedCrop(crop);
                  document.getElementById('my_modal_2').showModal();
                }}
              >   Update   </button>
              
            
   
<dialog id="my_modal_2" className="modal">
  <div className="modal-box"> 
     {selectedCrop && <Modal crop={selectedCrop} onUpdate></Modal>}
  
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog> 

<button className='btn bg-red-500 text-white'>Delete</button>

 </div>





          </div>
        ))
      )}
    </div>
    );
};

export default My_post;