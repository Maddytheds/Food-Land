import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './food.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function FoodSlider() {
  const slides = [
    {
      id: 1,
      src: '/popular foods/img-1.jpg',
      price: '20$',
      rating: '4',
      name: 'Chicken',
    },
    {
      id: 2,
      src: '/popular foods/img-2.jpg',
      price: '30$',
      rating: '4',
      name: 'Burger',
    },
    {
      id: 3,
      src: '/popular foods/img-3.jpg',
      price: '15$',
      rating: '4',
      name: 'Steak',
    },
    {
      id: 4,
      src: '/popular foods/img-4.jpg',
      price: '10$',
      rating: '4',
      name: 'Waffle',
    },
    {
      id: 5,
      src: '/popular foods/img-5.jpg',
      price: '23$',
      rating: '4',
      name: 'Half Fry Egg',
    },
    {
      id: 6,
      src: '/popular foods/img-6.jpg',
      price: '22$',
      rating: '4',
      name: 'Daal',
    },
    {
      id: 7,
      src: '/popular foods/img-7.jpg',
      price: '18$',
      rating: '4',
      name: 'Haleem',
    },
  ];

  return (
    <div className="pop-res-app">
      <h1>-Popular Recipes-</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 4,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={true}
        className="popular-Swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="recipe_card">
              <img src={slide.src} alt={`Slide ${slide.id}`} />
              <div className="overlay"></div>
              <p className="price">{slide.price}</p>
              <div className="rating">
                <h5 className="name">{slide.name}</h5>
                <div className="rating_box">
                  <span>5</span>
                  <div>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
