import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
import { createBrowserRouter, RouterProvider } from 'react-router'
import Mainlayout from './Layout/Mainlayout.jsx'
import Home from './Pages/Home.jsx'
import All_Crops from './Pages/All_Crops.jsx'
import Profile from './Pages/Profile.jsx'
import ADD_Crops from './Pages/ADD_Crops.jsx'
import My_post from './Pages/My_post.jsx'
import My_Intereset from './Pages/My_Intereset.jsx'

const router=createBrowserRouter([
   {
    path:"/",

     element:<Mainlayout></Mainlayout> ,
     children :([
      
        {
          index:"true",
          element:<Home></Home> ,
          loader:()=>fetch('http://localhost:5000/farmers')
          
        } ,
        {
          path:'/All-Crops',
          element:<All_Crops></All_Crops>
        } ,

        {
          path:'/Profile',
          element:<Profile></Profile>
        } ,

        {
          path:'/Add-Crops',
          element:<ADD_Crops></ADD_Crops>
        } ,
        {
          path:"/My-Post",
          element:<My_post></My_post>   
        } ,
        {
          path:'/My-interest',
          element:<My_Intereset></My_Intereset>
        }


     ])
   }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
