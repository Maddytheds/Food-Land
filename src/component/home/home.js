import React from 'react';
import Swipers from '../Swiper Slider/get-started-swiper';
import './home.css';
import Services from '../services-card/services-card';
import NavigationBar from '../../component/navigation-bar/navigationBar';
// import Sliders from '../popular-r ecipe/sliders';
export default function Home() {
  return (
    <div className="home-container">
      <NavigationBar />
      <div>
        <Swipers />
        <div className="services">
          <p> -Our Services-</p>
          <h3>Our best services for you</h3>
        </div>
        <div>
          <Services />
        </div>
      </div>
    </div>
  );
}
