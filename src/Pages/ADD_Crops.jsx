import React from 'react';

const ADD_Crops = () => {
    return ( 
        <div className="container mx-auto mt-1 mb-20">  
         <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
          Add New Crop
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Crop Name</label>
            <input
              type="text"
              placeholder="Enter crop name"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Type</label>
            <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400">
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
                type="number"
                placeholder="e.g. 55"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Unit</label>
              <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400">
                <option value="">Select unit</option>
                <option>kg</option>
                <option>ton</option>
                <option>bag</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Estimated Quantity</label>
            <input
              type="number"
              placeholder="Enter quantity"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              placeholder="Short details about the crop"
              rows="3"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>

          <div>
            <label className="block font-medium mb-1">Location</label>
            <input
              type="text"
              placeholder="e.g. Bogura"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Image URL</label>
            <input
              type="text"
              placeholder="Enter image link"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold"
          >
            Add Crop
          </button>
        </form>
      </div>
    </div> 
        </div>
    );
};

export default ADD_Crops;