import React from 'react';
import './foodItems.css';
import { Link } from 'react-router-dom'; // Import Link

export default function FoodItems({ filterFoodData }) {
  return (
    <div className="foodItemsContainer">
      <div className="foodItemsDiv">
        {filterFoodData.map((item, index) => (
          <Link to={`/order/${item.id}`} id={index} className="foodItems">
            <img src={item.img} alt={item.name} />
            <div className="ratingFoodItems">
              <h1>{item.name}</h1>
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
