import "./About.css";
import { BURGER_IMAGE } from "../utils/constants";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-subtitle">
        Delivering happiness, one meal at a time 🍴
      </p>

      <div className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            We are a passionate food delivery platform bringing your favorite
            meals from local restaurants straight to your doorstep. Our mission
            is to connect people with the best food around them—fast, fresh, and
            reliable.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>🚀 Super-fast delivery</li>
            <li>🥗 Wide variety of cuisines</li>
            <li>💳 Easy & secure payments</li>
            <li>📍 Real-time order tracking</li>
          </ul>
        </div>

        <div className="about-image">
          <img src={BURGER_IMAGE} alt="Food Delivery" />
        </div>
      </div>
    </div>
  );
};

export default About;
