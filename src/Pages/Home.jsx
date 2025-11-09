import React from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; 
import { FaArrowRight } from "react-icons/fa6";

import kata from '../assets/kata.jpg'; 
import kodal from '../assets/kodal.jpg';
import Ropon from '../assets/Ropon.jpg';
import smaile from '../assets/Smile.jpg';
import sorisa from '../assets/sorisa.jpg';


import 'swiper/css'; 
import { Navigate, NavLink, useLoaderData, useNavigate } from 'react-router';

const Home = () => { 

 const Cards=useLoaderData()
 console.log(Cards) 

 const navigate=useNavigate()

    return (
        <div className='container mx-auto p-5 mb-20 bg-gray-100 '>
            <h1 className='text-2xl font-light'>Farming for <span className='text-3xl font-bold text-gray-600 '>Today </span> <br /><div className=""> </div>and the <span className='text-3xl font-bold text-gray-600 '>Future</span> </h1>  

 <Swiper
  modules={[Autoplay, Pagination, Navigation]}
  spaceBetween={30}
  slidesPerView={1}
  autoplay={{ delay: 3000 }}  
  pagination={{ clickable: true }}

  className="mySwiper mt-5 "
>
  <SwiperSlide>
    <div className="hero-slide">
      <img src={kata} alt="Crop 1" className='rounded-3xl max-h-[450px] flex mx-auto'/>
      <div className="hero-text">
        <h1 className='text-3xl text-center'>ফসল কাটছেন একজন কৃষক</h1>
        <p className='mt-2'>একজন কৃষক কাস্তে হাতে পাকা ধান কেটে ঘরে তুলছেন—তার পরিশ্রমে ভরে উঠছে গোলা, আর মাঠে প্রতিধ্বনিত হচ্ছে ফসল তোলার আনন্দঘন সুর।
</p>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide> 


     <div className="hero-slide ">
      <img src={kodal} alt="Crop 1" className='rounded-3xl max-h-[450px] flex mx-auto ' />
      <div className="hero-text text-center mt-2">
        <h1 className='text-3xl'>জমির চাষাবাদের জন্য প্রস্তুত করছেন একজন কৃষক </h1>
        <p className='mt-2'>একজন কৃষক মাঠে জমি চাষের জন্য মাটি ঝরঝরে করছেন, আগাছা পরিষ্কার করছেন এবং হাল দিয়ে মাটিকে উর্বর ও সমতল করে ফসল রোপণের উপযুক্ত পরিবেশ তৈরি করছেন।
</p>
      </div>
    </div>
   
  </SwiperSlide> 


    <SwiperSlide> 


     <div className="hero-slide">
      <img src={Ropon} alt="Crop 1" className='rounded-3xl max-h-[450px] flex mx-auto' />
      <div className="hero-text text-center mt-2">
        <h1 className='text-3xl'>চাষের জন্য চাড়া রোপন করছেন একজন কৃষক </h1>
        <p className='mt-2'>একজন কৃষক পরিশ্রম করে প্রস্তুত করা জমিতে সবজির চারা যত্ন সহকারে রোপণ করছেন, যাতে ভালোভাবে বেড়ে উঠে সমৃদ্ধ ফসল ফলানো যায়।
</p>
      </div>
    </div>
   
  </SwiperSlide> 


    <SwiperSlide> 


     <div className="hero-slide">
      <img src={smaile} alt="Crop 1" className='rounded-3xl max-h-[450px] flex mx-auto'/>
      <div className="hero-text text-center mt-2">
        <h1 className='text-3xl'>কৃষকের মুখে হাসি</h1>
        <p className='mt-2'>পরিশ্রমের ফল দেখে কৃষকের মুখে ফুটে উঠেছে তৃপ্তির হাসি—তার ঘামে সেচ দেওয়া জমি এখন সবুজ ফসলে ভরে উঠেছে, যা তার আশা ও পরিশ্রমের প্রতীক।
</p>
      </div>
    </div>
   
  </SwiperSlide> 



    <SwiperSlide> 


     <div className="hero-slide">
      <img src={sorisa} alt="Crop 1" className='rounded-3xl max-h-[450px] flex mx-auto' />
      <div className="hero-text text-center mt-2">
        <h1 className='text-3xl'>সরিষার বাম্পার ফলন </h1>
        <p className='mt-2'>ক্ষেতে সোনালি রঙে ঝলমল করছে সরিষার বাম্পার ফলন—হালকা বাতাসে দুলছে ফুলে ভরা গাছগুলো, প্রকৃতির সৌন্দর্যে ভরে উঠেছে পুরো মাঠ।
      </p>
      </div>
    </div>
   
  </SwiperSlide>

</Swiper>   

<h1 className='text-gray-400 text-center text-5xl mt-8 font-bold'>Explore Crops</h1> 
   

 <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-3 m-2 ">

   {
    Cards.slice(0,6).map((card)=>( 

     <div className="card  w-full shadow-sm bg-gray-200 ">
  <figure>
    <img
      src={card.image} className='max-h-[180px] max-w-[280px] m-2 rounded-4xl '
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {card.name}
      <div className="badge badge-secondary">{card.type}</div>
    </h2>
    <p>{card.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline text-green-800 font-bold bg-green-100">{card.location}</div>
      <div className="badge badge-outline bg-green-100 text-green-700 font-bold">{card.pricePerUnit} tk</div>
    </div>
  </div>
</div>





    ))
 }

 

 </div>



 

  <button className='btn mt-5 flex mx-auto p-6 bg-pink-400 rounded-md' onClick={()=>navigate('/All-Crops')}>View ALL  <FaArrowRight />   </button>



        </div>
    );
};

export default Home;