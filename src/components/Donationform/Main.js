import React from 'react';

function Donationform({ selectedAmount, handleAmountClick, handleInputChange }) {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-box">
              <div className="section-tagline">DONATE</div>
              <h1 className="section-title">Donate Now</h1>
              <p>We are Always Open For Children’s Support For Eating Funds For Hungry People</p>
            </div>
          </div>

          <div className="col-lg-8">

             <div className="col-lg-8 manrope">
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
                            <span className="cssProgress-label">75%</span>
                          </div>
                        </div>
               </div>

            <form
              action="assets/inc/sendemail.php"
              className="contact-form contact-form-validated manrope"
              method="post"
            >
              <div className="row row-gutter-10">
                {/* Input fields */}
                <div className="col-12 col-lg-6">
                  <input
                    type="text"
                    id="name"
                    className="input-text"
                    placeholder="Your name"
                    name="name"
                    aria-required="true"
                  />
                </div>

                <div className="col-12 col-lg-6">
                  <input
                    type="email"
                    id="email"
                    className="input-text"
                    placeholder="Email address"
                    name="email"
                    aria-required="true"
                  />
                </div>

                <div className="col-12 col-lg-6">
                  <input
                    type="text"
                    id="phone"
                    className="input-text"
                    placeholder="Phone number"
                    name="phone"
                    aria-required="true"
                  />
                </div>

                <div className="col-12 col-lg-6">
                  <input
                    type="text"
                    id="subject"
                    className="input-text"
                    placeholder="Subject"
                    name="subject"
                    aria-required="true"
                  />
                </div>

                <div className="col-12 col-lg-12">
                  <textarea
                    name="message"
                    placeholder="Write a message"
                    className="input-text"
                    aria-required="true"
                    defaultValue={""}
                  />
                </div>

                {/* ⬇️ Donation Amount Section ⬇️ */}
                <div className="col-12">
                  <div className="donate-amount">
                    {[100, 200, 300, 400, 600].map((amount) => (
                      <button
                        type="button"
                        key={amount}
                        className={`amount-btn amount ${
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
                      placeholder="$ Enter your amount"
                      value={selectedAmount}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="col-12 col-lg-12">
                  <button className="btn btn-primary">Donate Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Donationform;
