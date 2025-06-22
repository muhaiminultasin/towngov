import React from "react";
import Shapes01 from "../../../assets/image/shapes/shape-1.png";
import Gallery07 from "../../../assets/image/who.jpg";

function GHIApproach({ sectionRef }) {
  return (
    <>
      <section
        ref={sectionRef}
        id="GHIApproach"
        style={{ scrollMarginTop: "60px" }}
        className="about-one-section"
      >
        <div className="container">
          <div className="row row-gutter-y-40">
            <div className="col-lg-12 col-xl-6">
              <div className="about-one-image">
                <img
                  src={Shapes01}
                  className="floated-image-one"
                  alt="img-58"
                />
                <img src={Gallery07} alt="img-59" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-12 col-xl-6">
              <div className="about-one-inner">
                <div className="section-tagline">Who We Are</div>

                <h2 className="section-title">Who We Are</h2>
                <p>
                We are a global movement dedicated to ensuring everyone has access to safe, decent, and sustainable housing. With a strong focus on collaboration, innovation, and community development, we work to uplift lives and create lasting change. Our mission goes beyond building homes<br></br> <br></br>—we aim to build hope, empower communities, and foster resilience. By uniting people and resources, we strive to transform neighborhoods and offer families the foundation they need to thrive. Together, we’re building a better, more inclusive future for all.
                </p>
                {/* <h5 className="about-one-inner-text">
                  Denounce with righteous indignation and dislike men who are so
                  beguiled &amp; demoralized our power.
                </h5> */}
                {/* <div className="row row-gutter-y-30">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="about-one-card">
                      <div className="about-one-card-number">01</div>
                      <div className="about-one-card-content">
                        <h5>Going Above and Beyond</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="about-one-card">
                      <div className="about-one-card-number">02</div>
                      <div className="about-one-card-content">
                        <h5>Committed to People First</h5>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GHIApproach;
