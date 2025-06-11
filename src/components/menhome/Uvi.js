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
                  <div className="section-tagline">
                    How It Works - Quick Overview
                  </div>

                  <h1 className="">
                    Urban Village Initiative (UVI) – A New Model for Affordable Living
                  </h1>
                  <ul>
                    <li>
                      Community-driven housing development, owned and invested in by residents.
                    </li>
                    <li>
                      Partnerships with local governments and private investors to fund sustainable projects.
                    </li>
                    <li>
                      Focused on affordable rent-to-own models and social equity in housing
                    </li>
                  </ul>
                  <div>
                    <Link to="/solutions">
                      <button className="btn btn-primary">
                        Explore UVI →
                      </button>
                    </Link>
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
