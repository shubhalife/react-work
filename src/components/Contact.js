import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        Have a question or feedback? We’d love to hear from you! 💌
      </p>

      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>📍 123 Foodie Street, Mumbai, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ support@fooddelivery.com</p>

          <div className="social-links">
            <a href="#">🌐 Facebook</a>
            <a href="#">📸 Instagram</a>
            <a href="#">🐦 Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
