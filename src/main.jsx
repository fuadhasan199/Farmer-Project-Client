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
import Details from './Pages/Details.jsx'
import AuthProvider from './Pages/AuthProvider.jsx'
import SignUp from './Sign/SignUp.jsx'
import SignIn from './Sign/SignIn.jsx'
import Private from './Private.jsx'
import CropProvider from './Pages/CropProvider.jsx'
import Modal from './Pages/Modal.jsx'


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
          element:<All_Crops></All_Crops>,
          loader:()=>fetch('http://localhost:5000/farmers')
        } ,

        {
          path:'/Profile',
          element:<Profile></Profile>
        } ,

        {
          path:'/Add-Crops',
          element: <Private> <ADD_Crops></ADD_Crops> </Private>  ,      
        } ,
        {
          path:"/My-Post",
          element: <Private> <My_post></My_post>   </Private>   
        } ,
        {
          path:'/My-interest',
          element:<Private> <My_Intereset></My_Intereset></Private>       
        },
        {

      
        path:'/Details/:id', 
       element:<Private><Details></Details> </Private>,
        loader:({params})=>fetch(`http://localhost:5000/farmers/${params.id}`)

          } ,
          { 
            path:'/Sign-Up',
            element:<SignUp></SignUp> 
          } 
          ,
          {
            path:'/Sign-In', 
            element:<SignIn></SignIn>
          }, 
          {

          path:'/Modal/:id',
          element:<Modal></Modal>,
      
          loader:({params})=>fetch(`http://localhost:5000/farmers/${params.id}`)
    },


     ])
   }
])

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <AuthProvider>  
      <CropProvider>
<RouterProvider router={router}></RouterProvider>
      </CropProvider>
 
    </AuthProvider>
   
  </StrictMode>,
)
