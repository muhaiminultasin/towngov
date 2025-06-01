import React, { useState, useEffect } from "react";
import Header from "../../headerone/Main";
// import shape2 from "../../images/about/shape2.svg";
// import shape3 from "../../images/cta-shap-3.svg";
import Bredcom from "../../Bredcom/Main";
import Donationform from "../../Donationform/Main"; 

const DonatePage = () => {
  useEffect(() => {
    document.getElementById("title").innerHTML = "Donation || TownGov";
  }, []);

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
      <Header />
      <Bredcom subtitle="Home" title="Donation" subtitledown="Donation" />
      <div className="container">
        {/* Top Text */}
        <div className="donation-from">
          <div className="text ">
            <h2>We are always Open For Children</h2>
            <h3>Support For Eating Funds For Hungry People</h3>
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
        {/* Doner details  */}
        <Donationform
  selectedAmount={selectedAmount}
  handleAmountClick={handleAmountClick}
  handleInputChange={handleInputChange}
/>

          {/* Donation Amounts */}
          

          {/* Donate Button */}
          <div className="donate-now">
            <div className="donation-one__btn-box">
              <a href="#" className="donation-one__btn theme-btn ">
                Donate Now <i className="flaticon-heart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Shapes */}
      <div className="shape">{/* <img src={shape2} alt="shape" /> */}</div>
      <div className="right-text">
        <h2 className="">Donate Now</h2>
        <div className="shape-2">{/* <img src={shape3} alt="shape" /> */}</div>
      </div>
    </section>
  );
};

export default DonatePage;
