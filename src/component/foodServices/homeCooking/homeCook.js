import './homeCook.css';
import emailjs from '@emailjs/browser';
export default function HomeCookForm() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_427qaji',
      'template_pyeknq9',
      e.target,
      'JMmb3izo1Q_u5qjgf'
    );
    console.log();
  };

  return (
    <div>
      <div className="cateringHeading">
        <img src="/foodServices/catering.png" alt="" />
        <h1>Home Cooking Service</h1>
      </div>
      <div className="homeCookForm">
        <form onSubmit={sendEmail}>
          <div className="homeCookInput">
            <div className="homeCookName">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                // onChange={handleChange}
              />
            </div>
            <div className="homeCookAddr">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                // onChange={handleChange}
              />
            </div>
            <div className="homeCookNumber">
              <label htmlFor="phNumber">Whatsapp Number</label>
              <input
                type="number"
                name="phNumber"
                placeholder="03123456789"
                // onChange={handleChange}
                id="phNumber"
              />
            </div>
            <div className="homeCookDate">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                id="date"
                //  onChange={handleChange}
              />
            </div>
          </div>
          <div className="homeCookDescription">
            <label htmlFor="description">Description</label>
            <textarea
              // onChange={handleChange}
              name="description"
              id="description"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button type="submit">Order Now</button>
        </form>
      </div>
    </div>
  );
}
