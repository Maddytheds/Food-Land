import FoodItems from './foodItem/foodItems';
import './orderPage.css';
// import OrderSearch from './search&filter/orderSearch';
import OrderSearch from './search&filter/OrderSearch.js';
// import OrderSearch from './search&filter/OrderSearch.js';

export default function OrderPage() {
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
          <OrderSearch />
        </div>
        <div className="foodItemsList">
          <FoodItems />
        </div>
      </div>
    </>
  );
}
