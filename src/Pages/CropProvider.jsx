import React, { createContext, useEffect, useState } from 'react'; 




 export const CropContext=createContext(null)

const CropProvider = ({children}) => { 

const [myCrops,setMyCrops]=useState([]) 

useEffect(()=>{
 
 fetch('http://localhost:5000/farmers') 
 .then(res=>res.json())
 .then(data=>setMyCrops(data))


},[])




    return (
       <CropContext.Provider value={{myCrops,setMyCrops}}>
        {children}
       </CropContext.Provider>
    );
};

export default CropProvider;