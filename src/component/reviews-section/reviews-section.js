import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './reviews-section.css';
import { Pagination } from 'swiper/modules';

export default function ReviewSection() {
  const reviews = [
    {
      name: 'Erick Smith',
      role: 'Food Vlogger',
      picture: '/reviewer pics/Erick Smith.jpg',
      text: 'All service provided is so perfect and fast, and im so happy to order from this company',
      rating: 5.0,
    },
    {
      name: 'Muhammad Faizan',
      role: 'Web Developer',
      picture: '/reviewer pics/faizan.jpeg',
      text: 'Amazing experience! Highly recommend this service to everyone.',
      rating: 4.5,
    },
    {
      name: 'Farhan Aslam',
      role: 'Software Engineer',
      picture: '/reviewer pics/farhan.jpeg',
      text: 'Great service and quick delivery. Will definitely use again.',
      rating: 4,
    },
  ];

  return (
    <>
      <h1>What do they say about us?</h1>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="review-swiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="reviews">
              <div className="reviewer-profile">
                <div className="reviewer-pic">
                  <img src={review.picture} alt={`${review.name}`} />
                </div>
                <div className="reviewer-name">
                  <h3>{review.name}</h3>
                  <p>{review.role}</p>
                </div>
              </div>
              <div className="review-text">
                <p>"{review.text}"</p>
              </div>
              <div className="review-rating">
                <span>{review.rating.toFixed(1)}</span>
                <div className="star-review">
                  {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                  {review.rating % 1 !== 0 && (
                    <i className="fa-solid fa-star-half"></i>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
