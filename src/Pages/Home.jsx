import React from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; 
import { FaArrowRight } from "react-icons/fa6";
// import { GoogleFontLoader } from 'react-google-fonts';
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
    Cards.slice(-6).map((card)=>( 

     <div key={card._id} className="card  w-full shadow-sm bg-gray-200 ">
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

                  <h1 className='text-center mt-10 text-4xl font-bold'>Latest Newes & Insights </h1> 



          <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-10'> 



 <div className="card card-side bg-base-80 shadow-sm">
  <figure>
    <img
      src="https://i.ibb.co.com/XkMPYPj7/poramosso.jpg" className='p-1 rounded-xl'
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">সরকারি পরামর্শ</h2>
    <p>সরকারি আধুনিক কৃষি পরামর্শে রহিম সাহেবের সরিষার বাম্পার ফলন</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">আরো পড়ুন

      </button>
    </div>
  </div>
</div>  




<div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src="https://i.ibb.co.com/PZ9qgpZN/tructor.jpg" className='rounded-xl p-1'
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">আধুনিক যন্ত্র</h2>
    <p>ট্রাক্টর দিয়ে হাল চাষ করে পরাগ সাহেব আগের চেয়ে অনেক দ্রুত চাষের জমি প্রস্তুত করতে পারছেন</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"> আরো পড়ুন
         </button>
    </div>
  </div>
</div>  





<div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src="https://i.ibb.co.com/dsCrr4rY/dhan.jpg"className='max-w-[550px] p-1 rounded-xl '
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">সঠিক সার প্রয়োগ</h2>
    <p>সরকারি পরামর্শে কীটনাশক প্রয়োগ করে এবার
        ফুয়াদ সাহেব পোকা-মাকড়ের হাত থেকে ফসল রক্ষা করেছেন </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">আরো পড়ুন </button>
    </div>
  </div>
</div>


 </div>     

 


     <h1 className='text-center text-5xl font-bold mt-10'>Our Star Farmers </h1>

 

 <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">

 <div className="card bg-base-100 max-w-80 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co.com/Hfw9NVNv/photo-1737279258288-d13fefb528a3-ixlib-rb-4-1.jpg"
      alt=""
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">রাশেদুল ইসলাম</h2>
    <p>২০২৫ সালের সেরা সবজি উৎপাদক</p>
    <div className="card-actions">
      <button className="btn btn-primary">জৈব সবজি চাষ"</button>
    </div>
  </div>
</div> 



<div className="card bg-base-100 max-w-80  shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co.com/6JFsR53G/photo-1744742427348-dfa786ffad9c-ixlib-rb-4-1.jpg"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">মৌসুমি আক্তার</h2>
    <p>১০ একর জমিতে নতুন প্রযুক্তির ব্যবহার</p>
    <div className="card-actions">
      <button className="btn btn-primary">ধান ও ফল চাষ</button>
    </div>
  </div>
</div> 



<div className="card bg-base-100 max-w-80  shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co.com/S7G3F6Tw/photo-1630390077969-abc328259b00-ixlib-rb-4-1.jpg"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">রবিউল করিম</h2>
    <p>স্থানীয় বাজারে ২০০+ ক্রেতা যুক্ত</p>
    <div className="card-actions">
      <button className="btn btn-primary">আম ও সবজি চাষ</button>
    </div>
  </div>
</div>


 {/* How it Works Section */} 

  <div className="  mt-10 "> 
  <h1 className="text-3xl font-bold text-center "> এটি  কিভাবে কাজ করে</h1> 
    <div className="text-center mt-1 ">  
        <h3 className="text-xl font-semibold mt-5">একাউন্ট তৈরি</h3> 
        <div className="mt-5 font-light"> 
          <ul>
            <li># সহজ রেজিস্ট্রেশন</li>
            <li># ইমেইল বা গুগল লগইন</li>
            <li># নিরাপদ ইউজার প্রোফাইল</li>
          </ul>
        </div>
    </div>  



         <div className="text-center mt-1 ">  
        <h3 className="text-xl font-semibold mt-5">ফসল লিস্টিং</h3> 
        <div className="mt-5 font-light "> 
          <ul>
            <li># ফসলের ছবি আপলোড</li>
            <li># দাম ও পরিমাণ উল্লেখ</li>
            <li># লোকেশন যোগ</li>
          </ul>
        </div>
    </div> 



             <div className="text-center mt-1 ">  
        <h3 className="text-xl font-semibold mt-5">আগ্রহ পাঠান</h3> 
        <div className="mt-5 font-light "> 
          <ul>
            <li># পছন্দের ফসলে ইন্টারেস্ট</li>
            <li># পরিমাণ উল্লেখ</li>
            <li># বার্তা পাঠানো সুবিধা</li>
          </ul>
        </div>
    </div>  


                 <div className="text-center mt-1 ">  
        <h3 className="text-xl font-semibold mt-5">সরাসরি লেনদেন</h3> 
        <div className="mt-5 font-light "> 
          <ul>
            <li># পবিক্রেতা একসেপ্ট করে</li>
            <li># সরাসরি যোগাযোগ</li>
            <li># দালাল ছাড়া কেনাবেচা</li>
          </ul>
        </div>
    </div>






   
   
   
   <h3 className="text-xl font-semibold mt-2"></h3>





  </div>
   






 </div>  

 <div className="min-h-screen flex items-center justify-center bg-gray-50">
  <div className="w-full max-w-2xl bg-blue-300 p-6 text-center rounded-lg shadow">
    <h1 className="text-2xl font-bold mb-4">Pro Farmer Insights</h1>
    <p className="mb-2">👉 কম পানি ব্যবহার করে বেশি ফলন পাওয়ার সবচেয়ে কার্যকর উপায় হলো ড্রিপ ইরিগেশন।</p>
    <p className="mb-2">👉 মাটির পিএইচ, আর্দ্রতা ও পুষ্টিগুণ নির্ণয় করো।</p>
    <p className="mb-2">👉 স্থানীয় আবহাওয়ার সঙ্গে মানানসই ফসল বেছে নাও।</p>
    <p className="mb-2">👉 রাসায়নিক সার কমিয়ে গোবর বা কম্পোস্ট সার ব্যবহার করো।</p>
    <p className="mb-2">👉 নিয়মিত আবহাওয়া অ্যাপ বা কৃষি তথ্য সাইট চেক করো।</p>
    <p className="mb-0">👉 বাজারের বর্তমান দামের তথ্য জানো। সঠিক সময় বিক্রি করলে মুনাফা বাড়ে।</p>
  </div>
</div>
 












        </div> 
    );
};

export default Home;