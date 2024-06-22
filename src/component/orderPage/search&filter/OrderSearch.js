import { useState } from 'react';
import './orderSearch.css';
export default function OrderSearch() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="orderFilter">
      <div className="searchAccordion">
        <div className="orderSearch">
          <form action="">
            <input type="text" placeholder="Search" />
          </form>
        </div>
        <div className="orderDropdown">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            class="text-white bg-[#F7BC00] hover:bg-[#F7BC08] font-medium rounded-t-2xl text-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-[#F7BC00] dark:hover:bg-[#F7BC00] w-[100%] h-[70px] "
            type="button"
            onClick={() => setToggle(!toggle)}
          >
            Category{' '}
          </button>

          <div
            id="dropdown"
            class={`z-10 ${toggle ? 'block' : 'block'} bg-white divide-y divide-gray-100 rounded-b-2xl shadow w- dark:bg-[#FFFFFF] `}
          >
            <ul
              class="py-2 text-[18px]  font-medium text-[#000000] dark:text-[#000000] h-[100%] flex flex-col gap-4"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="/order/category"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                >
                  Starters
                </a>
              </li>
              <li>
                <a
                  href="/order/category"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                >
                  Resistors
                </a>
              </li>
              <li>
                <a
                  href="/order/category"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                >
                  Patisseries
                </a>
              </li>
              <li>
                <a
                  href="/order/category"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                >
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
