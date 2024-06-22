import React from 'react';

export default function CateringForm() {
  return (
    <div className="cateringForm">
      <form action="">
        <div className="cateringInput">
          <div className="cateringName">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="cateringAddr">
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" />
          </div>
          <div className="cateringNumber">
            <label htmlFor="phNumber">Whatsapp Number</label>
            <input type="number" name="phNumber" id="phNumber" />
          </div>
          <div className="cateringDate">
            <label htmlFor="date">Date</label>
            <input type="date" name="date" id="date" />
          </div>
        </div>
        <div className="cateringDescription">
          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="description" />
        </div>
        <button>Order Now</button>
      </form>
    </div>
  );
}
