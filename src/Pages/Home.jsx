import React from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; 

import kata from '../assets/kata.jpg'; 
import kodal from '../assets/kodal.jpg';
import Ropon from '../assets/Ropon.jpg';
import smaile from '../assets/Smile.jpg';
import sorisa from '../assets/sorisa.jpg';


import 'swiper/css'; 

const Home = () => {
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





        </div>
    );
};

export default Home;