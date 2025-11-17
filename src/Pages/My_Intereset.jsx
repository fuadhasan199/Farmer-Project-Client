import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

const My_Intereset = () => { 
 
    const {user}=useContext(AuthContext)
    
    const [interest,setInterest]=useState([]) 

      const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null); 

  const [sortBy, setSortBy] = useState('createdDesc');   

   useEffect(()=>{

   if(!user || !user.email ){
    setInterest([])
     setLoading(false);
      return;
   } 
      setLoading(true);
    setError(null); 


    fetch(`http://localhost:5000/My_Interest?userEmail=${encodeURIComponent(user.email)}`) 
    .then(res=>res.json())
    .then(data=>setInterest(data))

},[user]) 

 const sorted = [...interest].sort((a, b) => {
    if (sortBy === 'createdDesc') return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
    if (sortBy === 'createdAsc') return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
    if (sortBy === 'status') return (a.status || '').localeCompare(b.status || '');
    return 0;
  });




    return (
        <div className="p-5 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">My Interests</h2>

        <div className="flex items-center justify-between mb-4">
          <div>
            <label className="mr-2">Sort by:</label>
            <select
              className="border rounded p-1"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="createdDesc">Newest first</option>
              <option value="createdAsc">Oldest first</option>
              <option value="status">Status (A→Z)</option>
            </select>
          </div>
          <div>
            <span className="text-sm text-gray-600">Total: {interest.length}</span>
          </div>
        </div>

        {loading && (
          <div className="p-6 bg-white rounded shadow text-center">Loading...</div>
        )}

        {error && (
          <div className="p-4 bg-red-100 text-red-700 rounded mb-4">
            Error: {error}
          </div>
        )}

        {!loading && !error && sorted.length === 0 && (
          <div className="p-6 bg-white rounded shadow text-center">
            আপনি যেটুকু আগ্রহ দেখিয়েছেন তাদের কোন রেকর্ড পাওয়া যায়নি।
          </div>
        )}

        {!loading && !error && sorted.length > 0 && (
          <div className="overflow-x-auto bg-white rounded shadow">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left">Crop</th>
                  <th className="px-4 py-2 text-left">Owner</th>
                  <th className="px-4 py-2 text-left">Quantity</th>
                  <th className="px-4 py-2 text-left">Message</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map(item => (
                  <tr key={item.interestId} className="border-t">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <img src={item.cropImage} alt={item.cropName} className="w-12 h-12 rounded object-cover" />
                        <Link to={`/Details/${item.cropId}`} className="font-semibold hover:underline">
                          {item.cropName}
                        </Link>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div>{item.cropOwner?.ownerName || item.cropOwner?.ownerEmail}</div>
                    </td>
                    <td className="px-4 py-3">{item.quantity}</td>
                    <td className="px-4 py-3 max-w-xs truncate">{item.message}</td>
                    <td className="px-4 py-3">
                      <span className={
                        `px-2 py-1 rounded text-sm ${
                          item.status === 'accepted' ? 'bg-green-100 text-green-800' :
                          item.status === 'rejected' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`
                      }>
                        {item.status || 'pending'}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                     

                     
                      {item.status === 'pending' ? (
                        <button
                          onClick={() => {
                            
                            if (!window.confirm('আপনি কি এই interest বাতিল করতে চান?')) return;
                            fetch(`http://localhost:5000/interests/${item.interestId}`, {
                              method: 'DELETE'
                            }).then(res => {
                              if (res.ok) {
                                setInterest(prev => prev.filter(x => x.interestId !== item.interestId));
                              }
                            }).catch(err => console.error(err));
                          }}
                          className="text-sm px-2 py-1 border rounded"
                        >
                          Cancel
                        </button>
                      ) : (
                        <span className="text-sm text-gray-500">No actions</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
    );
};

export default My_Intereset;