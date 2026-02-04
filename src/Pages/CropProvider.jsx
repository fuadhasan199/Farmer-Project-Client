import React, { createContext, useEffect, useState } from 'react'; 




 export const CropContext=createContext(null)

const CropProvider = ({children}) => { 

const [myCrops,setMyCrops]=useState([]) 

useEffect(()=>{
 
 fetch('https://farmers-api-omega.vercel.app/farmers') 
 .then(res=>res.json())
 .then(data=>setMyCrops(data))


},[])




    return (
       <CropContext value={{myCrops,setMyCrops}}>
        {children}
       </CropContext>
    );
};

export default CropProvider;