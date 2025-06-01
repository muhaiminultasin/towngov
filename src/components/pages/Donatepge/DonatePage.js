import React, { useState } from "react";
import Header from '../../headerone/Main'
// import shape2 from "../../images/about/shape2.svg";
// import shape3 from "../../images/cta-shap-3.svg";

const DonatePage = () => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    message: "",
  });

  const handleAmountClick = (amount) => {
    setSelectedAmount(`$${amount}`);
  };

  const handleInputChange = (e) => {
    setSelectedAmount(e.target.value);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (

   
    
    <section className="donate-section section-padding">
         <Header/>
      <div className="container">
        {/* Top Text */}
        <div className="donation-from">
          <div className="text ">
            <h2>We are always open for children</h2>
            <h3>Support for eating funds for hungry people</h3>
          </div>
          <div className="Support">
            <span>
              Donate Now <span>24/7</span> Support
            </span>
          </div>

          {/* Progress Info */}
          <div className="progress-wrap">
            <ul>
              <li>
                <span>$7,560.00</span>
                <span className="title">Raised</span>
              </li>
              <li>
                <span>$10,000.00</span>
                <span className="title">Goal</span>
              </li>
            </ul>
            <div className="progress-item">
              <div className="progress">
                <div className="bar" style={{ width: "50%" }}></div>
              </div>
              <span className="cssProgress-label">50%</span>
            </div>
          </div>

          {/* Donation Amounts */}
          <div className="donor-form-box" style={{ marginTop: "3rem" }}>
            <h3 className="form-title">Details</h3>
            <form className="donor-form">
              <div className="form-grid">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleFormChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleFormChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleFormChange}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleFormChange}
                />
              </div>
              <textarea
                name="message"
                rows="6"
                placeholder="Message"
                value={formData.message}
                onChange={handleFormChange}
              ></textarea>
            </form>
          </div>
          <div className="donate-amount">
            {[100, 200, 300, 400, 600].map((amount) => (
              <button
                key={amount}
                className={`amount-btn ${
                  selectedAmount === `$${amount}` ? "active" : ""
                }`}
                onClick={() => handleAmountClick(amount)}
              >
                ${amount}
              </button>
            ))}
            <input
              type="text"
              className="addAmount-value"
              placeholder="$Custom"
              value={selectedAmount}
              onChange={handleInputChange}
            />
          </div>

          {/* Donate Button */}
          <div className="donate-now">
            <div className="donation-one__btn-box">
              <a href="#" className="donation-one__btn theme-btn">
                Donate Now <i className="flaticon-heart"></i>
              </a>
            </div>
          </div>

          {/* Donor Info Form */}
          
        </div>
      </div>

      {/* Background Shapes */}
      <div className="shape">
        {/* <img src={shape2} alt="shape" /> */}
      </div>
      <div className="right-text">
        <h1>Donate Now</h1>
        <div className="shape-2">
          {/* <img src={shape3} alt="shape" /> */}
        </div>
      </div>
    </section>
  );
};

export default DonatePage;
