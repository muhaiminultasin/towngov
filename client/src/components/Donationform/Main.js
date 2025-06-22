import React from "react";
import { loadStripe } from "@stripe/stripe-js";

// Load Stripe only if env key is available
const stripePromise = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)
  : null;

function Donationform({ selectedAmount, handleAmountClick, handleInputChange }) {
  const handleDonate = async (e) => {
    e.preventDefault();

    // Parse the selected amount (e.g., "$100" → 100)
    const amount = selectedAmount ? parseFloat(selectedAmount.replace("$", "")) : 0;

    // Check if amount is valid
    if (!amount || isNaN(amount)) {
      alert("Please select a valid donation amount.");
      return;
    }

    // Check if Stripe is properly configured
    if (!stripePromise) {
      alert("Stripe is not configured.");
      return;
    }

    const stripe = await stripePromise;

    try {
      // Send amount to the backend to create a Stripe session
      const response = await fetch("http://localhost:5000/api/stripe/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const session = await response.json();

      if (!session.id) {
        alert("Session creation failed. Please try again.");
        return;
      }

      // Redirect to Stripe checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
        alert("Stripe redirect failed. Try again.");
      }
    } catch (error) {
      console.error("Stripe error", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-box">
              <div className="section-tagline">DONATE</div>
              <h1 className="section-title">Donate Now</h1>
              <p>We are always open for children’s support for eating funds for hungry people</p>
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
                    <span className="title"> Raised</span>
                  </li>
                  <li>
                    <span>$10,000.00</span>
                    <span className="title"> Goal</span>
                  </li>
                </ul>
                <div className="progress-item">
                  <div className="progress">
                    <div className="bar" style={{ width: "75%" }}></div>
                  </div>
                  <span className="cssProgress-label">75%</span>
                </div>
              </div>
            </div>

            <form className="contact-form contact-form-validated" onSubmit={handleDonate}>
              <div className="row row-gutter-10">
                <div className="col-12 col-lg-6">
                  <input
                    type="text"
                    className="input-text"
                    placeholder="Your name"
                    name="name"
                    aria-required="true"
                  />
                </div>

                <div className="col-12 col-lg-6">
                  <input
                    type="email"
                    className="input-text"
                    placeholder="Email address"
                    name="email"
                    aria-required="true"
                  />
                </div>

                <div className="col-12 col-lg-6">
                  <input
                    type="text"
                    className="input-text"
                    placeholder="Phone number"
                    name="phone"
                    aria-required="true"
                  />
                </div>

                <div className="col-12 col-lg-6">
                  <input
                    type="text"
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
                  />
                </div>

                {/* ⬇️ Donation Amount Buttons ⬇️ */}
                <div className="col-12">
                  <div className="donate-amount">
                    {[100, 200, 300, 400, 600].map((amount) => (
                      <button
                        type="button"
                        key={amount}
                        className={`amount-btn amount ${selectedAmount === `$${amount}` ? "active" : ""}`}
                        onClick={() => handleAmountClick(`$${amount}`)} // format once
                      >
                        ${amount}
                      </button>
                    ))}
                    <input
                      type="text"
                      className="addAmount-value amount"
                      placeholder="$ Enter your amount"
                      value={selectedAmount}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Stripe Donate Button */}
                <div className="col-12 col-lg-12">
                  <button type="submit" className="btn btn-primary">
                    Donate Now
                  </button>
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
