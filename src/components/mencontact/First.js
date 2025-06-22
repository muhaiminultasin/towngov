import React from "react";
import { Link } from "react-router-dom";

function First() {
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-box">
                <div className="section-tagline">WRITE A MESSAGE</div>

                <h1 className="section-title">Let’s Build Together</h1>
                <p>
                  Have questions, ideas, or partnership proposals? Reach out to
                  the GHI team—we’re here to collaborate, support, and shape the
                  future of resilient housing with you.{" "}
                </p>
              </div>
            </div>

            <div className="col-lg-8">
              <form
                action="assets/inc/sendemail.php"
                className="contact-form  contact-form-validated"
                method="post"
              >
                <div className="row row-gutter-10">
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

                  <div className="col-12 col-lg-12">
                    <button className="btn btn-primary">Send a Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-gmap-section">
        <div className="container">
          <div className="responsive-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423285.0210205526!2d-118.6919303544127!3d34.02073049682717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0b6e4d2c63f%3A0xb42e0c6f8a65ebce!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sbd!4v1718614063159!5m2!1sen!2sbd"
              width={600}
              height={450}
              title="California Map"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="cta-four-section">
        <div className="container">
          <div className="cta-four-inner">
            <div className="row row-gutter-y-20 ">
              <div className="col-12 col-lg-6 col-xl-3">
                <div className="cta-four-content">
                  <i className="flaticon-help" />
                  <div className="cta-four-content-box">
                    <span>Have Question?</span> <br></br>
                    <Link to="tel:+92-003-68-090"><p>00000000menab</p></Link>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-6 col-xl-3">
                <div className="cta-four-content">
                  <i className="flaticon-envelope-3" />
                  <div className="cta-four-content-box">
                    <span>Write Email</span> <br></br>
                    <Link to="mailto:info@ghi.com"><p>info@ghi.com</p></Link>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6 col-xl-4">
                <div className="cta-four-content">
                  <i className="flaticon-location-pin" />
                  <div className="cta-four-content-box">
                    <span>Visit Office</span>
                    <p>
                        California, United State
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6 col-xl-2">
                <div className="cta-four-content">
                  <div className="cta-four-widget-socials">
                    <a href="https://twitter.com/">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a href="https://www.facebook.com/">
                      <i className="fa-brands fa-facebook" />
                    </a>
                    <a href="https://in.pinterest.com/">
                      <i className="fa-brands fa-pinterest-p" />
                    </a>
                    <a href="https://www.linkedin.com/in/fraidoon-faridnia-082343a0" target="_blank">
                      <i className="fa-brands fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default First;
