import React, { useEffect } from "react";

const Donationform = () => {
  useEffect(() => {
    // Load Donorbox widget script
    const script = document.createElement("script");
    script.src = "https://donorbox.org/widget.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          {/* Left Side Content */}
          <div className="col-lg-4">
            <div className="contact-box">
              <div className="section-tagline">DONATE</div>
              <h1 className="section-title">Support Our Cause</h1>
              <p>
                We are always open for support to help the hungry and vulnerable.
                Your donation matters.
              </p>
              <ul className="donation-info">
                <li><strong>Goal:</strong> $10,000.00</li>
                <li><strong>Raised:</strong> $7,560.00</li>
                <li><strong>Progress:</strong> 75%</li>
              </ul>
              <div className="progress-item">
                <div className="progress">
                  <div className="bar" style={{ width: "75%" }}></div>
                </div>
                <span className="cssProgress-label">75%</span>
              </div>
            </div>
          </div>

          {/* Donorbox Embed */}
          <div className="col-lg-8">
            <div className="donorbox-embed-wrapper" style={{ maxWidth: "100%" }}>
              <iframe
                src="https://donorbox.org/embed/your-form-name"
                name="donorbox"
                allowpaymentrequest="true"
                frameBorder="0"
                scrolling="no"
                seamless="seamless"
                height="900px"
                width="100%"
                style={{ maxWidth: "500px", minWidth: "310px", width: "100%" }}
                title="Donate"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donationform;
