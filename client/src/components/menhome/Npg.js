import React from "react";
import { Link } from "react-router-dom";
import Gallery01 from "../../assets/image/architecture.jpg";
// import Gallery02 from "../../assets/image/Intro/Villages.jpg";
// import gallery04 from "../../assets/image/gallery/about-4.png";
// import Shapes03 from "../../assets/image/shapes/about-3.jpg";

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
                    NeoPOLYGON Technology (NPT) – Engineering the Future of
                    Housing
                  </h1>
                  <ul>
                    <li>
                      Proprietary PolyFRAME Tower System for rapid, modular, and
                      disaster-resilient construction.
                    </li>
                    <li>
                      Fire, flood, wind, and earthquake-resistant steel-concrete
                      composite structures.
                    </li>
                    <li>
                      Scalable solutions tailored for urban and rural housing
                      needs worldwide.
                    </li>
                  </ul>
                  <div>
                    <Link to="/solutions">
                      <button className="btn btn-primary">
                        Learn More About NPT →
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
