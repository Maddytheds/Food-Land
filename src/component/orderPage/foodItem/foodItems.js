import React, { useEffect, useState } from 'react';
import './foodItems.css';
import axios from 'axios';

export default function FoodItems() {
  const [fooditems, setFooditems] = useState([]);

  useEffect(() => {
    const fooditem = async () => {
      try {
        const response = await axios('http://localhost:8000/food');
        setFooditems(response.data);
        console.log(response);
      } catch (error) {
        console.log('error', error);
      }
    };
    fooditem();
  }, []);

  return (
    <div className="foodItemsContainer">
      <div className="foodItemsDiv">
        {fooditems.map((item) => (
          <div key={item.id} className="foodItems">
            <img src={item.img} alt={item.title} />
            <div className="rattingFoodItems">
              <h1>{item.name}</h1>
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
