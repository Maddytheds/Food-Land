import './services-card.css';

export default function Services() {
  return (
    <div className="servies-card-container">
      <div className="services-card">
        <img src="/services-card-1.png" alt="" />
        <h3>Recipes</h3>
        <p>
          Order and have the ingredients and recipe card delivered to you,
          allowing you to cook like a chef... You have the option to order for a
          maximum of 10 people
        </p>
      </div>
      <div className="services-card">
        <img src="/services-card-2.png" alt="" />
        <h3>Cooking at home</h3>
        <p>
          Order and have the ingredients and recipe card delivered to you,
          allowing you to cook like a chef... You have the option to order for a
          maximum of 10 people
        </p>
      </div>
      <div className="services-card">
        <img src="/services-card-3.png" alt="" />
        <h3>Catering service</h3>
        <p>
          Trust us for all your events:
          <br />
          -Wedding
          <br />
          -Birthday
          <br />
          -Graduation
          <br />
          -Coffee breaks
          <br />
          -After work gatherings
          <br />
          <ul></ul>
        </p>
      </div>
    </div>
  );
}
