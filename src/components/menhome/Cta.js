import React from "react";
import { Link } from "react-router-dom";
import Gallery01 from "../../assets/image/Intro/city.jpg";
// import Gallery02 from "../../assets/image/Intro/Villages.jpg";
// import gallery04 from "../../assets/image/gallery/about-4.png";
// import Shapes03 from "../../assets/image/shapes/about-3.jpg";

function Uvi() {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="about-inner">
                <div className="section-title-box">
                  <div className="section-tagline">Call to Action</div>

                  <h1 className="">How You Can Get Involved</h1>
                  <p></p>

                  <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-6">
                      <div className="about-card">
                        <h4 className="about-title">
                          <i className="fa-solid fa-circle-check" />
                          For Investors & Developers
                        </h4>
                        <p className="about-text">
                          Invest in sustainable, scalable housing with long-term
                          impact. Be part of the Urban Village Initiative
                          Community Fund and contribute to next-generation
                          housing solutions.
                        </p>
                        <Link to="">
                          <p>Explore Investment Opportunities →</p>
                        </Link>
                      </div>
                      <div className="about-card">
                        <h4 className="about-title">
                          <i className="fa-solid fa-circle-check" />
                          For Government & Nonprofit Partners
                        </h4>
                        <p className="about-text">
                          Partner with GHI to develop policies, pilot projects,
                          and large-scale housing solutions tailored for your
                          region.
                        </p>
                        <Link to="">
                          <p>Partner With Us →</p>
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-6">
                      <div className="about-card">
                        <h4 className="about-title">
                          <i className="fa-solid fa-circle-check" />
                          For Communities & Individuals
                        </h4>
                        <p className="about-text">
                          Join the Urban Village Initiative! Please find out how
                          you can become a resident, support community-led
                          housing, or contribute to our mission.
                        </p>
                        <Link to="">
                          <p>Join the Movement →</p>
                        </Link>
                      </div>
                    </div>

                   
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-image">
                <div className="about-image-inner img-one">
                  <img src={Gallery01} className="img-fluid" alt="img-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Uvi;
