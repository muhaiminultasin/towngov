import React from "react";
import { Link } from "react-router-dom";
import Gallery01 from "../../assets/image/Intro/city.jpg";
import Gallery02 from "../../assets/image/Intro/Villages.jpg";
import gallery04 from "../../assets/image/gallery/about-4.png";
import Shapes03 from "../../assets/image/shapes/about-3.jpg";

function Npg() {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="about-image">
                <div className="about-image-inner img-one">
                  <img src={Gallery01} className="img-fluid" alt="img-2" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-inner">
                <div className="section-title-box">
                  <div className="section-tagline">
                    How It Works - Quick Overview
                  </div>

                  <h1 className="">
                    Global Housing Initiative – Uniting Technology & Community
                  </h1>
                  <ul>
                    <li>
                      We bridge the gap between technology, community, and policy.
                    </li>
                    <li>
                      We partner with cities, developers, and investors to implement large-scale housing solutions.
                    </li>
                    <li>
                      Our model ensures long-term affordability and sustainable urban growth.
                    </li>
                  </ul>
                  <div>
                    <Link to="/solutions">
                      <button className="btn btn-primary">
                        How GHI Works →
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Npg;
