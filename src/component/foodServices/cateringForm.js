import emailjs from '@emailjs/browser';
export default function CateringForm() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_427qaji',
      'template_pyeknq9',
      e.target,
      'JMmb3izo1Q_u5qjgf'
    );
  };

  return (
    <div className="cateringForm">
      <form onSubmit={sendEmail}>
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
            <input
              type="number"
              name="phNumber"
              placeholder="03123456789"
              id="phNumber"
            />
          </div>
          <div className="cateringDate">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              //  onChange={handleChange}
            />
          </div>
          <div className="homeCookNumber">
            <label htmlFor="eventType">Event Type</label>
            <input
              type="text"
              name="eventType"
              placeholder="e.g party, wedding"
              id="phNumber"
            />
          </div>
        </div>
        <div className="cateringDescription">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button type="submit">Order Now</button>
      </form>
    </div>
  );
}
