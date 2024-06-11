import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function Swipers() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/set-started.png" alt="" />
          <h1 className="text-get-started">
            You don't feel like going grocery shopping.
          </h1>
          <button className="button-get-started">Get started</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/get-started-2nd.jpg" alt="" />
          <h1 className="text-get-started">
            You don't feel like going grocery shopping.
          </h1>
          <button className="button-get-started">Get started</button>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
