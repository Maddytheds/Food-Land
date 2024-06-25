import { useEffect, useState } from 'react';
import FoodItems from './foodItem/foodItems';
import './orderPage.css';
import OrderSearch from './search&filter/OrderSearch.js';
import axios from 'axios';

export default function OrderPage() {
  const [foodItems, setFoodItems] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  // console.log(foodItems);
  const filterFoodData = foodItems.filter((e) => e?.category === filterValue);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/food');
        setFoodItems(response.data);
      } catch (error) {
        console.error('Error fetching food items:', error);
      }
    };

    fetchFoodItems();
  }, []);

  return (
    <>
      <div className="orderPageContainer">
        <div>
          <div className="orderHeading">
            <img src="/orderPage/Rectangle 75.svg" alt="" />
            <h1>Our special selections</h1>
          </div>
        </div>
        <div>
          <OrderSearch
            setFilterValue={setFilterValue}
            setFoodItem={foodItems}
          />
        </div>
        <div className="foodItemsList">
          <FoodItems filterFoodData={filterFoodData} />
        </div>
      </div>
    </>
  );
}
