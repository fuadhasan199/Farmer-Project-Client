import React, { useState } from 'react';

const Modal = ({ crop }) => { 
    
  const [updatedCrop, setUpdatedCrop] = useState({ ...crop });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCrop({ ...updatedCrop, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`https://farmers-api-omega.vercel.app/farmers/${crop._id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updatedCrop),
    })
      .then(res => res.json())
      .then(data => {
       
        document.getElementById('my_modal_2').close();
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleUpdate} className="space-y-4">
      <h2 className="text-xl font-bold text-center mb-3">Update Crop</h2>

      <input
        type="text"
        name="name" placeholder='name'
        value={updatedCrop.name}
        onChange={handleChange}
        className="w-full border rounded-lg px-3 py-2"
      />

      <input
        type="text"
        name="location" placeholder='location'
        value={updatedCrop.location}
        onChange={handleChange}
        className="w-full border rounded-lg px-3 py-2"
      />

      <input
        type="number"
        name="pricePerUnit" placeholder='pricePerunit'
        value={updatedCrop.pricePerUnit}
        onChange={handleChange}
        className="w-full border rounded-lg px-3 py-2"
      />

      <textarea
        name="description" placeholder='desciption'
        value={updatedCrop.description}
        onChange={handleChange}
        className="w-full border rounded-lg px-3 py-2"
      />

      <button  type="submit"  className="w-full bg-green-600 text-white py-2 rounded-lg
       
        hover:bg-green-700 transition-all duration-300 font-semibold" >
     
        Save Changes
      </button>
    </form>
  );
};

export default Modal;
