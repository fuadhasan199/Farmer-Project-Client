import React, {  useContext, } from 'react';
import  { CropContext } from './CropProvider';
import { AuthContext } from './AuthContext';

const ADD_Crops = () => { 

  const {myCrops,setMyCrops}=useContext(CropContext)
  const {user}=useContext(AuthContext)

  const handleSubmit=(e)=>{ 

   
  


         e.preventDefault()
      
         const formData={
            
            name:e.target.name.value,
            type:e.target.type.value,
           pricePerUnit:e.target.pricePerUnit.value,
            unit:e.target.unit.value,  
            quantity:e.target.quantity.value,

            description:e.target.description.value,
            location:e.target.location.value, 

             image:e.target.image.value,
             userEmail: user?.email,      
              userName: user?.displayName  
             
               } 

               fetch('https://farmers-api-omega.vercel.app/farmers',
                {
                    method:'POST',
                    headers:{
                        "content-type":"application/json"
                    }, 
                 body:JSON.stringify(formData)

                } ) 
                .then(res=>res.json())
                .then(data=>{

                   e.target.reset()
                   setMyCrops([...myCrops,data])

                }) 




                .catch(error=>console.log(error))
              
            
              
     }

       
  






    return ( 
        <div className="container mx-auto mt-1 mb-20">  
         <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
          Add New Crop
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium mb-1">Crop Name</label>
            <input
              type="text" 
              name="name"
              placeholder="Enter crop name"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Type</label> 
            <select 
              name="type"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="">Select type</option>
              <option>Vegetable</option>
              <option>Fruit</option>
              <option>Grain</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Price per Unit</label>
              <input
                type="pricePerUnit"
                name="pricePerUnit"
                placeholder="e.g. 55"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Unit</label>
              <select 
                name="unit"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2
                 focus:ring-green-400">
                <option value="">Select unit</option> 
                <option>kg</option>
                <option>ton</option>
                <option>bag</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Quantity</label>
            <input
              type="number"
              name="quantity"
              placeholder="Enter quantity"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              placeholder="Short details about the crop"
              rows="3"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>

          <div>
            <label className="block font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              placeholder="e.g. Bogura"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Image URL</label> 
            <input
              type="text"
              name="image"
              placeholder="Enter image link"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold"  >
        
            Add Crop
          </button>
        </form>
      </div>
    </div> 
        </div>
    );
};

export default ADD_Crops;
