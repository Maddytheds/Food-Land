import { useState } from 'react';
import './orderSearch.css';

export default function OrderSearch({ setFilterValue, foodItems }) {
  const [toggle, setToggle] = useState(false);
  // console.log('this is prop', foodItems);

  function itHandleClicks(e) {
    e.preventDefault();
    const val = e.currentTarget.getAttribute('data-value');
    setFilterValue(val);
    // console.log(`category: ${val}`);
  }

  return (
    <div className="orderFilter">
      <div className="searchAccordion">
        {/* <div className="orderSearch">
          <form action="">
            <input type="text" placeholder="Search" />
          </form>
        </div> */}
        <div className="orderDropdown">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white bg-[#F7BC00] hover:bg-[#F7BC08] font-medium rounded-t-2xl text-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-[#F7BC00] dark:hover:bg-[#F7BC00] w-[100%] h-[70px]"
            type="button"
            onClick={() => setToggle(!toggle)}
          >
            Category
          </button>

          <div
            id="dropdown"
            className={`z-10 ${toggle ? 'block' : 'block'} bg-white divide-y divide-gray-100 rounded-b-2xl shadow w- dark:bg-[#FFFFFF]`}
          >
            <ul
              className="py-2 text-[18px] font-medium text-[#000000] dark:text-[#000000] h-[100%] flex flex-col gap-4"
              aria-labelledby="dropdownDefaultButton"
            >
              <li onClick={itHandleClicks} data-value="Starters">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                >
                  {' '}
                  {/* Add href="#" */}
                  Starters
                </a>
              </li>
              <li onClick={itHandleClicks} data-value="Resistors">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                >
                  {' '}
                  {/* Add href="#" */}
                  Resistors
                </a>
              </li>
              <li onClick={itHandleClicks} data-value="Patisseries">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                >
                  {' '}
                  {/* Add href="#" */}
                  Patisseries
                </a>
              </li>
              <li onClick={itHandleClicks} data-value="Garnitures">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                >
                  {' '}
                  {/* Add href="#" */}
                  Garnitures
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="orderImg"></div>
    </div>
  );
}
